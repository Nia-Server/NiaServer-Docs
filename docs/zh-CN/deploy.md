---
lang: zh-CN
title: 🖥️部署指南
---
# 🖥️部署指南（编写中...）

::: warning 编写中页面提醒
本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！
:::

>[NIA服务器V4](https://www.github.com/NIANIANKNIA/NIASERVER-V4)仍处于开发状态中

### 下载对应版本的行为包

### 修改配置文件

```javascript
const config = {
    "language": "zh-CN",
    "USEMenu": true,
    "USEShop": true,
    "USERandomDATA": true,
    "USETpa": true,
    "USEHome": true,
    "MoneyScoreboardName": "money",
    "MoneyScoreboardName": "能源币",
    "TimeScoreboardName":"time",
    "OPTAG": "op",
    "OPMENUPassword": "123456",
    "pos": [100,100,100],
    "islandCfg": {
        "R":  1000,
        "CX": 402,
        "CY": 100,
        "CZ": 547
    }
}
```

### （可选）根据需求删除多余文件

### （可选）本地测试

### 部署到服务器上