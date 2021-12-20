---
title: 如何让CAT支持同一个机器多个端口的服务
---

::: tip 作者
本文作者：slankka
:::
# 如何让CAT支持同一个机器多个端口的服务
## 思路
目前CAT显示的应用是Domain存储和表示的，一个Domain包含name以及ip，上报的数据以Domain作为应用的维度。

那么是不是可以把同一个 app.name应用的不同端口的实例，按照IP:PORT的方式上报，存储和展示呢？

答案是：一定可以。

那么需要通过本地Java应用程序找到自身监听的端口号，并且设置IP：PORT到Domain这个MODEL内。

## 获取本地Java应用监听的端口
```java
+	/**
+	 * https://stackoverflow.com/questions/3867197/get-the-server-port-number-from-tomcat-without-a-request
+	 */
+	public static List<String> getLocalServletPort() throws MalformedObjectNameException,
+				NullPointerException, UnknownHostException, AttributeNotFoundException,
+		InstanceNotFoundException, MBeanException, ReflectionException {
+		MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();
+		QueryExp subQuery1 = Query.match(Query.attr("protocol"), Query.value("HTTP/1.1"));
+		QueryExp subQuery2 = Query.anySubString(Query.attr("protocol"), Query.value("Http11"));
+		QueryExp query = Query.or(subQuery1, subQuery2);
+		Set<ObjectName> objs = mbs.queryNames(new ObjectName("*:type=Connector,*"), query);
+		String hostname = InetAddress.getLocalHost().getHostName();
+		InetAddress[] addresses = InetAddress.getAllByName(hostname);
+		ArrayList<String> endPoints = new ArrayList<>();
+		for (ObjectName obj : objs) {
+			String scheme = mbs.getAttribute(obj, "scheme").toString();
+			String port = obj.getKeyProperty("port");
+			for (InetAddress addr : addresses) {
+				if (addr.isAnyLocalAddress() || addr.isLoopbackAddress() ||
+						addr.isMulticastAddress()) {
+					continue;
+				}
+				String host = addr.getHostAddress();
+				String ep = scheme + "://" + host + ":" + port;
+				endPoints.add(ep);
+			}
+		}
+		return endPoints;
+	}
+
```

## 修改 ClientConfigValidator
因为凡是创建Domain实例的地方，都是通过 `new Domain(domain)`的方式，IP的设置是通过ClientConfigValidator。

因此可以通过setIp方法来修改，这里直接替换为原IP:PORT。
```java
 public class ClientConfigValidator extends DefaultValidator {
 	private ClientConfig m_config;
 
@@ -75,7 +78,16 @@
 		}
 
 		if (domain.getIp() == null) {
-			domain.setIp(getLocalAddress());
+			String port = "";
+			try {
+				List<String> localServletPort = getLocalServletPort();
+				if (localServletPort.size() > 0) {
+					String s = localServletPort.get(0);
+					port = s.substring(s.lastIndexOf(":"));
+				}
+			}catch (Exception ignore) {
+			}
+			domain.setIp(getLocalAddress() + port);
 		}
 	}
```

## 修改 ServerConfigManager
这里修改正则表达式，让类似于`10.10.10.10:5678`这样的IP通过校验即可。
```java
 	public boolean validateIp(String str) {
 		Pattern pattern = Pattern
-								.compile("^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])$");
+								.compile("^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])[:0-9]*$");
 		return pattern.matcher(str).matches();
 	}
```

## 修改 DefaultMessageManager
这里是上报数据中的Domain
```java
 @Named(type = MessageManager.class)
 public class DefaultMessageManager extends ContainerHolder implements MessageManager, Initializable, LogEnabled {
 
@@ -230,7 +232,16 @@
 		m_hostName = NetworkInterfaceManager.INSTANCE.getLocalHostName();
 
 		if (m_domain.getIp() == null) {
-			m_domain.setIp(NetworkInterfaceManager.INSTANCE.getLocalHostAddress());
+			String port = "";
+			try {
+				List<String> localServletPort = getLocalServletPort();
+				if (localServletPort.size() > 0) {
+					String s = localServletPort.get(0);
+					port = s.substring(s.lastIndexOf(":"));
+				}
+			}catch (Exception ignore) {
+			}
+			m_domain.setIp(NetworkInterfaceManager.INSTANCE.getLocalHostAddress() + port);
 		}
```

## 完毕
修改完成以后，依旧是打包，发布cat-client.jar到私服，然后其他项目引入这个修改好的JAR包。这样便能够以IP:PORT的方式展示应用了。

另外一个思考：这个方法能不能解决MessageTree中的MessageId重复的问题呢？

*说明：经过简单测试，发现本方案是可行的，数据能正常存储，上报，展示，过滤，但由于本人精力有限，能力有限，不能保证能完美解决问题*