---
title: 配置依赖
---
::: tip 作者
本文作者：slankka
:::

::: warning
CAT 依赖 unidal-framework，这部分依赖不在中央仓库，也不在 unidal.org/nexus (CAT依赖的版本已经删除)
::: 

## 如何下载依赖

### 下载unidal依赖

从github下载 <span style="color:blue">**mvn-repo分支**：</span>
``` bash
git clone https://github.com/dianping/cat.git --depth 1 --branch mvn-repo
```
Output:
``` 
Cloning into 'cat'...
remote: Enumerating objects: 432, done.
remote: Counting objects: 100% (432/432), done.
remote: Compressing objects: 100% (260/260), done.
remote: Total 432 (delta 147), reused 409 (delta 138), pack-reused 0
Receiving objects: 100% (432/432), 12.31 MiB | 3.35 MiB/s, done.
Resolving deltas: 100% (147/147), done.
```

::: warning
下载完成后，需要删除
```
org\unidal\maven\plugins\codegen-maven-plugin\2.0.9\ 
```
下的2.0.8版本的所有文件， 否则后面导入到artifactory会报错。
:::

## 技巧
编译时，去掉pom.xml中的unidal.org仓库，改为自己搭建的仓库，或者公司内部私服。


::: tip 使用现代制品管理器
[使用JFrog Artifactory](./dependencies.html#使用jfrog-artifactory)


[使用Sonatype Nexus Repository Manager](./dependencies.html#使用sonatype-nexus-repository-manager)
:::

## 使用JFrog Artifactory

### 安装Artifactory

*Artifactory 开源版本*

下载地址：https://jfrog.com/open-source/#artifactory

安装教程：https://www.jfrog.com/confluence/display/JFROG/Installing+Artifactory



### 导入JFrog Artifactory OSS

<img :src="$withBase('/import_artifacts.jpg')" alt="importArtifacts">


## 使用Sonatype Nexus Repository Manager

### 安装Nexus Repository Manager

| 下载地址 | 安装教程 |
|:---------:|:---------:|
|[2.x 下载地址](https://help.sonatype.com/repomanager2/download/download-archives---repository-manager-oss)|[2.x 安装教程](https://help.sonatype.com/repomanager2/installing-and-running/installing)|
|[3.x 下载地址](https://help.sonatype.com/repomanager3/download/download-archives---repository-manager-3)|[3.x 安装教程](https://help.sonatype.com/repomanager3/installation)|






### 导入Unidal依赖到仓库

直接复制下载的依赖，登录服务器，将整个依赖上传到Nexus Repository Manager 的安装目录内的数据目录，并解压。

具体内容不再展开。
