---
title: 如何临时关闭CAT
---

::: tip 作者
本文作者：slankka
:::

# 如何临时关闭CAT

去掉CAT依赖是不可能的（业务代码已经集成）。

查看源码发现：
``` java
//com.dianping.cat.Cat.java

    private static void validate() {
        String enable = Properties.forString().fromEnv().fromSystem().getProperty("CAT_ENABLED", "true");

        if ("false".equals(enable)) {
            CatLogger.getInstance().info("CAT is disable due to system environment CAT_ENABLED is false.");

            enabled = false;
        } else {
            String customDomain = getCustomDomain();

            if (customDomain == null && UNKNOWN.equals(ApplicationEnvironment.loadAppName(UNKNOWN))) {
                CatLogger.getInstance().info("CAT is disable due to no app name in resource file /META-INF/app.properties");
                enabled = false;
            }
        }
    }
```

关闭Cat的方式：

添加JVM参数 : `-DCAT_ENABLED=false`

# 如何阻止Ctrip Apollo启动Dianping CAT

新建 `src\main\resources`目录下的SPI文件

`\META-INF\services\com.ctrip.framework.apollo.tracer.spi.MessageProducerManager`

填写实现类完全限定名称
```
com.ctrip.framework.apollo.tracer.internals.NullMessageProducerManager
```
可以直接阻止Ctrip Apollo 启动Dianping CAT