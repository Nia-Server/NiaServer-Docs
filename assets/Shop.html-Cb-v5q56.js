import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Rh3tvdAp.js";const p={},o=t(`<h1 id="🏪商店系统使用说明" tabindex="-1"><a class="header-anchor" href="#🏪商店系统使用说明" aria-hidden="true">#</a> 🏪商店系统使用说明</h1><h2 id="商店系统示例文件" tabindex="-1"><a class="header-anchor" href="#商店系统示例文件" aria-hidden="true">#</a> 商店系统示例文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sell_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一些免费赠送的东西&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;无限次免费购买（&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/gift_square.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;钟表&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:clock&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/clock_item&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;杂项商店&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;卖一些杂七杂八的东西&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/apple_golden&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;附魔金苹果&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:enchanted_golden_apple&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/apple_golden&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;三叉戟&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:trident&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/trident&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;细雪桶&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:powder_snow_bucket&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/bucket_powder_snow&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;经验瓶&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:experience_bottle&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/experience_bottle&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;生物蛋？&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;值钱玩意家人&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg_villager&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;村民蛋&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:villager_spawn_egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg_villager&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;猫猫蛋&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cat_spawn_egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg_cat&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;狼蛋&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:wolf_spawn_egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg_wolf&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;鹦鹉蛋&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:parrot_spawn_egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg_parrot&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;熊猫蛋&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:panda_spawn_egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg_panda&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;树苗&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里售卖各种各样的树苗！&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_oak&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;橡树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_oak&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;云杉树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_spruce&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;桦树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_birch&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;丛林树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_jungle&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;金合欢树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_acacia&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;深色橡树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapling_roofed_oak&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红树胎生苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:mangrove_propagule&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/mangrove_propagule&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;樱花树苗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cherry_sapling&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/cherry_sapling&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;珊瑚相关方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;采摘于稻妻海祗岛，品质值得信赖&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_fan_pink&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;管珊瑚块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral_block&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_blue&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;脑纹珊瑚块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral_block&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_pink&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;气泡珊瑚块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral_block&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_purple&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;火珊瑚块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral_block&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_red&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;鹿角珊瑚块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral_block&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_yellow&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;管珊瑚&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_fan_blue&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;脑纹珊瑚&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_fan_pink&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;气泡珊瑚&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_fan_purple&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;火珊瑚&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_fan_red&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;鹿角珊瑚&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coral&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/coral_fan_yellow&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;其他的杂项方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里购买其他杂项方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/grass_side_carried&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;泥土方块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:dirt&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;草方块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/grass_side_carried&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;沙砾&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gravel&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/gravel&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;沙子&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sand&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sand&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;浮冰&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:packed_ice&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/ice_packed&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赭黄蛙明灯&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:ochre_froglight&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/ochre_froglight_side&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;珠光蛙明灯&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pearlescent_froglight&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/pearlescent_froglight_side&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;青翠蛙明灯&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:verdant_froglight&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/verdant_froglight_side&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;海晶灯（贴图错了&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sea_lantern&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sea_lantern&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;各种陶瓦方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里购买陶瓦相关方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;橙色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_orange&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;品红色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_magenta&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;淡蓝色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_light_blue&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;黄色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_yellow&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;黄绿色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_lime&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;粉红色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_pink&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;灰色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_gray&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;淡灰色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_silver&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;青色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_cyan&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;紫色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_purple&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;蓝色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_blue&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;棕色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_brown&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;绿色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_green&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_red&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;黑色陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stained_hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay_stained_black&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;各种石头相关方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里购买石头相关方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;石头&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;花岗岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone_granite&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;磨制花岗岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone_granite_smooth&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;闪长岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone_diorite&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;磨制闪长岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone_diorite_smooth&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;安山岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone_andesite&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;磨制安山岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/stone_andesite_smooth&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红石相关物品&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里购买红石相关的物品&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/redstone_torch_on&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;漏斗&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:hopper&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/hopper&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;活塞&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:piston&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/piston_side&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;粘液球&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:slime_ball&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/slimeball&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红石中继器&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:repeater&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/repeater&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红石比较器&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:comparator&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/comparator&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发射器&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:dispenser&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dispenser_front_horizontal&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;投掷器&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:dropper&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;discount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dropper_front_horizontal&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;recycle_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jiansyuan的小当铺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;童叟无欺，老少皆宜～&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/village_hero_effect&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;腐肉肉，恶心心&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:rotten_flesh&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/rotten_flesh&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;生牛肉&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:beef&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/beef_raw&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;生猪肉&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:porkchop&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/porkchop_raw&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;苹果&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:apple&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/apple&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;农村自养生土鸡&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:chicken&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/chicken_raw&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">128</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;农村天然土鸡蛋&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">128</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;非常普通的小麦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:wheat&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/wheat&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;熟高档安格斯牛&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cooked_beef&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/beef_cooked&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NIA的小当铺(木匠&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;童叟无欺，老少皆宜～&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/mashup_world&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;橡木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:oak_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/log_oak&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;云杉木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spruce_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/log_spruce&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;白桦木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:birch_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/log_birch&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;丛林木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:jungle_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/log_jungle&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;金合欢原木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:acacia_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/log_acacia&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;深色橡木原木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:dark_oak_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/log_big_oak&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;樱花原木&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cherry_log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/cherry_log_side&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;矿物回收&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里回收矿物&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/diamond&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;煤炭&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coal&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/coal&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红石&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:redstone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/redstone_dust&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;青金石&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:lapis_lazuli&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span>  <span class="token number">400</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/dye_powder_blue&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;铁锭&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:iron_ingot&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span>  <span class="token number">150</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/iron_ingot&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;黄金锭&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gold_ingot&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">450</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/gold_ingot&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;绿宝石&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:emerald&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/emerald&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;钻石&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:diamond&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/diamond&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;下界合金锭&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:netherite_ingot&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/netherite_ingot&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;战利品回收&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里回收战利品&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/end_crystal&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;骨头&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:bone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/bone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;箭矢&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:arrow&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/arrow&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;炸药&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gunpowder&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/gunpowder&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;鞘翅&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:elytra&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/elytra&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;龙头&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:skull&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;部分方块回收&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在这里回收一些方块&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/grass_side_carried&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;草方块&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/grass_side_carried&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;圆石&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cobblestone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/cobblestone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">512</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;沙砾&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gravel&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/gravel&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;沙子&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sand&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sand&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;陶瓦&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/hardened_clay&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;基岩&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:bedrock&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/bedrock&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lim&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;limnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function u(c,l){return s(),a("div",null,e)}const k=n(p,[["render",u],["__file","Shop.html.vue"]]);export{k as default};
