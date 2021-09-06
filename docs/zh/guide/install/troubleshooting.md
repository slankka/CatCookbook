---
title: Troubleshooting
---

::: tip
如果您配置了日志持久化，则有可能遇到如下错误。

本文作者：slankka
:::

## 常见Kerberos 错误
**错误1**
```
No valid credentials provided(Mechanism level: Failed to find any Kerberos tgt)
```
解决方案，在CAT Server端加入JVM启动参数
```
-Djavax.security.auth.useSubjectCredsOnly=false
```
参见：
https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html


***


**错误2**
```
Caused by: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Attempt to obtain new INITIATE credentials failed! (null))] 
```
详细错误参见 [ISSUE #1644](https://github.com/dianping/cat/issues/1644)

解决方案，开启kerberos debug级别日志, 如果看到：
```
unsupported key type found the default TGT: 18
```
解压`$JAVA_HOME/jre/lib/security/local_policy.jar` 进去如果看到：
```
// Some countries have import limits on crypto strength. This policy file
// is worldwide importable.

grant {
    permission javax.crypto.CryptoPermission "DES", 64;
    permission javax.crypto.CryptoPermission "DESede", *;
    permission javax.crypto.CryptoPermission "RC2", 128, 
                                     "javax.crypto.spec.RC2ParameterSpec", 128;
    permission javax.crypto.CryptoPermission "RC4", 128;
    permission javax.crypto.CryptoPermission "RC5", 128, 
          "javax.crypto.spec.RC5ParameterSpec", *, 12, *;
    permission javax.crypto.CryptoPermission "RSA", *;
    permission javax.crypto.CryptoPermission *, 128;
};
```
说明该JDK版本 因为某些国家的进口管制限制，默认不支持AES 256的加密解密。需要去Oracle官网下载并替换`local_policy.jar`和`US_export_policy.jar`。(这两个文件在$JAVA_HOME/jre/lib/security/)
