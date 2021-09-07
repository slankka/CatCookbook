(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{396:function(s,e,a){"use strict";a.r(e);var t=a(45),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("如果您配置了日志持久化，则有可能遇到如下错误。")]),s._v(" "),a("p",[s._v("本文作者：slankka")])]),s._v(" "),a("h2",{attrs:{id:"常见kerberos-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见kerberos-错误"}},[s._v("#")]),s._v(" 常见Kerberos 错误")]),s._v(" "),a("p",[a("strong",[s._v("错误1")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("No valid credentials provided(Mechanism level: Failed to find any Kerberos tgt)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决方案，在CAT Server端加入JVM启动参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Djavax.security.auth.useSubjectCredsOnly=false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("参见：\nhttps://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("错误2")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Caused by: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Attempt to obtain new INITIATE credentials failed! (null))] \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("详细错误参见 "),a("a",{attrs:{href:"https://github.com/dianping/cat/issues/1644",target:"_blank",rel:"noopener noreferrer"}},[s._v("ISSUE #1644"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("解决方案，开启kerberos debug级别日志, 如果看到：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("unsupported key type found the default TGT: 18\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解压"),a("code",[s._v("$JAVA_HOME/jre/lib/security/local_policy.jar")]),s._v(" 进去如果看到：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// Some countries have import limits on crypto strength. This policy file\n// is worldwide importable.\n\ngrant {\n    permission javax.crypto.CryptoPermission "DES", 64;\n    permission javax.crypto.CryptoPermission "DESede", *;\n    permission javax.crypto.CryptoPermission "RC2", 128, \n                                     "javax.crypto.spec.RC2ParameterSpec", 128;\n    permission javax.crypto.CryptoPermission "RC4", 128;\n    permission javax.crypto.CryptoPermission "RC5", 128, \n          "javax.crypto.spec.RC5ParameterSpec", *, 12, *;\n    permission javax.crypto.CryptoPermission "RSA", *;\n    permission javax.crypto.CryptoPermission *, 128;\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("说明该JDK版本 因为某些国家的进口管制限制，默认不支持AES 256的加密解密。需要去Oracle官网下载并替换"),a("code",[s._v("local_policy.jar")]),s._v("和"),a("code",[s._v("US_export_policy.jar")]),s._v("。(这两个文件在$JAVA_HOME/jre/lib/security/)")])])}),[],!1,null,null,null);e.default=r.exports}}]);