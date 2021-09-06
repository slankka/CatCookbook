---
title: 路由配置
---

### 路由的作用

路由配置是 CAT 集群流量负载均衡最重要的一环。路由配置提供了默认机器列表、多机房划分、地域划分等基本功能，路由选择的优先级为：同机房 > 同地域 > 默认机器 > 备用机器。

对于流量较高的机器，用户可以扩展相应的策略，通过路由配置将部分流量指定到低负载的机器。

### 配置入口

[http:///localhost:8080/s/config?op=routerConfigUpdate](http:///localhost:8080/s/config?op=routerConfigUpdate)

### 配置示例说明

通过一个实际生产环境的场景来说明路由配置的最佳实践：

1. CAT 集群信息

![](https://raw.githubusercontent.com/wiki/dianping/cat/resource/ch2-config/server_group.jpg)

2. 路由配置示例

``` xml
<?xml version="1.0" encoding="utf-8"?>
<router-config backup-server="10.8.101.1" backup-server-port="2280" backup-server-http-port="8080">
    <!-- sh_group1 -->
    <default-server id="10.8.101.1" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.8.101.2" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.8.101.3" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.8.101.4" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.8.101.5" weight="1.0" port="2280" enable="true" http-port="8080"/>

    <!-- sh_group2 -->
    <default-server id="10.9.101.1" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.9.101.2" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.9.101.3" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.9.101.4" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.9.101.5" weight="1.0" port="2280" enable="true" http-port="8080"/>

    <!-- bj_group1 -->
    <default-server id="10.2.170.1" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.2.170.2" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.2.170.3" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.2.170.4" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.2.170.5" weight="1.0" port="2280" enable="true" http-port="8080"/>

    <!-- bj_group2 -->
    <default-server id="10.3.170.1" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.3.170.2" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.3.170.3" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.3.170.4" weight="1.0" port="2280" enable="true" http-port="8080"/>
    <default-server id="10.3.170.5" weight="1.0" port="2280" enable="true" http-port="8080"/>

    <network-policy id="shanghai" title="default" block="false" server-group="shanghai">
        <network id="10.8.101.0/24"/>
        <network id="10.8.102.0/24"/>
        <network id="10.9.101.0/24"/>
        <network id="10.9.102.0/24"/>
    </network-policy>

    <network-policy id="beijing" title="default" block="false" server-group="beijing">
        <network id="10.2.170.0/24"/>
        <network id="10.2.171.0/24"/>
        <network id="10.3.170.1/24"/>
        <network id="10.3.171.1/24"/>
    </network-policy>

    <network-policy id="sh_group1" title="default" block="false" server-group="sh_group1">
        <network id="10.8.101.0/24"/>
        <network id="10.8.102.0/24"/>
    </network-policy>

    <network-policy id="sh_group2" title="default" block="false" server-group="sh_group1">
        <network id="10.9.101.0/24"/>
        <network id="10.9.102.0/24"/>
    </network-policy>

    <network-policy id="bj_group1" title="default" block="false" server-group="bj_group1">
        <network id="10.2.170.0/24"/>
        <network id="10.2.171.0/24"/>
    </network-policy>

    <network-policy id="bj_group2" title="default" block="false" server-group="bj_group1">
        <network id="10.3.170.0/24"/>
        <network id="10.3.171.0/24"/>
    </network-policy>

    <network-policy id="default" title="default" block="false" server-group="default">
        <network id="10.8.101.0/24"/>
        <network id="10.3.170.0/24"/>
    </network-policy>

    <server-group id="default" title="默认机器">
        <group-server id="10.8.101.1"/>
        <group-server id="10.8.101.2"/>
        <group-server id="10.3.170.1"/>
        <group-server id="10.3.170.2"/>
    </server-group>

    <server-group id="sh_group1" title="上海机房一组">
        <group-server id="10.8.101.1"/>
        <group-server id="10.8.101.2"/>
        <group-server id="10.8.101.3"/>
        <group-server id="10.8.101.4"/>
        <group-server id="10.8.101.5"/>
    </server-group>

    <server-group id="sh_group2" title="上海机房二组">
        <group-server id="10.9.101.1"/>
        <group-server id="10.9.101.2"/>
        <group-server id="10.9.101.3"/>
        <group-server id="10.9.101.4"/>
        <group-server id="10.9.101.5"/>
    </server-group>

    <server-group id="bj_group1" title="北京机房一组">
        <group-server id="10.2.170.1"/>
        <group-server id="10.2.170.2"/>
        <group-server id="10.2.170.3"/>
        <group-server id="10.2.170.4"/>
        <group-server id="10.2.170.5"/>
    </server-group>

    <server-group id="bj_group2" title="北京机房二组">
        <group-server id="10.3.170.1"/>
        <group-server id="10.3.170.2"/>
        <group-server id="10.3.170.3"/>
        <group-server id="10.3.170.4"/>
        <group-server id="10.3.170.5"/>
    </server-group>

    <server-group id="shanghai" title="上海机器">
        <group-server id="10.8.101.1"/>
        <group-server id="10.8.101.2"/>
        <group-server id="10.8.101.3"/>
        <group-server id="10.8.101.4"/>
        <group-server id="10.8.101.5"/>
        <group-server id="10.9.101.1"/>
        <group-server id="10.9.101.2"/>
        <group-server id="10.9.101.3"/>
        <group-server id="10.9.101.4"/>
        <group-server id="10.9.101.5"/>
    </server-group>

    <server-group id="beijing" title="北京机器">
        <group-server id="10.2.170.1"/>
        <group-server id="10.2.170.2"/>
        <group-server id="10.2.170.3"/>
        <group-server id="10.2.170.4"/>
        <group-server id="10.2.170.5"/>
        <group-server id="10.3.170.1"/>
        <group-server id="10.3.170.2"/>
        <group-server id="10.3.170.3"/>
        <group-server id="10.3.170.4"/>
        <group-server id="10.3.170.5"/>
    </server-group>

    <domain id="service-1">
        <group id="default">
            <server id="10.8.101.1" port="2280" weight="1.0"/>
            <server id="10.8.101.2" port="2280" weight="1.0"/>
            <server id="10.8.101.3" port="2280" weight="1.0"/>
        </group>
        <group id="shanghai">
            <server id="10.8.101.1" port="2280" weight="1.0"/>
            <server id="10.8.101.2" port="2280" weight="1.0"/>
            <server id="10.8.101.3" port="2280" weight="1.0"/>
        </group>
        <group id="beijing">
            <server id="10.2.170.1" port="2280" weight="1.0"/>
            <server id="10.2.170.3" port="2280" weight="1.0"/>
            <server id="10.2.170.5" port="2280" weight="1.0"/>
        </group>
    </domain>

    <domain id="service-2">
        <group id="default">
            <server id="10.8.101.1" port="2280" weight="1.0"/>
            <server id="10.8.101.3" port="2280" weight="1.0"/>
            <server id="10.8.101.5" port="2280" weight="1.0"/>
        </group>
        <group id="sh_group1">
            <server id="10.8.101.1" port="2280" weight="1.0"/>
            <server id="10.8.101.3" port="2280" weight="1.0"/>
            <server id="10.8.101.5" port="2280" weight="1.0"/>
        </group>
        <group id="shanghai">
            <server id="10.8.101.1" port="2280" weight="1.0"/>
            <server id="10.8.101.2" port="2280" weight="1.0"/>
            <server id="10.8.101.3" port="2280" weight="1.0"/>
        </group>
        <group id="bj_group1">
            <server id="10.2.170.1" port="2280" weight="1.0"/>
            <server id="10.2.170.3" port="2280" weight="1.0"/>
            <server id="10.2.170.5" port="2280" weight="1.0"/>
        </group>
        <group id="beijing">
            <server id="10.2.170.1" port="2280" weight="1.0"/>
            <server id="10.2.170.2" port="2280" weight="1.0"/>
            <server id="10.2.170.3" port="2280" weight="1.0"/>
        </group>
    </domain>
</router-config>
```

配置说明：

default-server :  CAT 集群机器列表

    * enable : true 表示机器处于在线状态，主动对外提供服务；false 表示不对外主动提供服务，可用于定向测试、灰度测试以及备用应急处理。

    * weight : 机器权重比例。在定期构建路由报表时，会根据权重以及机器丢失数据量进行路由调整，具体参考 RouterConfigAdjustor。

network-policy : 网络划分，与公司内部网段划分有关。

    * network : 具体的网段划分。 例如 <network id="10.8.101.0/24"/> 对应在 <server-group id="sh_group1" title="上海机房一组"/> 中寻找最佳路由。

server-group : CAT 集群按地域、机房等策略划分，根据不同场景需求按需配置。   
    

### 应用定向路由 & 动态调整

使用路由配置中 domain 配置项可以针对具体应用指定路由，常用于流量均衡调整、灰度测试等。

上述路由配置示例中应用 service-1 配置如下：

``` xml
<domain id="service-1">
    <group id="default">
        <server id="10.8.101.1" port="2280" weight="1.0"/>
        <server id="10.8.101.2" port="2280" weight="1.0"/>
        <server id="10.8.101.3" port="2280" weight="1.0"/>
    </group>
    <group id="shanghai">
        <server id="10.8.101.1" port="2280" weight="1.0"/>
        <server id="10.8.101.2" port="2280" weight="1.0"/>
        <server id="10.8.101.3" port="2280" weight="1.0"/>
    </group>
    <group id="beijing">
        <server id="10.2.170.1" port="2280" weight="1.0"/>
        <server id="10.2.170.3" port="2280" weight="1.0"/>
        <server id="10.2.170.5" port="2280" weight="1.0"/>
    </group>
</domain>
```

如果应用 service-1 集群中某个 IP 属于 beijing 的 server-group ，那么将优先使用 beijing 分组所提供的路由列表。


