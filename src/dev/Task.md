---
lang: zh-CN
title: 📱任务系统
---
# 📱任务系统

::: info 提示
圈地系统依赖于[NIAHttpBOT](NIAHttpBOT.md),在使用圈地系统之前请先阅读[NIAHttpBOT使用说明](NIAHttpBOT.md)，设置好NIAHttpBOT的配置文件。
:::

## 任务系统文件示例

```json
{
    "ZHCN0100000":{
        "type": "text",
        "name": "第一章 重生之我是鱼人",
        "format": "center",
        "description": [
            "§b========================",
            "章 节 简 介",
            "§b========================",
            "",
            "§6欢迎来到这个魔幻的水世界",
            "",
            "根据本章的任务内容",
            "",
            "你将了解这个世界的一些基本规则",
            "",
            "并且学会如何在这个世界生存下去...",
            "",
            "                          §b-鸽子腐竹"
        ],
        "checkmode": "or",
        "check":[
            {
                "type": "item",
                "item": "minecraft:iron_pickaxe",
                "count": 1,
                "fail_info": "\n\n\n\n\n§c背包里要求拥有§e一个铁镐\n\n§c请在获取铁镐后再次提交任务\n\n\n\n\n\n"
            },
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "operator": ">=",
                "value": 0,
                "fail_info": "\n\n\n\n\n§c要求金币余额大于等于0\n\n§c请在获取足够金币后再次提交任务\n\n\n\n\n\n"
            },
            {
                "type": "tag",
                "tag": "test",
                "operator": "==",
                "fail_info": "\n\n\n\n\n§c你还没有获得管理员权限\n\n§c请联系管理员获取权限后再次提交任务\n\n\n\n\n\n"
            }
        ],
        "reward": [
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "mode": "add",
                "value": 100,
                "description": "金币 §6* 100",
            },
            {
                "type": "tag",
                "tag": "test",
                "operator": "add",
                "description": "XX称号",
            },
            {
                "type": "item",
                "item": "minecraft:iron_sword",
                "count": 1,
                "description": "铁剑一个"
            },
            {
                "type": "command",
                "dimension": "minecraft:overworld",
                "command": "give @s minecraft:iron_sword 1",
                "description": "铁剑一个"
            }
        ],
        "button": {
            "启动！": "ZHCN0100100"
        }
    },
    "ZHCN0100100":{
        "type": "text",
        "name": "第一章 重生之我是鱼人",
        "format": "left",
        "description": [
            "§6任务目标：",
            "§6- 采集一些木头",
            "§6- 制作一个工作台",
            "§6- 制作一把木剑",
            "",
            "§6任务奖励：",
            "§6- 金币 * 100",
            "§6- XX称号",
            "§6- 铁剑一个",
            "",
            "§6任务提示：",
            "§6- 任务目标在任务界面中查看",
            "§6- 任务奖励在任务完成后查看",
            "",
        ],
        "checkmode": "and",
        "check":[
            {
                "type": "item",
                "item": "minecraft:wood",
                "count": 10,
                "fail_info": "\n\n\n\n\n§c要求拥有§e10个木头\n\n§c请在获取足够木头后再次提交任务\n\n\n\n\n\n"
            },
            {
                "type": "item",
                "item": "minecraft:crafting_table",
                "count": 1,
                "fail_info": "\n\n\n\n\n§c要求拥有§e一个工作台\n\n§c请在获取工作台后再次提交任务\n\n\n\n\n\n"
            },
            {
                "type": "item",
                "item": "minecraft:wooden_sword",
                "count": 1,
                "fail_info": "\n\n\n\n\n§c要求拥有§e一把木剑\n\n§c请在获取木剑后再次提交任务\n\n\n\n\n\n"
            }
        ],
        "reward": [
            {
                "type": "scoreboard",
                "scoreboard": "money",
                "mode": "add",
                "value": 100,
                "description": "金币 §6* 100",
            },
            {
                "type": "tag",
                "tag": "test",
                "operator": "add",
                "description": "XX称号",
            },
            {
                "type": "item",
                "item": "minecraft:iron_sword",
                "count": 1,
                "description": "铁剑一个"
            },
            {
                "type": "command",
                "dimension": "minecraft:overworld",
                "command": "give @s minecraft:iron_sword 1",
                "description": "铁剑一个"
            }
        ],
        "button": {
            "下一节": "ZHCN0100200"
        }
    },
}
```