---
lang: en-US
title: 🖥️部署指南
---
# 🖥️部署指南（编写中...）

::: warning 编写中页面提醒
本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！
:::

::: warning 过时页面提醒
页面内容已与目前版本脱离，仅供参考，具体部署请方法请等待后续更新！
:::

### 配置服务器运行环境

首先我们应当下载[BDS服务器端](https://www.minecraft.net/en-us/download/server/bedrock)

此时我们应当注意服务器版本，从而下载相匹配的行为包


### 下载对应版本的行为包

请自行前往**Github**的[release](https://github.com/NIANIANKNIA/NiaServer-Core/releases)界面按照需求下载相应的行为包或资源包。

国内用户如果打不开可以前往**Gitee**的[release](https://gitee.com/nianianknia/NiaServer-Core/releases)界面按照需求下载相应的行为包或资源包。

**务必按照自己服务器版本下载对应的版本，否则有很大概率因为版本不一致导致行为包无法正常使用**

### 放置相应位置并增加文件

将下载的行为包或者资源包分别放到服务器根目录下的`development_behavior_packs`文件夹，`development_resource_packs`文件夹里

您可以选择下载release中的`world_behavior_packs.json`与`world_resource_packs.json`文件，并将其放置至`worlds/MAPNAME`目录下

**注：这里路径的`MAPNAME`指的是自己的地图名称，并不是真的叫`MAPNAME`，而是你自己的地图名字！**

（不推荐）或者您也可以选择自行在`worlds/MAPNAME`目录下添加`world_behavior_packs.json`与`world_resource_packs.json`文件

**注：这里路径的`MAPNAME`指的是自己的地图名称，并不是真的叫`MAPNAME`，而是你自己的地图名字！**

文件内容分别为

`pack_id`项请勿自行更改！

::: warning 注意
请自行根据下载的行为包、资源包的版本自行更改版本号（version），否则将会导致行为包、资源包无法正常运行！
:::

`world_behavior_packs.json`

```json
[
    {
        "pack_id": "cab0bbe3-eb10-465e-b1de-b09facc076c8",
        "version": [
            1,0,0
        ]
    }
]
```
`world_resource_packs.json`

```json
[
    {
        "pack_id": "981f1ce2-370b-4f58-99d9-9c504a118ec0",
        "version": [
            1,0,0
        ]
    }
]
```



### 修改配置文件

::: warning 注意
请使用诸如[notepad--](https://gitee.com/cxasm/notepad--)等文本编辑器进行更改，请不要使用自带的记事本进行更改!
:::

配置文件位于`development_behavior_packs/scripts/config.js`，请勿自行修改其他文件，否则可能导致行为包无法正常使用

> 截至目前发布的v1.1.0版本，配置文件仍在开发状态中，故以下配置教程仅提供目前看可以更改的项目！

- `ServerMode`--服务器模式

可选参数：`Island`（默认）、`Survival`

- `MENUITEM`--打开服务器菜单所使用的物品

- `OPTAG`--管理员标签

仅当管理员拥有此标签才可以打开管理菜单进行相关操作

- `OPMENUPassword`--管理员面板密码

打开管理员面板输入的密码

- `islandCfg`--空岛相关配置项目

`R`--空岛之间间距

`CX`--中心点X坐标

`CY`--中心点Y坐标

`CZ`--中心点Z坐标

配置示例

```javascript
const config = {
    "ServerMode": "Island",
    "MENUITEM": "minecraft:clock",
    "USERandomDATA": true,
    "MoneyScoreboardName": "money",
    "MoneyShowName": "能源币",
    "TimeScoreboardName":"time",
    "OPTAG": "op",
    "OPMENUPassword": "123456",
    "islandCfg": {
        "R":  1000,
        "CX": 402,
        "CY": 100,
        "CZ": 547
    }
}
```

### 修改菜单文件

这里的菜单指的是服务器的主菜单、服务器商店菜单等...


#### 主菜单

##### 开始配置

下载好的行为包中已经配置好了主菜单，但我们仍为您提供了菜单自定义的功能

您可以根据自己的需求重新配置主菜单的界面满足您自己的需求

主菜单的相关文件在`development_behavior_packs/scripts/menu/main.js`里

我们可以更改的内容是定义的MainGUI里面的内容（`title`、`body`、`buttons`），对应代码的16行以后的内容

- `title`--主菜单标题
- `body`--菜单文字主体部分
- `buttons`--菜单按钮部分

`buttons`示例
```js
"buttons": [
    {
        "name": "立即回城\n点击后立即返回主城",//按钮名称
        "icon": "textures/blocks/chest_front",//按钮的icon（图标）
        "type": "runCmd",//按钮类型
        "content": "tp @a[name=%playername%] 702 82 554",//"runCmd"类型对应的执行内容
        "opMenu": false//是否为仅管理才能可看到的按钮
    },
    {
        "name": "返回主岛\n即可立即返回自己的主岛",
        "icon": "textures/ui/backup_replace",
        "type": "goISLAND",//这里是一个自定义功能，不建议使用
        "opMenu": false
    },
    {
        "name": "设置\n在这里修改所有设置",
        "icon": "textures/ui/automation_glyph_color",
        "type": "openGUI",
        "GUI": "SetupGUI",//"openGUI"类型对应的打开的菜单界面
        "opMenu": false
    },
    {
        "name": "管理菜单\n点开即可开始管理服务器",
        "icon": "textures/ui/op",
        "type": "openGUI",
        "GUI": "OpGUI",
        "opMenu": true
    },
]
```

- `type`--按钮类型

可选参数：`runCmd`、`openGUI`

| 界面中文名称 | 对应的GUI参数 |
| :----:| :----: |
| 设置界面 | SetupGUI |
| 商店界面 | ShopGUI |
| 氧气系统界面 | OxygenGUI |
| 传送系统界面 | TpaGUI |
| 兑换码系统界面 | CdkGUI |
| 飞行系统界面 | FlyGUI |
| 转账系统界面 | TransferGUI |
| 管理系统界面 | OpGUI |

##### 可选变量

标题（title）：

`%playername%`将被替换为玩家名字

主体（body）：

`%playername%`将被替换为玩家名字

`%RN%`将被替换为物价指数

`*scoreboardName*`将被替换成玩家scoreboardName计分板的分数

例：`"body":玩家金币:*money*`将会在游戏中显示为`玩家金币:12345`

按钮（button）：

`%playername%`将被替换为玩家名字

配置示例

```js
const MainGUI = {
    "title": "服务器菜单",
    "body": "§l===========================\n§eHi! §l§6%playername% §r§e欢迎回来！\n§e您目前能源币余额： §6§l*money*\n§r§e您目前剩余氧气值为： §6§l*oxygen*\n§r§e您目前剩余体力值为： §6§l*stamina*\n§r§e您目前在线总时长为： §6§l*time*\n§r§e当前物价指数为： §6§l%RN%\n§r§l===========================\n§r§c§l游玩中有问题找腐竹反馈！\n祝您游玩愉快！\n§r§l===========================",
    "buttons": [
        {
            "name": "立即回城\n点击后立即返回主城",
            "icon": "textures/blocks/chest_front",
            "type": "runCmd",
            "content": "tp @a[name=%playername%] 702 82 554",
            "opMenu": false
        },
        {
            "name": "返回主岛\n即可立即返回自己的主岛",
            "icon": "textures/ui/backup_replace",
            "type": "goISLAND",
            "opMenu": false
        },
        {
            "name": "设置\n在这里修改所有设置",
            "icon": "textures/ui/automation_glyph_color",
            "type": "openGUI",
            "GUI": "SetupGUI",
            "opMenu": false
        },
        {
            "name": "管理菜单\n点开即可开始管理服务器",
            "icon": "textures/ui/op",
            "type": "openGUI",
            "GUI": "OpGUI",
            "opMenu": true
        },
    ]
}
```

#### 商店菜单

商店菜单的相关文件在`development_behavior_packs/scripts/menu/shop.js`里

您可以根据自己的需求按照下方的例子进行自行更改！

##### 售卖物品菜单

配置示例

```js
var SellData = [
    {
        "name": "一些免费赠送的东西",
        "description": "无限次免费购买（",
        "image": "textures/ui/gift_square.png",
        "content": [
            {
                "name": "钟表",
                "type": "minecraft:clock",
                "price": 50,
                "discount": 0,
                "data": 0,
                "image": "textures/items/clock_item"
            }
        ]
    },
    {
        "name": "杂项商店",
        "description": "卖一些杂七杂八的东西",
        "image": "textures/items/apple_golden",
        "content": [
            {
                "name": "附魔金苹果",
                "type": "minecraft:enchanted_golden_apple",
                "price": 500,
                "discount": 1,
                "data": 0,
                "image": "textures/items/apple_golden"
            },
            {
                "name": "三叉戟",
                "type": "minecraft:trident",
                "price": 5000,
                "discount": 1,
                "data": 0,
                "image": "textures/items/trident"
            },
            {
                "name": "细雪桶",
                "type": "minecraft:powder_snow_bucket",
                "price": 400,
                "discount": 1,
                "data": 0,
                "image": "textures/items/bucket_powder_snow"
            }
        ]
    }
]
```

##### 回收菜单

配置示例

```js
var RecycleData = [
    {
        "name": "jiansyuan的小当铺",
        "description": "童叟无欺，老少皆宜～",
        "image": "textures/ui/village_hero_effect",
        "content": [
            {
                "name": "腐肉肉，恶心心",
                "type": "minecraft:rotten_flesh",
                "price": 5,
                "data": 0,
                "image": "textures/items/rotten_flesh",
                "lim": true,
                "limnum": 48
            },
            {
                "name": "生牛肉",
                "type": "minecraft:beef",
                "price": 15,
                "data": 0,
                "image": "textures/items/beef_raw",
                "lim": false
            }
        ]
    },
    {
        "name": "NIA的小当铺(木匠",
        "description": "童叟无欺，老少皆宜～",
        "image": "textures/ui/mashup_world",
        "content": [
            {
                "name": "橡木/云杉木/白桦木/丛林木",
                "type": "minecraft:log",
                "price": 40,
                "data": -1,
                "image": "textures/blocks/log_oak",
                "lim": false,
                "limnum": 0
            },
            {
                "name": "金合欢原木/深色橡木原木",
                "type": "minecraft:log2",
                "price": 40,
                "data": -1,
                "image": "textures/blocks/log_acacia",
                "lim": false,
                "limnum": 0
            }
        ]
    },
    {
        "name": "矿物回收",
        "description": "在这里回收矿物",
        "image": "textures/items/diamond",
        "content": [
            {
                "name": "煤炭",
                "type": "minecraft:coal",
                "price": 50,
                "data": 0,
                "image": "textures/items/coal",
                "lim": true,
                "limnum": 32
            }
        ]
    }
]
```

### 配置外部依赖服务器&&机器人

### 修改服务器permissions.json文件

将文件内容更改为下列内容

```json
{
  "allowed_modules": [
    "@minecraft/server-gametest",
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-editor",
    "@minecraft/server-net"
  ]
}
```

### 开启服务器

1.首先开启依赖服务器，等机器人成功发送“机器人已启动！”后进行下一步

2.开启基岩版服务器