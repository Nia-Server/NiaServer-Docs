<template><div><h1 id="🖥️部署指南-编写中" tabindex="-1"><a class="header-anchor" href="#🖥️部署指南-编写中" aria-hidden="true">#</a> 🖥️部署指南（编写中...）</h1>
<div class="custom-container warning"><p class="custom-container-title">编写中页面提醒</p>
<p>本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！</p>
</div>
<blockquote>
<p><a href="https://www.github.com/NIANIANKNIA/NIASERVER-V4" target="_blank" rel="noopener noreferrer">NIA服务器V4<ExternalLinkIcon/></a>仍处于开发状态中</p>
</blockquote>
<h3 id="下载对应版本的行为包" tabindex="-1"><a class="header-anchor" href="#下载对应版本的行为包" aria-hidden="true">#</a> 下载对应版本的行为包</h3>
<p>请自行前往Github的<a href="https://github.com/NIANIANKNIA/NIASERVER-V4/releases" target="_blank" rel="noopener noreferrer">release<ExternalLinkIcon/></a>界面按照需求下载相应的行为包或资源包。</p>
<p><strong>务必按照自己服务器版本下载对应的版本，否则有很大概率因为API变动导致行为包无法正常使用</strong></p>
<h3 id="放置相应位置并增加文件" tabindex="-1"><a class="header-anchor" href="#放置相应位置并增加文件" aria-hidden="true">#</a> 放置相应位置并增加文件</h3>
<p>将下载的行为包或者资源包分别放到服务器根目录下的<code v-pre>development_behavior_packs</code>文件夹，<code v-pre>development_resource_packs</code>文件夹里</p>
<p>然后在<code v-pre>worlds/MAPNAME</code>目录下添加<code v-pre>world_behavior_packs.json</code>与<code v-pre>world_resource_packs.json</code>文件</p>
<p>注：这里路径的MAPNAME指的是</p>
<p>文件内容分别为</p>
<p><code v-pre>pack_id</code>项请勿自行更改！</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>请自行根据下载的行为包、资源包的版本自行更改版本号（version），否则将会导致行为包、资源包无法正常运行！</p>
</div>
<p><code v-pre>world_behavior_packs.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"pack_id"</span><span class="token operator">:</span> <span class="token string">"cab0bbe3-eb10-465e-b1de-b09facc076c8"</span><span class="token punctuation">,</span>
        <span class="token property">"version"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>world_resource_packs.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"pack_id"</span><span class="token operator">:</span> <span class="token string">"981f1ce2-370b-4f58-99d9-9c504a118ec0"</span><span class="token punctuation">,</span>
        <span class="token property">"version"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3>
<p>配置文件位于<code v-pre>development_behavior_packs/scripts/config.js</code>，请勿自行修改其他文件，否则可能导致行为包无法正常使用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"MENUITEM"</span><span class="token operator">:</span> <span class="token string">"minecraft:stick"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"USEMenu"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"USEShop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"USERandomDATA"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"USETpa"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"USEHome"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"MoneyScoreboardName"</span><span class="token operator">:</span> <span class="token string">"money"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"MoneyShowName"</span><span class="token operator">:</span> <span class="token string">"能源币"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"TimeScoreboardName"</span><span class="token operator">:</span><span class="token string">"time"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"OPTAG"</span><span class="token operator">:</span> <span class="token string">"op"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"OPMENUPassword"</span><span class="token operator">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"islandCfg"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"R"</span><span class="token operator">:</span>  <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token string-property property">"CX"</span><span class="token operator">:</span> <span class="token number">402</span><span class="token punctuation">,</span>
        <span class="token string-property property">"CY"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string-property property">"CZ"</span><span class="token operator">:</span> <span class="token number">547</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改菜单文件" tabindex="-1"><a class="header-anchor" href="#修改菜单文件" aria-hidden="true">#</a> 修改菜单文件</h3>
<p>这里的菜单指的是服务器的主菜单、服务器商店菜单等...</p>
<h4 id="主菜单" tabindex="-1"><a class="header-anchor" href="#主菜单" aria-hidden="true">#</a> 主菜单</h4>
<h5 id="可选变量" tabindex="-1"><a class="header-anchor" href="#可选变量" aria-hidden="true">#</a> 可选变量</h5>
<p>标题（title）：</p>
<p><code v-pre>%playername%</code>将被替换为玩家名字</p>
<p>主体（body）：</p>
<p><code v-pre>%playername%</code>将被替换为玩家名字</p>
<p><code v-pre>%RN%</code>将被替换为物价指数</p>
<p><code v-pre>*scoreboardName*</code>将被替换成玩家scoreboardName计分板的分数</p>
<p>例：<code v-pre>&quot;body&quot;:玩家金币:*money*</code>将会在游戏中显示为<code v-pre>玩家金币:12345</code></p>
<p>按钮（button）：</p>
<p><code v-pre>%playername%</code>将被替换为玩家名字</p>
<p>例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"buttons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"立即回城"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/chest_front"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"runCmd"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token string">"tp @s"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"返回主岛"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/backup_replace"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"runCmd"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token string">"say @a"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"个人传送点"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/icon_new"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"runCmd"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token string">"say %playername%"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="商店菜单" tabindex="-1"><a class="header-anchor" href="#商店菜单" aria-hidden="true">#</a> 商店菜单</h4>
<h3 id="可选-根据需求删除多余文件" tabindex="-1"><a class="header-anchor" href="#可选-根据需求删除多余文件" aria-hidden="true">#</a> （可选）根据需求删除多余文件</h3>
<h3 id="可选-本地测试" tabindex="-1"><a class="header-anchor" href="#可选-本地测试" aria-hidden="true">#</a> （可选）本地测试</h3>
<h3 id="部署到服务器上" tabindex="-1"><a class="header-anchor" href="#部署到服务器上" aria-hidden="true">#</a> 部署到服务器上</h3>
</div></template>


