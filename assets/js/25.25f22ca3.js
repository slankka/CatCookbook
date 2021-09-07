(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{393:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("本文作者：slankka")])]),t._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("p",[t._v("拉取源码后，导入IDE，还需要一些工作要完成。")]),t._v(" "),a("h2",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("此步骤必不可少，否则完败")])]),t._v(" "),a("p",[t._v("参见 "),a("RouterLink",{attrs:{to:"/zh/guide/install/installation.html#编译环境"}},[t._v("服务端部署-编译环境")])],1),t._v(" "),a("h2",{attrs:{id:"本地开发环境找不到类-请先看下一条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地开发环境找不到类-请先看下一条"}},[t._v("#")]),t._v(" 本地开发环境找不到类（请先看下一条）")]),t._v(" "),a("ul",[a("li",[a("s",[t._v("根据ide的类型，在cat目录中执行 mvn eclipse:eclipse 或者 mvn idea:idea，此步骤会生成一些代码文件，直接导入到工程会发现找不到类")])]),t._v(" "),a("li",[a("s",[t._v("如果ide是eclipse，将源码以普通项目到入eclipse中，注意不要以maven项目导入工程")])]),t._v(" "),a("li",[a("s",[t._v("具体可以参考服务端部署文档 https://github.com/dianping/cat/wiki/readme_server")])])]),t._v(" "),a("h2",{attrs:{id:"找不到类的原因和解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找不到类的原因和解决方案"}},[t._v("#")]),t._v(" 找不到类的原因和解决方案")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("如果已经在根目录执行过编译命令，则"),a("strong",[t._v("有可能")]),t._v("被IDE自动识别下述代码生成类。")])]),t._v(" "),a("h3",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dianping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dianping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Machine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dianping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dianping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProcessDomain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dianping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StateReport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dianping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultMerger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("这些类（包括但不限于）是codegen-maven-plugin生成的。\n具体执行时机为：maven的 Phase: generate-sources, 绑定的Goal: dal-model。")]),t._v(" "),a("h3",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("p",[t._v("至少执行一次 "),a("code",[t._v("mvn generate-sources")]),t._v("，执行之后可以看到：\n"),a("code",[t._v("cat-core/target/generated-sources")]),t._v("下有")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dal-jdbc:\n    com.dianping.cat.core\ndal-model:\n    com.dianping.cat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("如果是IDEA：")]),t._v(" "),a("ol",[a("li",[t._v("点击Maven的reimport 即可。")]),t._v(" "),a("li",[t._v("如果上述文件夹不是Generated Sources Root的图标，则"),a("code",[t._v("Mark as Generated Sources Root")]),t._v("。")])]),t._v(" "),a("p",[t._v("其他IDE请参照IDEA。")])])}),[],!1,null,null,null);s.default=e.exports}}]);