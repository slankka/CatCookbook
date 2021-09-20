---
title: 教程
---


## 关闭CAT

去掉CAT依赖是不可能的。

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