<template><div><h1 id="📦ntrade-usage-tutorial" tabindex="-1"><a class="header-anchor" href="#📦ntrade-usage-tutorial" aria-hidden="true">#</a> 📦Ntrade usage tutorial</h1>
<h3 id="plugin-function" tabindex="-1"><a class="header-anchor" href="#plugin-function" aria-hidden="true">#</a> Plugin function</h3>
<p>A plugin for interplayer transactions</p>
<h3 id="initialize-the-plugin" tabindex="-1"><a class="header-anchor" href="#initialize-the-plugin" aria-hidden="true">#</a> Initialize the plugin</h3>
<ol>
<li>
<p>Configure the corresponding BDS server and install <a href="https://github.com/LiteLDev/LiteLoaderBDS" target="_blank" rel="noopener noreferrer">LiteLoader<ExternalLinkIcon/></a>.</p>
</li>
<li>
<p>Download the latest version of <a href="https://github.com/NIANIANKNIA/Ntrade/releases" target="_blank" rel="noopener noreferrer">Ntrade<ExternalLinkIcon/></a>.</p>
</li>
<li>
<p>Place the <strong>Ntrade.lxl.js</strong> in the extracted package under the flugins folder in the BDS root directory</p>
</li>
<li>
<p>Launch the <strong>bedrock_server_mod.exe</strong>, and the plugin will automatically generate the corresponding configuration file</p>
</li>
</ol>
<h3 id="modify-the-configuration-file" tabindex="-1"><a class="header-anchor" href="#modify-the-configuration-file" aria-hidden="true">#</a> Modify the configuration file</h3>
<p>Please refer to the following to modify the configuration file</p>
<p>Configuration file location: <code v-pre>plugins/Ntrade/config.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"MarketID"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//Market ID, do not change under normal circumstances</span>
    <span class="token property">"llmoney"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// whether to enable llmoney economy, 0 (false) is not enabled, 1 (true) is enabled</span>
    <span class="token property">"MoneyScoresBoardName"</span><span class="token operator">:</span> <span class="token string">"money"</span><span class="token punctuation">,</span> <span class="token comment">// If for scoreboard economy, the corresponding scoreboard name</span>
    <span class="token property">"Password"</span><span class="token operator">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span> <span class="token comment">//Remove Authorization Code</span>
    <span class="token property">"BanItems"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"minecraft:clock"</span><span class="token punctuation">,</span> <span class="token comment">//prohibited item id</span>
            <span class="token property">"aux"</span><span class="token operator">:</span> <span class="token number">-1</span> <span class="token comment">// Prohibited items with special values (-1 means no restriction on special values)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"en_US"</span><span class="token punctuation">,</span> <span class="token comment">//the main language of the plugin, en_US is English and zh_CN is Chinese</span>
    <span class="token property">"AutoOffShelfTime"</span><span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token comment">// Automatic removal time (in hours), set to -1 will not automatically take off the shelves</span>
    <span class="token property">"TaxRate"</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// Transfer tax rate, set to 0 will not charge a fee, if necessary, please change to any number of [0,1) by yourself</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get started</h3>
<ol>
<li>
<p>After modifying the configuration file, you can use it after opening the service</p>
</li>
<li>
<p>Enter the /trade command in the server to open the GUI and perform the corresponding operation</p>
</li>
<li>
<p>You can enter the /opentradegui @p open the marketplace GUI to the nearest player</p>
</li>
</ol>
</div></template>


