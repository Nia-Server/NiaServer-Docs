<template><div><h1 id="🏪商店系统示例文件" tabindex="-1"><a class="header-anchor" href="#🏪商店系统示例文件" aria-hidden="true">#</a> 🏪商店系统示例文件</h1>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"sell_data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"一些免费赠送的东西"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"无限次免费购买（"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/ui/gift_square.png"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"钟表"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:clock"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/clock_item"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"杂项商店"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"卖一些杂七杂八的东西"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/apple_golden"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"附魔金苹果"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:enchanted_golden_apple"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/apple_golden"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"三叉戟"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:trident"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/trident"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"细雪桶"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:powder_snow_bucket"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/bucket_powder_snow"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"经验瓶"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:experience_bottle"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/experience_bottle"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"生物蛋？"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"值钱玩意家人"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg_villager"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"村民蛋"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:villager_spawn_egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">12000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg_villager"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"猫猫蛋"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:cat_spawn_egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg_cat"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"狼蛋"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:wolf_spawn_egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg_wolf"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"鹦鹉蛋"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:parrot_spawn_egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg_parrot"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"熊猫蛋"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:panda_spawn_egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg_panda"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"树苗"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里售卖各种各样的树苗！"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_oak"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"橡树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_oak"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"云杉树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_spruce"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"桦树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_birch"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"丛林树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_jungle"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"金合欢树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_acacia"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"深色橡树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sapling_roofed_oak"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"红树胎生苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:mangrove_propagule"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/mangrove_propagule"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"樱花树苗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:cherry_sapling"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/cherry_sapling"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"珊瑚相关方块"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"采摘于稻妻海祗岛，品质值得信赖"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_fan_pink"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"管珊瑚块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral_block"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_blue"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"脑纹珊瑚块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral_block"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_pink"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"气泡珊瑚块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral_block"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_purple"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"火珊瑚块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral_block"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_red"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"鹿角珊瑚块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral_block"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_yellow"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"管珊瑚"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_fan_blue"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"脑纹珊瑚"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_fan_pink"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"气泡珊瑚"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_fan_purple"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"火珊瑚"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_fan_red"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"鹿角珊瑚"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coral"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/coral_fan_yellow"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"其他的杂项方块"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里购买其他杂项方块"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/grass_side_carried"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"泥土方块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:dirt"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/dirt"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"草方块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:grass"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/grass_side_carried"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"沙砾"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:gravel"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/gravel"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"沙子"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sand"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sand"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"浮冰"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:packed_ice"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/ice_packed"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"赭黄蛙明灯"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:ochre_froglight"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/ochre_froglight_side"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"珠光蛙明灯"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:pearlescent_froglight"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/pearlescent_froglight_side"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"青翠蛙明灯"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:verdant_froglight"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/verdant_froglight_side"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"海晶灯（贴图错了"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sea_lantern"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sea_lantern"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"各种陶瓦方块"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里购买陶瓦相关方块"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"橙色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_orange"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"品红色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_magenta"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"淡蓝色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_light_blue"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"黄色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_yellow"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"黄绿色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_lime"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"粉红色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_pink"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"灰色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_gray"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"淡灰色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_silver"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"青色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_cyan"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"紫色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_purple"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"蓝色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_blue"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"棕色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_brown"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"绿色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_green"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"红色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_red"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"黑色陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stained_hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay_stained_black"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"各种石头相关方块"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里购买石头相关方块"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"石头"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"花岗岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone_granite"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"磨制花岗岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone_granite_smooth"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"闪长岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone_diorite"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"磨制闪长岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone_diorite_smooth"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"安山岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone_andesite"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"磨制安山岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:stone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/stone_andesite_smooth"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"红石相关物品"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里购买红石相关的物品"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/redstone_torch_on"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"漏斗"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:hopper"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/hopper"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"活塞"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:piston"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/piston_side"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"粘液球"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:slime_ball"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/slimeball"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"红石中继器"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:repeater"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/repeater"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"红石比较器"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:comparator"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/comparator"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"发射器"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:dispenser"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/dispenser_front_horizontal"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投掷器"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:dropper"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
                    <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/dropper_front_horizontal"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"recycle_data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"jiansyuan的小当铺"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"童叟无欺，老少皆宜～"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/ui/village_hero_effect"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"腐肉肉，恶心心"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:rotten_flesh"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/rotten_flesh"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"生牛肉"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:beef"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/beef_raw"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"生猪肉"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:porkchop"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/porkchop_raw"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"苹果"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:apple"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/apple"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"农村自养生土鸡"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:chicken"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/chicken_raw"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">128</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"农村天然土鸡蛋"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/egg"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">128</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"非常普通的小麦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:wheat"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/wheat"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">256</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"熟高档安格斯牛"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:cooked_beef"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/beef_cooked"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"NIA的小当铺(木匠"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"童叟无欺，老少皆宜～"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/ui/mashup_world"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"橡木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:oak_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_oak"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"云杉木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:spruce_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_spruce"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"白桦木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:birch_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_birch"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"丛林木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:jungle_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_jungle"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"金合欢原木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:acacia_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_acacia"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"深色橡木原木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:dark_oak_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_big_oak"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"樱花原木"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:cherry_log"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/cherry_log_side"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"矿物回收"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里回收矿物"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/diamond"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"煤炭"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coal"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/coal"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">32</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"红石"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:redstone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/redstone_dust"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"青金石"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:lapis_lazuli"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span>  <span class="token number">400</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/dye_powder_blue"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"铁锭"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:iron_ingot"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span>  <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/iron_ingot"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"黄金锭"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:gold_ingot"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">450</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/gold_ingot"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"绿宝石"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:emerald"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/emerald"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"钻石"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:diamond"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/diamond"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"下界合金锭"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:netherite_ingot"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/netherite_ingot"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"战利品回收"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里回收战利品"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/end_crystal"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"骨头"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:bone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/bone"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"箭矢"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:arrow"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/arrow"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"炸药"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:gunpowder"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/gunpowder"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"鞘翅"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:elytra"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/elytra"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"龙头"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:skull"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"部分方块回收"</span><span class="token punctuation">,</span>
            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里回收一些方块"</span><span class="token punctuation">,</span>
            <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/grass_side_carried"</span><span class="token punctuation">,</span>
            <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"草方块"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:grass"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/grass_side_carried"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">10</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"圆石"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:cobblestone"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/cobblestone"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">512</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"沙砾"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:gravel"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/gravel"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">64</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"沙子"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:sand"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/sand"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">64</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"陶瓦"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/hardened_clay"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">64</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"基岩"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:bedrock"</span><span class="token punctuation">,</span>
                    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/bedrock"</span><span class="token punctuation">,</span>
                    <span class="token property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


