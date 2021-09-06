---
title: IDE 配置
---

::: tip
本文作者：slankka
:::

## 开始
拉取源码后，导入IDE，还需要一些工作要完成。

## 依赖
::: danger
此步骤必不可少，否则完败
:::

参见 [服务端部署-编译环境](install/installation.html#编译环境)


## 本地开发环境找不到类（请先看下一条）
- ~~根据ide的类型，在cat目录中执行 mvn eclipse:eclipse 或者 mvn idea:idea，此步骤会生成一些代码文件，直接导入到工程会发现找不到类~~
- ~~如果ide是eclipse，将源码以普通项目到入eclipse中，注意不要以maven项目导入工程~~
- ~~具体可以参考服务端部署文档 https://github.com/dianping/cat/wiki/readme_server~~

## 找不到类的原因和解决方案

::: tip
如果已经在根目录执行过编译命令，则**有可能**被IDE自动识别下述代码生成类。
:::

### 原因
例如
``` java
import com.dianping.cat.consumer.state.model.entity.Detail;
import com.dianping.cat.consumer.state.model.entity.Machine;
import com.dianping.cat.consumer.state.model.entity.Message;
import com.dianping.cat.consumer.state.model.entity.ProcessDomain;
import com.dianping.cat.consumer.state.model.entity.StateReport;
import com.dianping.cat.consumer.state.model.transform.DefaultMerger;
```

这些类（包括但不限于）是codegen-maven-plugin生成的。
具体执行时机为：maven的 Phase: generate-sources, 绑定的Goal: dal-model。

### 解决
至少执行一次 `mvn generate-sources`，执行之后可以看到：
`cat-core/target/generated-sources`下有

```
dal-jdbc:
    com.dianping.cat.core
dal-model:
    com.dianping.cat
```

如果是IDEA：
1. 点击Maven的reimport 即可。
2. 如果上述文件夹不是Generated Sources Root的图标，则`Mark as Generated Sources Root`。

其他IDE请参照IDEA。