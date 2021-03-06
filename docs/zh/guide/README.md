---
title: 概述
---
### 项目背景

CAT（Central Application Tracking），是基于 Java 开发的分布式实时监控系统。CAT在基础存储、高性能通信、大规模在线访问、服务治理、实时监控、容器化及集群智能调度等领域提供业界领先的、统一的解决方案。CAT 目前在美团的产品定位是应用层的统一监控组件，基本接入了美团所有核心应用，在中间件（RPC、数据库、缓存、MQ 等）框架中得到广泛应用，为各业务线提供系统的性能指标、健康状况、实时告警等。


### CAT的产品价值

- 减少线上问题的发现时间
- 减少问题故障的定位时间
- 辅助应用程序的优化工具


### CAT的优势

- 实时处理：信息的价值会随时间锐减，尤其是事故处理过程中
- 全量数据：最开始的设计目标就是全量采集，全量的好处有很多
- 高可用：所有应用都倒下了，需要监控还站着，并告诉工程师发生了什么，做到故障还原和问题定位
- 故障容忍：CAT 本身故障不应该影响业务正常运转，CAT 挂了，应用不该受影响，只是监控能力暂时减弱
- 高吞吐：要想还原真相，需要全方位地监控和度量，必须要有超强的处理吞吐能力
- 可扩展：支持分布式、跨 IDC 部署，横向扩展的监控系统


### CAT现状

CAT 自 2011 年开源以来，Github 收获 5900+ star，2400+ forks，被 100+ 公司企业使用，其中不乏携程、陆金所、猎聘网、平安等业内知名公司。CAT 在每年全球QCon大会、全球架构与运维技术峰会等都有持续的技术输出，受到行业内认可，越来越多的企业伙伴加入了 CAT 的开源建设工作，为 CAT 的成长贡献了巨大的力量。

2016 年初至今，面对美团业务流量的成倍增长，CAT 在通信、计算、存储方面都遇到了前所未有的挑战。CAT 在美团内部经历了一系列的重大变革，在项目演进过程中，对架构不断升级改造，例如消息采样聚合、消息存储、业务多维度指标监控、统一告警等，最终稳定落地，为服务公司未来几年业务流量增长打下基石。

CAT 持续建设 7 年，不断发展，离不开公司业务的快速成长。面向正在使用 CAT 服务的外部公司，今年将对开源版本进行较大的迭代与更新，未来也将持续把公司内部一些比较好的实践推广出去。


### CAT支持的监控消息类型：

+  **Transaction**	  适合记录跨越系统边界的程序访问行为,比如远程调用，数据库调用，也适合执行时间较长的业务逻辑监控，Transaction用来记录一段代码的执行时间和次数
+  **Event**	   用来记录一件事发生的次数，比如记录系统异常，它和transaction相比缺少了时间的统计，开销比transaction要小
+  **Heartbeat**	表示程序内定期产生的统计信息, 如CPU利用率, 内存利用率, 连接池状态, 系统负载等
+  **Metric**	  用于记录业务指标、指标可能包含对一个指标记录次数、记录平均值、记录总和，业务指标最低统计粒度为1分钟


