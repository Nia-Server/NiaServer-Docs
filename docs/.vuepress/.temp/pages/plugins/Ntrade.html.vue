<template><div><h1 id="📦ntrade使用教程" tabindex="-1"><a class="header-anchor" href="#📦ntrade使用教程" aria-hidden="true">#</a> 📦Ntrade使用教程</h1>
<h3 id="插件作用" tabindex="-1"><a class="header-anchor" href="#插件作用" aria-hidden="true">#</a> 插件作用</h3>
<p>用于实现玩家间交易的一个插件</p>
<h3 id="初始化插件" tabindex="-1"><a class="header-anchor" href="#初始化插件" aria-hidden="true">#</a> 初始化插件</h3>
<ol>
<li>
<p>配置好相应的BDS服务端，并安装好<a href="https://github.com/LiteLDev/LiteLoaderBDS" target="_blank" rel="noopener noreferrer">LiteLoader<ExternalLinkIcon/></a></p>
</li>
<li>
<p>下载最新版本的<a href="https://github.com/NIANIANKNIA/Ntrade/releases" target="_blank" rel="noopener noreferrer">Ntrade<ExternalLinkIcon/></a></p>
</li>
<li>
<p>将解压包中的Ntrade.lxl.js放到BDS根目录的plugins文件夹下</p>
</li>
<li>
<p>启动<strong>bedrock_server_mod.exe</strong>，然后插件会自动生成相应的配置文件</p>
</li>
</ol>
<h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3>
<p>请参考以下内容修改配置文件</p>
<p>配置文件位置：<code v-pre>plugins/Ntrade/config.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"marketID"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">//市场ID，正常情况下不要更改</span>
    <span class="token property">"llmoney"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>   <span class="token comment">//是否启用llmoney经济，0（false）为不启用，1（true）为启用</span>
    <span class="token property">"MoneyScoresBoardName"</span><span class="token operator">:</span> <span class="token string">"money"</span><span class="token punctuation">,</span>  <span class="token comment">//如果为计分板经济，相应的计分板名称</span>
    <span class="token property">"Password"</span><span class="token operator">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>   <span class="token comment">//下架授权码</span>
    <span class="token property">"BanItems"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:clock"</span><span class="token punctuation">,</span>  <span class="token comment">//禁止上架的物品id</span>
            <span class="token property">"aux"</span><span class="token operator">:</span> <span class="token number">-1</span>   <span class="token comment">//禁止上架的物品特殊值（-1就是不限制特殊值）</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"zh_CN"</span><span class="token punctuation">,</span>  <span class="token comment">//插件的主语言 en_US 为英语</span>
    <span class="token property">"AutoOffShelfTime"</span><span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span>   <span class="token comment">//自动下架的时间（单位：小时），设置为-1则不会自动下架</span>
    <span class="token property">"TaxRate"</span><span class="token operator">:</span> <span class="token number">0</span>    <span class="token comment">//转账税率，设置为0则不收手续费，若有需求，请自行更改为[0，1)的任意数字</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h3>
<p>1.修改完成配置文件后开服即可使用</p>
<p>2.在服务器中输入/trade指令打开GUI进行相应操作</p>
<p>3.您可以输入/opentradegui @p给最近的玩家打开交易市场GUI</p>
</div></template>


