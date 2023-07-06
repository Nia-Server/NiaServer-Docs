<template><div><h1 id="🖥️部署指南-编写中" tabindex="-1"><a class="header-anchor" href="#🖥️部署指南-编写中" aria-hidden="true">#</a> 🖥️部署指南（编写中...）</h1>
<div class="custom-container warning"><p class="custom-container-title">编写中页面提醒</p>
<p>本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！</p>
</div>
<h3 id="配置服务器运行环境" tabindex="-1"><a class="header-anchor" href="#配置服务器运行环境" aria-hidden="true">#</a> 配置服务器运行环境</h3>
<p>首先我们应当下载<a href="https://www.minecraft.net/en-us/download/server/bedrock" target="_blank" rel="noopener noreferrer">BDS服务器端<ExternalLinkIcon/></a></p>
<p>此时我们应当注意服务器版本，从而下载相匹配的行为包</p>
<h3 id="下载对应版本的行为包" tabindex="-1"><a class="header-anchor" href="#下载对应版本的行为包" aria-hidden="true">#</a> 下载对应版本的行为包</h3>
<p>请自行前往<strong>Github</strong>的<a href="https://github.com/NIANIANKNIA/NIASERVER-V4/releases" target="_blank" rel="noopener noreferrer">release<ExternalLinkIcon/></a>界面按照需求下载相应的行为包或资源包。</p>
<p>国内用户如果打不开可以前往<strong>Gitee</strong>的<a href="https://gitee.com/nianianknia/NIASERVER-V4/releases" target="_blank" rel="noopener noreferrer">release<ExternalLinkIcon/></a>界面按照需求下载相应的行为包或资源包。</p>
<p><strong>务必按照自己服务器版本下载对应的版本，否则有很大概率因为版本不一致导致行为包无法正常使用</strong></p>
<h3 id="放置相应位置并增加文件" tabindex="-1"><a class="header-anchor" href="#放置相应位置并增加文件" aria-hidden="true">#</a> 放置相应位置并增加文件</h3>
<p>将下载的行为包或者资源包分别放到服务器根目录下的<code v-pre>development_behavior_packs</code>文件夹，<code v-pre>development_resource_packs</code>文件夹里</p>
<p>您可以选择下载release中的<code v-pre>world_behavior_packs.json</code>与<code v-pre>world_resource_packs.json</code>文件，并将其放置至<code v-pre>worlds/MAPNAME</code>目录下</p>
<p><strong>注：这里路径的<code v-pre>MAPNAME</code>指的是自己的地图名称，并不是真的叫<code v-pre>MAPNAME</code>，而是你自己的地图名字！</strong></p>
<p>（不推荐）或者您也可以选择自行在<code v-pre>worlds/MAPNAME</code>目录下添加<code v-pre>world_behavior_packs.json</code>与<code v-pre>world_resource_packs.json</code>文件</p>
<p><strong>注：这里路径的<code v-pre>MAPNAME</code>指的是自己的地图名称，并不是真的叫<code v-pre>MAPNAME</code>，而是你自己的地图名字！</strong></p>
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
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>请使用诸如<a href="https://gitee.com/cxasm/notepad--" target="_blank" rel="noopener noreferrer">notepad--<ExternalLinkIcon/></a>等文本编辑器进行更改，请不要使用自带的记事本进行更改!</p>
</div>
<p>配置文件位于<code v-pre>development_behavior_packs/scripts/config.js</code>，请勿自行修改其他文件，否则可能导致行为包无法正常使用</p>
<blockquote>
<p>截至目前发布的v1.1.0版本，配置文件仍在开发状态中，故以下配置教程仅提供目前看可以更改的项目！</p>
</blockquote>
<ul>
<li><code v-pre>ServerMode</code>--服务器模式</li>
</ul>
<p>可选参数：<code v-pre>Island</code>（默认）、<code v-pre>Survival</code></p>
<ul>
<li>
<p><code v-pre>MENUITEM</code>--打开服务器菜单所使用的物品</p>
</li>
<li>
<p><code v-pre>OPTAG</code>--管理员标签</p>
</li>
</ul>
<p>仅当管理员拥有此标签才可以打开管理菜单进行相关操作</p>
<ul>
<li><code v-pre>OPMENUPassword</code>--管理员面板密码</li>
</ul>
<p>打开管理员面板输入的密码</p>
<ul>
<li><code v-pre>islandCfg</code>--空岛相关配置项目</li>
</ul>
<p><code v-pre>R</code>--空岛之间间距</p>
<p><code v-pre>CX</code>--中心点X坐标</p>
<p><code v-pre>CY</code>--中心点Y坐标</p>
<p><code v-pre>CZ</code>--中心点Z坐标</p>
<p>配置示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"ServerMode"</span><span class="token operator">:</span> <span class="token string">"Island"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"MENUITEM"</span><span class="token operator">:</span> <span class="token string">"minecraft:clock"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"USERandomDATA"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改菜单文件" tabindex="-1"><a class="header-anchor" href="#修改菜单文件" aria-hidden="true">#</a> 修改菜单文件</h3>
<p>这里的菜单指的是服务器的主菜单、服务器商店菜单等...</p>
<h4 id="主菜单" tabindex="-1"><a class="header-anchor" href="#主菜单" aria-hidden="true">#</a> 主菜单</h4>
<h5 id="开始配置" tabindex="-1"><a class="header-anchor" href="#开始配置" aria-hidden="true">#</a> 开始配置</h5>
<p>下载好的行为包中已经配置好了主菜单，但我们仍为您提供了菜单自定义的功能</p>
<p>您可以根据自己的需求重新配置主菜单的界面满足您自己的需求</p>
<p>主菜单的相关文件在<code v-pre>development_behavior_packs/scripts/menu/main.js</code>里</p>
<p>我们可以更改的内容是定义的MainGUI里面的内容（<code v-pre>title</code>、<code v-pre>body</code>、<code v-pre>buttons</code>），对应代码的16行以后的内容</p>
<ul>
<li><code v-pre>title</code>--主菜单标题</li>
<li><code v-pre>body</code>--菜单文字主体部分</li>
<li><code v-pre>buttons</code>--菜单按钮部分</li>
</ul>
<p><code v-pre>buttons</code>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"buttons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"立即回城\n点击后立即返回主城"</span><span class="token punctuation">,</span><span class="token comment">//按钮名称</span>
        <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/chest_front"</span><span class="token punctuation">,</span><span class="token comment">//按钮的icon（图标）</span>
        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"runCmd"</span><span class="token punctuation">,</span><span class="token comment">//按钮类型</span>
        <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token string">"tp @a[name=%playername%] 702 82 554"</span><span class="token punctuation">,</span><span class="token comment">//"runCmd"类型对应的执行内容</span>
        <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token comment">//是否为仅管理才能可看到的按钮</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"返回主岛\n即可立即返回自己的主岛"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/backup_replace"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"goISLAND"</span><span class="token punctuation">,</span><span class="token comment">//这里是一个自定义功能，不建议使用</span>
        <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"设置\n在这里修改所有设置"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/automation_glyph_color"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"openGUI"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"GUI"</span><span class="token operator">:</span> <span class="token string">"SetupGUI"</span><span class="token punctuation">,</span><span class="token comment">//"openGUI"类型对应的打开的菜单界面</span>
        <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"管理菜单\n点开即可开始管理服务器"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/op"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"openGUI"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"GUI"</span><span class="token operator">:</span> <span class="token string">"OpGUI"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>type</code>--按钮类型</li>
</ul>
<p>可选参数：<code v-pre>runCmd</code>、<code v-pre>openGUI</code></p>
<table>
<thead>
<tr>
<th style="text-align:center">界面中文名称</th>
<th style="text-align:center">对应的GUI参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">设置界面</td>
<td style="text-align:center">SetupGUI</td>
</tr>
<tr>
<td style="text-align:center">商店界面</td>
<td style="text-align:center">ShopGUI</td>
</tr>
<tr>
<td style="text-align:center">氧气系统界面</td>
<td style="text-align:center">OxygenGUI</td>
</tr>
<tr>
<td style="text-align:center">传送系统界面</td>
<td style="text-align:center">TpaGUI</td>
</tr>
<tr>
<td style="text-align:center">兑换码系统界面</td>
<td style="text-align:center">CdkGUI</td>
</tr>
<tr>
<td style="text-align:center">飞行系统界面</td>
<td style="text-align:center">FlyGUI</td>
</tr>
<tr>
<td style="text-align:center">转账系统界面</td>
<td style="text-align:center">TransferGUI</td>
</tr>
<tr>
<td style="text-align:center">管理系统界面</td>
<td style="text-align:center">OpGUI</td>
</tr>
</tbody>
</table>
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
<p>配置示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MainGUI <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"服务器菜单"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token string">"§l===========================\n§eHi! §l§6%playername% §r§e欢迎回来！\n§e您目前能源币余额： §6§l*money*\n§r§e您目前剩余氧气值为： §6§l*oxygen*\n§r§e您目前剩余体力值为： §6§l*stamina*\n§r§e您目前在线总时长为： §6§l*time*\n§r§e当前物价指数为： §6§l%RN%\n§r§l===========================\n§r§c§l游玩中有问题找腐竹反馈！\n祝您游玩愉快！\n§r§l==========================="</span><span class="token punctuation">,</span>
    <span class="token string-property property">"buttons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"立即回城\n点击后立即返回主城"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/chest_front"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"runCmd"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token string">"tp @a[name=%playername%] 702 82 554"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"返回主岛\n即可立即返回自己的主岛"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/backup_replace"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"goISLAND"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"设置\n在这里修改所有设置"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/automation_glyph_color"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"openGUI"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"GUI"</span><span class="token operator">:</span> <span class="token string">"SetupGUI"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"管理菜单\n点开即可开始管理服务器"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"textures/ui/op"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"openGUI"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"GUI"</span><span class="token operator">:</span> <span class="token string">"OpGUI"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"opMenu"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="商店菜单" tabindex="-1"><a class="header-anchor" href="#商店菜单" aria-hidden="true">#</a> 商店菜单</h4>
<p>商店菜单的相关文件在<code v-pre>development_behavior_packs/scripts/menu/shop.js</code>里</p>
<p>您可以根据自己的需求按照下方的例子进行自行更改！</p>
<h5 id="售卖物品菜单" tabindex="-1"><a class="header-anchor" href="#售卖物品菜单" aria-hidden="true">#</a> 售卖物品菜单</h5>
<p>配置示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> SellData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"一些免费赠送的东西"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"无限次免费购买（"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/ui/gift_square.png"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"钟表"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:clock"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token string-property property">"discount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/clock_item"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"杂项商店"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"卖一些杂七杂八的东西"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/apple_golden"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"附魔金苹果"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:enchanted_golden_apple"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
                <span class="token string-property property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/apple_golden"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"三叉戟"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:trident"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
                <span class="token string-property property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/trident"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"细雪桶"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:powder_snow_bucket"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
                <span class="token string-property property">"discount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/bucket_powder_snow"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="回收菜单" tabindex="-1"><a class="header-anchor" href="#回收菜单" aria-hidden="true">#</a> 回收菜单</h5>
<p>配置示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> RecycleData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"jiansyuan的小当铺"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"童叟无欺，老少皆宜～"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/ui/village_hero_effect"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"腐肉肉，恶心心"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:rotten_flesh"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/rotten_flesh"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string-property property">"limnum"</span><span class="token operator">:</span> <span class="token number">48</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"生牛肉"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:beef"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/beef_raw"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"NIA的小当铺(木匠"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"童叟无欺，老少皆宜～"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/ui/mashup_world"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"橡木/云杉木/白桦木/丛林木"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:log"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_oak"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"金合欢原木/深色橡木原木"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:log2"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/blocks/log_acacia"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"lim"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">"limnum"</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"矿物回收"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"在这里回收矿物"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/diamond"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"煤炭"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:coal"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"textures/items/coal"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"lim"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string-property property">"limnum"</span><span class="token operator">:</span> <span class="token number">32</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置外部依赖服务器-机器人" tabindex="-1"><a class="header-anchor" href="#配置外部依赖服务器-机器人" aria-hidden="true">#</a> 配置外部依赖服务器&amp;&amp;机器人</h3>
<h3 id="修改服务器permissions-json文件" tabindex="-1"><a class="header-anchor" href="#修改服务器permissions-json文件" aria-hidden="true">#</a> 修改服务器permissions.json文件</h3>
<p>将文件内容更改为下列内容</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"allowed_modules"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"@minecraft/server-gametest"</span><span class="token punctuation">,</span>
    <span class="token string">"@minecraft/server"</span><span class="token punctuation">,</span>
    <span class="token string">"@minecraft/server-ui"</span><span class="token punctuation">,</span>
    <span class="token string">"@minecraft/server-admin"</span><span class="token punctuation">,</span>
    <span class="token string">"@minecraft/server-editor"</span><span class="token punctuation">,</span>
    <span class="token string">"@minecraft/server-net"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启服务器" tabindex="-1"><a class="header-anchor" href="#开启服务器" aria-hidden="true">#</a> 开启服务器</h3>
<p>1.首先开启依赖服务器，等机器人成功发送“机器人已启动！”后进行下一步</p>
<p>2.开启基岩版服务器</p>
</div></template>


