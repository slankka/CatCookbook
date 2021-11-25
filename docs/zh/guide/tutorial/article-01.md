---
title: 如何去掉cat-client.xml配置
---

::: tip 作者
本文作者：slankka
:::

# 如何去掉cat-client.xml配置

## 自定义ClientConfigProvider

**步骤**

新建 `src/main/resources/META-INF/services/com.dianping.cat.configuration.ClientConfigProvider` SPI文件

填写`ClientConfigProvider`完全限定类名称：

```
com.slankka.tutorial.advanced.CatClientSupport
```

**好处**
* 便于容器化，避免附带过多文件
* 避免出现本地开发环境，或者某些运行环境，忘记配置 /data/appdata/cat/cat-client.xml 这个文件时，出现Java类加载错误

```java
import com.ctrip.framework.apollo.ConfigService;
import com.dianping.cat.configuration.ClientConfigProvider;
import com.dianping.cat.configuration.client.entity.ClientConfig;
import com.dianping.cat.configuration.client.entity.Server;

/**
 * 客户端不再需要cat-client.xml外部文件
 */
public class CatClientSupport implements ClientConfigProvider {

    private static ClientConfig clientConfig;

    @Override
    public synchronized ClientConfig getClientConfig() {
        if (clientConfig == null) {
            clientConfig = new ClientConfig();
            clientConfig.setEnabled(true);
            clientConfig.setMode("client");
            Server server = new Server(ConfigService.getAppConfig().getProperty("cat.host", "127.0.0.1"));
            server.setPort(ConfigService.getAppConfig().getIntProperty("cat.port", 2280));
            server.setHttpPort(ConfigService.getAppConfig().getIntProperty("cat.httpPort", 8080));
            clientConfig.addServer(server);
        }
        return clientConfig;
    }
}
```

*注：*
* 上述代码，手动指定CAT的三条配置，这里是从Ctrip Apollo中动态获取。
* 因为这部分代码在启动周期里比较早，因此使用了Apollo的原生API。
