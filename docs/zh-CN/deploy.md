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

请自行前往Github的[release](https://github.com/NIANIANKNIA/NIASERVER-V4/releases)界面按照需求下载相应的行为包或资源包。

**务必按照自己服务器版本下载对应的版本，否则有很大概率因为API变动导致行为包无法正常使用**

### 放置相应位置并增加文件

将下载的行为包或者资源包分别放到服务器根目录下的`development_behavior_packs`文件夹，`development_resource_packs`文件夹里

然后在`worlds/MAPNAME`目录下添加`world_behavior_packs.json`与`world_resource_packs.json`文件

注：这里路径的MAPNAME指的是

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

配置文件位于`development_behavior_packs/scripts/config.js`，请勿自行修改其他文件，否则可能导致行为包无法正常使用

```javascript
const config = {
    "MENUITEM": "minecraft:stick",
    "USEMenu": true,
    "USEShop": true,
    "USERandomDATA": true,
    "USETpa": true,
    "USEHome": true,
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

例：
```js
"buttons": [
        {
            "name": "立即回城",
            "icon": "textures/blocks/chest_front",
            "type": "runCmd",
            "content": "tp @s"
        },
        {
            "name": "返回主岛",
            "icon": "textures/ui/backup_replace",
            "type": "runCmd",
            "content": "say @a"
        },
        {
            "name": "个人传送点",
            "icon": "textures/ui/icon_new",
            "type": "runCmd",
            "content": "say %playername%"
        }
    ]
```

#### 商店菜单

### （可选）根据需求删除多余文件

### （可选）本地测试

### 部署到服务器上