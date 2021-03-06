---
title: 心跳报表配置
---

### 配置入口

[http://localhost:8080/cat/s/config?op=displayPolicy](http://localhost:8080/cat/s/config?op=displayPolicy)

### 配置示例说明

心跳模板配置的Sample如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<heartbeat-display-policy>
   <group id="System" order="1">
      <metric id="LoadAverage" unit="1" delta="false" order="1" lable="个数" alert="true"/>
      <metric id="FreePhysicalMemory" unit="M" delta="false" order="1" lable="MB" alert="false"/>
      <metric id="FreeSwapSpaceSize" unit="M" delta="false" order="1" lable="MB" alert="false"/>
   </group>
   <group id="GC" order="2">
      <metric id="ParNewCount" unit="1" delta="true" order="1" lable="次数" alert="true"/>
      <metric id="ParNewTime" unit="1000" delta="true" order="1" lable="秒" alert="false"/>
      <metric id="ConcurrentMarkSweepCount" unit="1" delta="true" order="1" title="OldGcCount" lable="次数" alert="true"/>
      <metric id="PS MarkSweepCount" unit="1" delta="true" order="1" title="OldGcCount" lable="次数" alert="true"/>
      <metric id="ConcurrentMarkSweepTime" unit="1" delta="true" order="1" title="OldGcTime" lable="毫秒" alert="false"/>
      <metric id="G1 Young GenerationCount" unit="1" delta="true" order="1" lable="次数" alert="true"/>
      <metric id="G1 Young GenerationTime" unit="1000" delta="true" order="1" lable="秒" alert="true"/>
      <metric id="G1 Old GenerationCount" unit="1" delta="true" order="1" lable="次数" alert="true"/>
      <metric id="G1 Old GenerationTime" unit="1000" delta="true" order="1" lable="秒" alert="true"/>
   </group>
   <group id="JVMHeap" order="3">
      <metric id="Eden Usage" unit="M" delta="false" order="1" lable="MB" alert="false"/>
      <metric id="G1 Eden Space" unit="M" delta="false" order="1" lable="MB" alert="false"/>
      <metric id="Survivor Usage" unit="M" delta="false" order="2" lable="MB" alert="false"/>
      <metric id="G1 Survivor Space" unit="M" delta="false" order="1" lable="MB" alert="false"/>
      <metric id="Code Cache" unit="M" delta="false" order="3" lable="MB" alert="false"/>
      <metric id="Par Eden Space" unit="M" delta="false" order="4" lable="MB" alert="false"/>
      <metric id="Par Survivor Space" unit="M" delta="false" order="5" lable="MB" alert="false"/>
      <metric id="CMS Old Gen" unit="M" delta="false" order="6" lable="MB" alert="false"/>
      <metric id="G1 Old Gen" unit="M" delta="false" order="6" lable="MB" alert="false"/>
      <metric id="CMS Perm Gen" unit="M" delta="false" order="7" lable="MB" alert="false"/>
      <metric id="G1 Perm Gen" unit="M" delta="false" order="7" lable="MB" alert="false"/>
   </group>
   <group id="FrameworkThread" order="4">
      <metric id="HttpThread" unit="1" delta="false" order="1" lable="个数" alert="true"/>
      <metric id="PigeonThread" unit="1" delta="false" order="2" lable="个数" alert="true"/>
      <metric id="ActiveThread" unit="1" delta="false" order="3" lable="个数" alert="true"/>
      <metric id="CatThread" unit="1" delta="false" order="4" lable="个数" alert="false"/>
      <metric id="StartedThread" unit="1" delta="true" order="5" lable="个数" alert="false"/>
   </group>
   <group id="Disk" order="5">
      <metric id="/ Free" unit="M" delta="false" order="1" lable="MB" alert="false"/>
      <metric id="/data Free" unit="M" delta="false" order="2" lable="MB" alert="true"/>
   </group>
   <group id="CatUsage" order="6">
      <metric id="Produced" unit="1" delta="true" order="1" lable="个数" alert="false"/>
      <metric id="Overflowed" unit="1" delta="true" order="2" lable="个数" alert="false"/>
      <metric id="Bytes" unit="M" delta="true" order="2" lable="MB" alert="false"/>
   </group>
   <group id="HeapUsage" order="7">
      <metric id="EdenUsage" unit="M" delta="false" order="1" lable="MB" alert="false"/>
      <metric id="SurvivorUsage" unit="M" delta="false" order="2" lable="MB" alert="false"/>
      <metric id="CodeCache" unit="M" delta="false" order="3" lable="MB" alert="false"/>
      <metric id="ParEdenSpace" unit="M" delta="false" order="4" lable="MB" alert="false"/>
      <metric id="ParSurvivorSpace" unit="M" delta="false" order="5" lable="MB" alert="false"/>
      <metric id="CMSOldGen" unit="M" delta="false" order="6" lable="MB" alert="false"/>
      <metric id="CMSPermGen" unit="M" delta="false" order="7" lable="MB" alert="false"/>
   </group>
</heartbeat-display-policy>
```

配置说明：

group 分类：代表心跳指标的某个类别的指标集合，例如 JVM、System、Disk等。

  * id : 分类名称
  * order : 心跳报表中的展示顺序
  
metric 指标: 代表 group 中具体指标

  * id : 指标名称
  * unit : 指标数值的单位（K、M、G、自定义数值），图表显示值 = 真实值 / unit
  * delta : 是否增量统计，对业务方透明。
  * order : group 内的展示顺序
  * lable : 图表纵坐标的单位

CAT 默认收集了部分心跳信息，例如 GC、JVM、System、Disk、FrameworkThread、CatUsage等。若有其他指标需求，可以做相应扩展代码以及心跳配置。

