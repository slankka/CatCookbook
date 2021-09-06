---
title: 日志持久化
---


::: tip
CAT 默认没有开启日志持久化，仅写入硬盘，这对中小型公司来说足够了，但如果需要持久化较大日志量，则可以开启HDFS持久化功能

本文作者：slankka
:::

## CAT使用HDFS存储logview

#### 配置说明
``` xml
<hdfs id="logview" max-size="128M" server-uri="hdfs://dc1" base-dir="cat/logview"/>
```
server-uri是HDFS文件系统的URI，base-dir为cat/logview 实际上写入的路径为 `hdfs://dc1/user/<cat>/cat/logview`

**注意请使用可以访问HDFS集群的Linux账户启动CAT Server，也就是keytab所对应的Linux账户。这里假设用户名是cat**

#### Kerberos
``` xml
<properties>
    <property name="hadoop.security.authentication" value="kerberos"/>
    <property name="dfs.namenode.kerberos.principal" value="hdfs/YYY.XXX.COM"/>
    <property name="dfs.cat.kerberos.principal" value="cat/xx.xx.xxx.xxx@YYY.XXX.COM"/>
    <property name="dfs.cat.keytab.file" value="/path/to/keytab/cat.keytab_xx.xx.xxx.xxx"/>
    <property name="java.security.krb5.realm" value="YYY.XXX.COM"/>
    <property name="java.security.krb5.kdc" value="AA.BB.CC.DD"/>
</properties>
```
注意: 
- name 中的cat 不需要替换，他是代码的固定配置名称。只需要改value的部分。

- 相关配置，可以查阅/etc/krb5.conf，或者询问集群运维。


#### HDFS使用Nameservice：

注意当使用HDFS Nameservice时，例如server-uri="hdfs://dc1/"时，请将core-site.xml和hdfs-site.xml所在目录加入ClassPath，例如/etc/hadoop/conf/
``` bash
export CLASSPATH=$CLASSPATH:/etc/hadoop/conf/
```
*注意，对于tomcat，不要在start.sh内修改CLASSPATH，得按照catalina.sh中的注释要求，在同级目录下新建、修改setenv.sh文件*

CAT 上传文件的Transaction为 System/UploadDump，可去CAT中查看是否成功。亦可以在HDFS中检查:
``` bash
hadoop fs -ls hdfs://dc1/<cat account>/cat/logview
```