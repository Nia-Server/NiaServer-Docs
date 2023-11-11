---
lang: zh-CN
title: 🏪商店系统示例文件
---
# 🏪商店系统示例文件

```json
{
    "sell_data": [
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
                },
                {
                    "name": "经验瓶",
                    "type": "minecraft:experience_bottle",
                    "price": 400,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/items/experience_bottle"
                }
            ]
        },
        {
            "name": "生物蛋？",
            "description": "值钱玩意家人",
            "image": "textures/items/egg_villager",
            "content": [
                {
                    "name": "村民蛋",
                    "type": "minecraft:villager_spawn_egg",
                    "price": 12000,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/items/egg_villager"
                },
                {
                    "name": "猫猫蛋",
                    "type": "minecraft:cat_spawn_egg",
                    "price": 15000,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/items/egg_cat"
                },
                {
                    "name": "狼蛋",
                    "type": "minecraft:wolf_spawn_egg",
                    "price": 15000,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/items/egg_wolf"
                },
                {
                    "name": "鹦鹉蛋",
                    "type": "minecraft:parrot_spawn_egg",
                    "price": 15000,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/items/egg_parrot"
                },
                {
                    "name": "熊猫蛋",
                    "type": "minecraft:panda_spawn_egg",
                    "price": 50000,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/items/egg_panda"
                }
            ]
        },
        {
            "name": "树苗",
            "description": "在这里售卖各种各样的树苗！",
            "image": "textures/blocks/sapling_oak",
            "content": [
                {
                    "name": "橡树苗",
                    "type": "minecraft:sapling",
                    "price": 100,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/sapling_oak"
                },
                {
                    "name": "云杉树苗",
                    "type": "minecraft:sapling",
                    "price": 100,
                    "discount": 1,
                    "data": 1,
                    "image": "textures/blocks/sapling_spruce"
                },
                {
                    "name": "桦树苗",
                    "type": "minecraft:sapling",
                    "price": 100,
                    "discount": 1,
                    "data": 2,
                    "image": "textures/blocks/sapling_birch"
                },
                {
                    "name": "丛林树苗",
                    "type": "minecraft:sapling",
                    "price": 100,
                    "discount": 1,
                    "data": 3,
                    "image": "textures/blocks/sapling_jungle"
                },
                {
                    "name": "金合欢树苗",
                    "type": "minecraft:sapling",
                    "price": 100,
                    "discount": 1,
                    "data": 4,
                    "image": "textures/blocks/sapling_acacia"
                },
                {
                    "name": "深色橡树苗",
                    "type": "minecraft:sapling",
                    "price": 100,
                    "discount": 1,
                    "data": 5,
                    "image": "textures/blocks/sapling_roofed_oak"
                },
                {
                    "name": "红树胎生苗",
                    "type": "minecraft:mangrove_propagule",
                    "price": 150,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/mangrove_propagule"
                },
                {
                    "name": "樱花树苗",
                    "type": "minecraft:cherry_sapling",
                    "price": 150,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/cherry_sapling"
                }
            ]
        },
        {
            "name": "珊瑚相关方块",
            "description": "采摘于稻妻海祗岛，品质值得信赖",
            "image": "textures/blocks/coral_fan_pink",
            "content": [
                {
                    "name": "管珊瑚块",
                    "type": "minecraft:coral_block",
                    "price": 60,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/coral_blue"
                },
                {
                    "name": "脑纹珊瑚块",
                    "type": "minecraft:coral_block",
                    "price": 60,
                    "discount": 1,
                    "data": 1,
                    "image": "textures/blocks/coral_pink"
                },
                {
                    "name": "气泡珊瑚块",
                    "type": "minecraft:coral_block",
                    "price": 60,
                    "discount": 1,
                    "data": 2,
                    "image": "textures/blocks/coral_purple"
                },
                {
                    "name": "火珊瑚块",
                    "type": "minecraft:coral_block",
                    "price": 60,
                    "discount": 1,
                    "data": 3,
                    "image": "textures/blocks/coral_red"
                },
                {
                    "name": "鹿角珊瑚块",
                    "type": "minecraft:coral_block",
                    "price": 60,
                    "discount": 1,
                    "data": 4,
                    "image": "textures/blocks/coral_yellow"
                },
                {
                    "name": "管珊瑚",
                    "type": "minecraft:coral",
                    "price": 60,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/coral_fan_blue"
                },
                {
                    "name": "脑纹珊瑚",
                    "type": "minecraft:coral",
                    "price": 60,
                    "discount": 1,
                    "data": 1,
                    "image": "textures/blocks/coral_fan_pink"
                },
                {
                    "name": "气泡珊瑚",
                    "type": "minecraft:coral",
                    "price": 60,
                    "discount": 1,
                    "data": 2,
                    "image": "textures/blocks/coral_fan_purple"
                },
                {
                    "name": "火珊瑚",
                    "type": "minecraft:coral",
                    "price": 60,
                    "discount": 1,
                    "data": 3,
                    "image": "textures/blocks/coral_fan_red"
                },
                {
                    "name": "鹿角珊瑚",
                    "type": "minecraft:coral",
                    "price": 60,
                    "discount": 1,
                    "data": 4,
                    "image": "textures/blocks/coral_fan_yellow"
                }
            ]
        },
        {
            "name": "其他的杂项方块",
            "description": "在这里购买其他杂项方块",
            "image": "textures/blocks/grass_side_carried",
            "content": [
                {
                    "name": "泥土方块",
                    "type": "minecraft:dirt",
                    "price": 50,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/dirt"
                },
                {
                    "name": "草方块",
                    "type": "minecraft:grass",
                    "price": 150,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/grass_side_carried"
                },
                {
                    "name": "沙砾",
                    "type": "minecraft:gravel",
                    "price": 50,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/gravel"
                },
                {
                    "name": "沙子",
                    "type": "minecraft:sand",
                    "price": 50,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/sand"
                },
                {
                    "name": "浮冰",
                    "type": "minecraft:packed_ice",
                    "price": 40,
                    "discount": 0.75,
                    "data": 0,
                    "image": "textures/blocks/ice_packed"
                },
                {
                    "name": "赭黄蛙明灯",
                    "type": "minecraft:ochre_froglight",
                    "price": 500,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/ochre_froglight_side"
                },
                {
                    "name": "珠光蛙明灯",
                    "type": "minecraft:pearlescent_froglight",
                    "price": 500,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/pearlescent_froglight_side"
                },
                {
                    "name": "青翠蛙明灯",
                    "type": "minecraft:verdant_froglight",
                    "price": 500,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/verdant_froglight_side"
                },
                {
                    "name": "海晶灯（贴图错了",
                    "type": "minecraft:sea_lantern",
                    "price": 500,
                    "discount": 0.8,
                    "data": 0,
                    "image": "textures/blocks/sea_lantern"
                }
            ]
        },
        {
            "name": "各种陶瓦方块",
            "description": "在这里购买陶瓦相关方块",
            "image": "textures/blocks/hardened_clay",
            "content": [
                {
                    "name": "陶瓦",
                    "type": "minecraft:hardened_clay",
                    "price": 100,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/hardened_clay"
                },
                {
                    "name": "橙色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 1,
                    "image": "textures/blocks/hardened_clay_stained_orange"
                },
                {
                    "name": "品红色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 2,
                    "image": "textures/blocks/hardened_clay_stained_magenta"
                },
                {
                    "name": "淡蓝色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 3,
                    "image": "textures/blocks/hardened_clay_stained_light_blue"
                },
                {
                    "name": "黄色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 4,
                    "image": "textures/blocks/hardened_clay_stained_yellow"
                },
                {
                    "name": "黄绿色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 5,
                    "image": "textures/blocks/hardened_clay_stained_lime"
                },
                {
                    "name": "粉红色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 6,
                    "image": "textures/blocks/hardened_clay_stained_pink"
                },
                {
                    "name": "灰色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 7,
                    "image": "textures/blocks/hardened_clay_stained_gray"
                },
                {
                    "name": "淡灰色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 8,
                    "image": "textures/blocks/hardened_clay_stained_silver"
                },
                {
                    "name": "青色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 9,
                    "image": "textures/blocks/hardened_clay_stained_cyan"
                },
                {
                    "name": "紫色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 10,
                    "image": "textures/blocks/hardened_clay_stained_purple"
                },
                {
                    "name": "蓝色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 11,
                    "image": "textures/blocks/hardened_clay_stained_blue"
                },
                {
                    "name": "棕色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 12,
                    "image": "textures/blocks/hardened_clay_stained_brown"
                },
                {
                    "name": "绿色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 13,
                    "image": "textures/blocks/hardened_clay_stained_green"
                },
                {
                    "name": "红色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 14,
                    "image": "textures/blocks/hardened_clay_stained_red"
                },
                {
                    "name": "黑色陶瓦",
                    "type": "minecraft:stained_hardened_clay",
                    "price": 120,
                    "discount": 1,
                    "data": 15,
                    "image": "textures/blocks/hardened_clay_stained_black"
                }
            ]
        },
        {
            "name": "各种石头相关方块",
            "description": "在这里购买石头相关方块",
            "image": "textures/blocks/stone",
            "content": [
                {
                    "name": "石头",
                    "type": "minecraft:stone",
                    "price": 80,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/stone"
                },
                {
                    "name": "花岗岩",
                    "type": "minecraft:stone",
                    "price": 80,
                    "discount": 1,
                    "data": 1,
                    "image": "textures/blocks/stone_granite"
                },
                {
                    "name": "磨制花岗岩",
                    "type": "minecraft:stone",
                    "price": 100,
                    "discount": 1,
                    "data": 2,
                    "image": "textures/blocks/stone_granite_smooth"
                },
                {
                    "name": "闪长岩",
                    "type": "minecraft:stone",
                    "price": 80,
                    "discount": 1,
                    "data": 3,
                    "image": "textures/blocks/stone_diorite"
                },
                {
                    "name": "磨制闪长岩",
                    "type": "minecraft:stone",
                    "price": 100,
                    "discount": 1,
                    "data": 4,
                    "image": "textures/blocks/stone_diorite_smooth"
                },
                {
                    "name": "安山岩",
                    "type": "minecraft:stone",
                    "price": 80,
                    "discount": 1,
                    "data": 5,
                    "image": "textures/blocks/stone_andesite"
                },
                {
                    "name": "磨制安山岩",
                    "type": "minecraft:stone",
                    "price": 100,
                    "discount": 1,
                    "data": 6,
                    "image": "textures/blocks/stone_andesite_smooth"
                }
            ]
        },
        {
            "name": "红石相关物品",
            "description": "在这里购买红石相关的物品",
            "image": "textures/blocks/redstone_torch_on",
            "content": [
                {
                    "name": "漏斗",
                    "type": "minecraft:hopper",
                    "price": 2000,
                    "discount": 0.95,
                    "data": 0,
                    "image": "textures/items/hopper"
                },
                {
                    "name": "活塞",
                    "type": "minecraft:piston",
                    "price": 500,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/piston_side"
                },
                {
                    "name": "粘液球",
                    "type": "minecraft:slime_ball",
                    "price": 100,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/items/slimeball"
                },
                {
                    "name": "红石中继器",
                    "type": "minecraft:repeater",
                    "price": 1000,
                    "discount": 0.6,
                    "data": 0,
                    "image": "textures/items/repeater"
                },
                {
                    "name": "红石比较器",
                    "type": "minecraft:comparator",
                    "price": 1000,
                    "discount": 0.6,
                    "data": 0,
                    "image": "textures/items/comparator"
                },
                {
                    "name": "发射器",
                    "type": "minecraft:dispenser",
                    "price": 1000,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/dispenser_front_horizontal"
                },
                {
                    "name": "投掷器",
                    "type": "minecraft:dropper",
                    "price": 600,
                    "discount": 1,
                    "data": 0,
                    "image": "textures/blocks/dropper_front_horizontal"
                }
            ]
        }
    ],
    "recycle_data": [
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
                },
                {
                    "name": "生猪肉",
                    "type": "minecraft:porkchop",
                    "price": 15,
                    "data": 0,
                    "image": "textures/items/porkchop_raw",
                    "lim": false
                },
                {
                    "name": "苹果",
                    "type": "minecraft:apple",
                    "price": 20,
                    "data": 0,
                    "image": "textures/items/apple",
                    "lim": false
                },
                {
                    "name": "农村自养生土鸡",
                    "type": "minecraft:chicken",
                    "price": 15,
                    "data": 0,
                    "image": "textures/items/chicken_raw",
                    "lim": true,
                    "limnum": 128
                },
                {
                    "name": "农村天然土鸡蛋",
                    "type": "minecraft:egg",
                    "price": 20,
                    "data": 0,
                    "image": "textures/items/egg",
                    "lim": true,
                    "limnum": 128
                },
                {
                    "name": "非常普通的小麦",
                    "type": "minecraft:wheat",
                    "price": 35,
                    "data": 0,
                    "image": "textures/items/wheat",
                    "lim": true,
                    "limnum": 256
                },
                {
                    "name": "熟高档安格斯牛",
                    "type": "minecraft:cooked_beef",
                    "price": 60,
                    "data": 0,
                    "image": "textures/items/beef_cooked",
                    "lim": true,
                    "limnum": 16
                }
            ]
        },
        {
            "name": "NIA的小当铺(木匠",
            "description": "童叟无欺，老少皆宜～",
            "image": "textures/ui/mashup_world",
            "content": [
                {
                    "name": "橡木",
                    "type": "minecraft:oak_log",
                    "price": 40,
                    "data": 0,
                    "image": "textures/blocks/log_oak",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "云杉木",
                    "type": "minecraft:spruce_log",
                    "price": 40,
                    "data": 0,
                    "image": "textures/blocks/log_spruce",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "白桦木",
                    "type": "minecraft:birch_log",
                    "price": 40,
                    "data": 0,
                    "image": "textures/blocks/log_birch",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "丛林木",
                    "type": "minecraft:jungle_log",
                    "price": 40,
                    "data": 0,
                    "image": "textures/blocks/log_jungle",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "金合欢原木",
                    "type": "minecraft:acacia_log",
                    "price": 40,
                    "data": 0,
                    "image": "textures/blocks/log_acacia",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "深色橡木原木",
                    "type": "minecraft:dark_oak_log",
                    "price": 40,
                    "data": -1,
                    "image": "textures/blocks/log_big_oak",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "樱花原木",
                    "type": "minecraft:cherry_log",
                    "price": 40,
                    "data": -1,
                    "image": "textures/blocks/cherry_log_side",
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
                },
                {
                    "name": "红石",
                    "type": "minecraft:redstone",
                    "price": 150,
                    "data": 0,
                    "image": "textures/items/redstone_dust",
                    "lim": true,
                    "limnum": 16
                },
                {
                    "name": "青金石",
                    "type": "minecraft:lapis_lazuli",
                    "price":  400,
                    "data": 0,
                    "image": "textures/items/dye_powder_blue",
                    "lim": true,
                    "limnum": 16
                },
                {
                    "name": "铁锭",
                    "type": "minecraft:iron_ingot",
                    "price":  150,
                    "data": 0,
                    "image": "textures/items/iron_ingot",
                    "lim": true,
                    "limnum": 16
                },
                {
                    "name": "黄金锭",
                    "type": "minecraft:gold_ingot",
                    "price": 450,
                    "data": 0,
                    "image": "textures/items/gold_ingot",
                    "lim": true,
                    "limnum": 16
                },
                {
                    "name": "绿宝石",
                    "type": "minecraft:emerald",
                    "price": 700,
                    "data": 0,
                    "image": "textures/items/emerald",
                    "lim": true,
                    "limnum": 16
                },
                {
                    "name": "钻石",
                    "type": "minecraft:diamond",
                    "price": 1000,
                    "data": 0,
                    "image": "textures/items/diamond",
                    "lim": true,
                    "limnum": 16
                },
                {
                    "name": "下界合金锭",
                    "type": "minecraft:netherite_ingot",
                    "price": 1800,
                    "data": 0,
                    "image": "textures/items/netherite_ingot",
                    "lim": false,
                    "limnum": 0
                }
            ]
        },
        {
            "name": "战利品回收",
            "description": "在这里回收战利品",
            "image": "textures/items/end_crystal",
            "content": [
                {
                    "name": "骨头",
                    "type": "minecraft:bone",
                    "price": 5,
                    "data": -1,
                    "image": "textures/items/bone",
                    "lim": true,
                    "limnum": 48
                },
                {
                    "name": "箭矢",
                    "type": "minecraft:arrow",
                    "price": 5,
                    "data": -1,
                    "image": "textures/items/arrow",
                    "lim": true,
                    "limnum": 48
                },
                {
                    "name": "炸药",
                    "type": "minecraft:gunpowder",
                    "price": 5,
                    "data": -1,
                    "image": "textures/items/gunpowder",
                    "lim": true,
                    "limnum": 48
                },
                {
                    "name": "鞘翅",
                    "type": "minecraft:elytra",
                    "price": 50000,
                    "data": -1,
                    "image": "textures/items/elytra",
                    "lim": false,
                    "limnum": 0
                },
                {
                    "name": "龙头",
                    "type": "minecraft:skull",
                    "price": 50000,
                    "data": -1,
                    "image": "",
                    "lim": false,
                    "limnum": 0
                }
            ]
        },
        {
            "name": "部分方块回收",
            "description": "在这里回收一些方块",
            "image": "textures/blocks/grass_side_carried",
            "content": [
                {
                    "name": "草方块",
                    "type": "minecraft:grass",
                    "price": 100,
                    "data": 0,
                    "image": "textures/blocks/grass_side_carried",
                    "lim": true,
                    "limnum": 10
                },
                {
                    "name": "圆石",
                    "type": "minecraft:cobblestone",
                    "price": 5,
                    "data": 0,
                    "image": "textures/blocks/cobblestone",
                    "lim": true,
                    "limnum": 512
                },
                {
                    "name": "沙砾",
                    "type": "minecraft:gravel",
                    "price": 10,
                    "data": -1,
                    "image": "textures/blocks/gravel",
                    "lim": true,
                    "limnum": 64
                },
                {
                    "name": "沙子",
                    "type": "minecraft:sand",
                    "price": 10,
                    "data": -1,
                    "image": "textures/blocks/sand",
                    "lim": true,
                    "limnum": 64
                },
                {
                    "name": "陶瓦",
                    "type": "minecraft:hardened_clay",
                    "price": 50,
                    "data": -1,
                    "image": "textures/blocks/hardened_clay",
                    "lim": true,
                    "limnum": 64
                },
                {
                    "name": "基岩",
                    "type": "minecraft:bedrock",
                    "price": 0,
                    "data": -1,
                    "image": "textures/blocks/bedrock",
                    "lim": false,
                    "limnum": 0
                }
            ]
        }
    ]
}
```