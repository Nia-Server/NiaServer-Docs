---
lang: zh-CN
title: 🎫称号系统
---
# 🎫称号系统

::: info 提示
圈地系统依赖于[NIAHttpBOT](NIAHttpBOT.md),在使用圈地系统之前请先阅读[NIAHttpBOT使用说明](NIAHttpBOT.md)，设置好NIAHttpBOT的配置文件。
:::

## 称号系统文件示例

```json
{
    "title_c_op": {
        "title": "",
        "tag": "title_c_op",
        "type": "image",
        "can_buy": true,
        "show_in_shop": true,
        "price": 100,
        "description": "服务器管理员专用称号",
        "check_mode": "and",
        "check": [
            {
                "type": "tag",
                "operator": "==",
                "value": "op"
            },
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "金币",
                "operator": ">=",
                "value": 10
            },
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "原神等级",
                "operator": ">=",
                "value": 60
            },
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "崩铁等级",
                "operator": ">=",
                "value": 60
            },
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "手机里mhy游戏个数",
                "operator": ">=",
                "value": 3
            }
        ]
    },
    "title_c_donator": {
        "title": "",
        "tag": "title_c_donator",
        "type": "image",
        "can_buy": true,
        "show_in_shop": true,
        "price": 100,
        "description": "服务器捐赠者专用称号",
        "check_mode": "or",
        "check": [
            {
                "type": "tag",
                "operator": "==",
                "value": "donator"
            },
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "崩铁等级",
                "operator": "<=",
                "value": 100
            }
        ]
    },
    "title_c_default":{
        "title": "",
        "tag": "title_c_default",
        "type": "image",
        "can_buy": true,
        "show_in_shop": true,
        "price": 0,
        "description": "普通玩家称号",
        "check_mode": "and",
        "check": [
            {
                "type": "tag",
                "operator": "==",
                "value": "normal"
            },
            {
                "type": "scoreboard",
                "scoreboard": "menu",
                "scoreboard_show_name": "崩铁等级",
                "operator": ">=",
                "value": 100
            }
        ]
    },
    "title_default": {
        "title": "萌新一枚",
        "tag": "title_default",
        "type": "text",
        "can_buy": true,
        "show_in_shop": true,
        "price": 0,
        "description": "普通玩家称号",
        "check_mode": "none",
        "check": []
    },
    "title_money_10000": {
        "title": "§b家财万贯",
        "tag": "title_money_10000",
        "type": "text",
        "can_buy": true,
        "show_in_shop": true,
        "price": 0,
        "description": "金币达到10000",
        "check_mode": "and",
        "check": [
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "金币",
                "operator": ">=",
                "value": 10000
            }
        ]
    },
    "title_money_100000": {
        "title": "§e富可敌国",
        "tag": "title_money_100000",
        "type": "text",
        "can_buy": true,
        "show_in_shop": true,
        "price": 0,
        "description": "金币达到100000",
        "check_mode": "and",
        "check": [
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "scoreboard_show_name": "金币",
                "operator": ">=",
                "value": 100000
            }
        ]
    }

}
```