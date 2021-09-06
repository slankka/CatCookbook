---
title: 容器化部署
---

## Docker快速部署

#### 说明

1. 支持本机模式快速部署。
2. docker/Dockerfile包含CAT依赖的环境，可以作为源码部署的参考。
3. 默认的运行方式是集成了一个mysql镜像，可以修改为自己的mysql的详细配置。默认运行的mysql服务，将mysql数据挂载到了`docker/mysql/volume`中。

#### 容器构建

``` bash
cd docker
docker-compose up
```

第一次运行以后，数据库中没有表结构，需要通过下面的命令创建表：
    
``` bash
docker exec <container_id> bash -c "mysql -uroot -Dcat < /init.sql"
```
    
说明：`<container_id>`需要替换为容器的真实id。通过 docker ps 可以查看到mysql容器id

#### 依赖配置说明

1. datasources.xml
    - CAT数据库配置，默认配置是mysql镜像，可以按需替换
2. docker-compose.yml
    - 通过docker-compose启动的编排文件，文件中包含cat和mysql。可以屏蔽掉mysql的部分，并且修改cat的环境变量，改为真实的mysql连接信息。
3. client.xml
    - CAT 初始化默认的路由列表，配置此文件可以将客户端数据上报指向到不同环境。
4. datasources.sh
    - 辅助脚本，脚本作用时修改`datasources.xml`，使用环境变量中制定的mysql连接信息。（通过sed命令替换）
