---
lang: zh-CN
title: Ntrade使用方法
---

# Ntrade使用教程

### 初始化插件

1. 配置好相应的BDS服务端，并安装好[LiteLoader](https://github.com/LiteLDev/LiteLoaderBDS)

2. 下载最新版本的[Ntrade](https://github.com/NIANIANKNIA/Ntrade/releases)

3. 将解压包中的Ntrade.lxl.js放到BDS根目录的plugins文件夹下

4. 启动**bedrock_server_mod.exe**，然后插件会自动生成相应的配置文件

### 修改配置文件

请参考以下内容修改配置文件

配置文件位置：`plugins/Ntrade/config.json`

```json
{
    "marketID": 1,  //市场ID，正常情况下不要更改
    "llmoney": 0,   //是否启用llmoney经济，0（false）为不启用，1（true）为启用
    "MoneyScoresBoardName": "money",  //如果为计分板经济，相应的计分板名称
    "Password": "123456",   //下架授权码
    "BanItems": [
        {
            "type": "minecraft:clock",  //禁止上架的物品id
            "aux": -1   //禁止上架的物品特殊值（-1就是不限制特殊值）
        }
    ],
    "language": "zh_CN",  //插件的主语言 en_US 为英语
    "AutoOffShelfTime": 72,   //自动下架的时间（单位：小时），设置为-1则不会自动下架
    "TaxRate": 0    //转账税率，设置为0则不收手续费，若有需求，请自行更改为[0，1)的任意数字
}
```

### 开始使用

1.修改完成配置文件后开服即可使用

2.在服务器中输入/trade指令打开GUI进行相应操作

3.您可以输入/opentradegui @p给最近的玩家打开交易市场GUI
