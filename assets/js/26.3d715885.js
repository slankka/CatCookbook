(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{400:function(t,a,e){"use strict";e.r(a);var r=e(46),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("作者")]),t._v(" "),e("p",[t._v("本文作者：slankka")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("CAT 依赖 unidal-framework，这部分依赖不在中央仓库，也不在 unidal.org/nexus (CAT依赖的版本已经删除)")])]),t._v(" "),e("h2",{attrs:{id:"如何下载依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何下载依赖"}},[t._v("#")]),t._v(" 如何下载依赖")]),t._v(" "),e("h3",{attrs:{id:"下载unidal依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载unidal依赖"}},[t._v("#")]),t._v(" 下载unidal依赖")]),t._v(" "),e("p",[t._v("从github下载 "),e("span",{staticStyle:{color:"blue"}},[e("strong",[t._v("mvn-repo分支")]),t._v("：")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/dianping/cat.git --depth "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --branch mvn-repo\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Cloning into 'cat'...\nremote: Enumerating objects: 432, done.\nremote: Counting objects: 100% (432/432), done.\nremote: Compressing objects: 100% (260/260), done.\nremote: Total 432 (delta 147), reused 409 (delta 138), pack-reused 0\nReceiving objects: 100% (432/432), 12.31 MiB | 3.35 MiB/s, done.\nResolving deltas: 100% (147/147), done.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("下载完成后，需要删除")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("org\\unidal\\maven\\plugins\\codegen-maven-plugin\\2.0.9\\ \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("下的2.0.8版本的所有文件， 否则后面导入到artifactory会报错。")])]),t._v(" "),e("h2",{attrs:{id:"技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),e("p",[t._v("编译时，去掉pom.xml中的unidal.org仓库，改为自己搭建的仓库，或者公司内部私服。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("使用现代制品管理器")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/guide/install/dependencies.html#使用jfrog-artifactory"}},[t._v("使用JFrog Artifactory")])],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/guide/install/dependencies.html#使用sonatype-nexus-repository-manager"}},[t._v("使用Sonatype Nexus Repository Manager")])],1)]),t._v(" "),e("h2",{attrs:{id:"使用jfrog-artifactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用jfrog-artifactory"}},[t._v("#")]),t._v(" 使用JFrog Artifactory")]),t._v(" "),e("h3",{attrs:{id:"安装artifactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装artifactory"}},[t._v("#")]),t._v(" 安装Artifactory")]),t._v(" "),e("p",[e("em",[t._v("Artifactory 开源版本")])]),t._v(" "),e("p",[t._v("下载地址：https://jfrog.com/open-source/#artifactory")]),t._v(" "),e("p",[t._v("安装教程：https://www.jfrog.com/confluence/display/JFROG/Installing+Artifactory")]),t._v(" "),e("h3",{attrs:{id:"导入jfrog-artifactory-oss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入jfrog-artifactory-oss"}},[t._v("#")]),t._v(" 导入JFrog Artifactory OSS")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/import_artifacts.jpg"),alt:"importArtifacts"}}),t._v(" "),e("h2",{attrs:{id:"使用sonatype-nexus-repository-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用sonatype-nexus-repository-manager"}},[t._v("#")]),t._v(" 使用Sonatype Nexus Repository Manager")]),t._v(" "),e("h3",{attrs:{id:"安装nexus-repository-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nexus-repository-manager"}},[t._v("#")]),t._v(" 安装Nexus Repository Manager")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("下载地址")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("安装教程")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://help.sonatype.com/repomanager2/download/download-archives---repository-manager-oss",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.x 下载地址"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://help.sonatype.com/repomanager2/installing-and-running/installing",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.x 安装教程"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://help.sonatype.com/repomanager3/download/download-archives---repository-manager-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.x 下载地址"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://help.sonatype.com/repomanager3/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.x 安装教程"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"导入unidal依赖到仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入unidal依赖到仓库"}},[t._v("#")]),t._v(" 导入Unidal依赖到仓库")]),t._v(" "),e("p",[t._v("直接复制下载的依赖，登录服务器，将整个依赖上传到Nexus Repository Manager 的安装目录内的数据目录，并解压。")]),t._v(" "),e("p",[t._v("具体内容不再展开。")])])}),[],!1,null,null,null);a.default=s.exports}}]);