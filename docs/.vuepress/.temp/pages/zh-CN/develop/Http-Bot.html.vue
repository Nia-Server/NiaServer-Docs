<template><div><h1 id="🤖http-bot" tabindex="-1"><a class="header-anchor" href="#🤖http-bot" aria-hidden="true">#</a> 🤖Http-BOT</h1>
<div class="custom-container warning"><p class="custom-container-title">编写中页面提醒</p>
<p>本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！</p>
</div>
<h2 id="为什么开发" tabindex="-1"><a class="header-anchor" href="#为什么开发" aria-hidden="true">#</a> 为什么开发？</h2>
<p>由于目前我的世界的Script-api无法实现诸如文件读写等功能,为此我们特此基于C++开发了<code v-pre>NIA-Http-Bot</code>用来实现更多功能，从而赋予Script-api更多可能</p>
<h2 id="使用前注意事项" tabindex="-1"><a class="header-anchor" href="#使用前注意事项" aria-hidden="true">#</a> 使用前注意事项</h2>
<p>请注意启用<strong>NET模块</strong>...</p>
<h2 id="api一览表" tabindex="-1"><a class="header-anchor" href="#api一览表" aria-hidden="true">#</a> API一览表</h2>
<h3 id="get-checkserver-开发中" tabindex="-1"><a class="header-anchor" href="#get-checkserver-开发中" aria-hidden="true">#</a> [GET] <code v-pre>/CheckServer</code>（开发中）</h3>
<p>返回当前<code v-pre>NIAHttpBOT</code>的状态，多用于检测依赖服务器有没有正常开启</p>
<h3 id="get-gettime-开发中" tabindex="-1"><a class="header-anchor" href="#get-gettime-开发中" aria-hidden="true">#</a> [GET] <code v-pre>/GetTime</code>（开发中）</h3>
<p>获取当前时间，返回形如&quot;2019-01-28 12:53&quot;的字符串</p>
<p>使用示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token keyword">const</span> reqGetTime <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/GetTime</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    reqServerStarted<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dependent server connection failed! Check whether the dependent server started successfully."</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-checkfile" tabindex="-1"><a class="header-anchor" href="#post-checkfile" aria-hidden="true">#</a> [POST] <code v-pre>/CheckFile</code></h3>
<p>检查一个文件是否存在，目标文件存在则返回<code v-pre>true</code>，不存在则返回<code v-pre>false</code></p>
<p>使用示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token keyword">const</span> reqCheckFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/CheckFile</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reqCheckFile<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">"FileName.json"</span>
    reqCheckFile<span class="token punctuation">.</span>method <span class="token operator">=</span> HttpRequestMethod<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">;</span>
    reqCheckFile<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/plain"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>reqCheckFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">==</span> <span class="token string">"true"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Target file exists."</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">==</span> <span class="token string">"false"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"The target file does not exist"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dependent server connection failed! Check whether the dependent server started successfully."</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-deletefile-开发中" tabindex="-1"><a class="header-anchor" href="#post-deletefile-开发中" aria-hidden="true">#</a> [POST] <code v-pre>/DeleteFile</code>（开发中）</h3>
<p>删除一个文件，删除成功返回<code v-pre>success</code>，删除失败则返回<code v-pre>fail</code></p>
<p>使用示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token keyword">const</span> reqDeleteFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/DeleteFile</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reqDeleteFile<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">"./test/FileName.json"</span>
    reqDeleteFile<span class="token punctuation">.</span>method <span class="token operator">=</span> HttpRequestMethod<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">;</span>
    reqDeleteFile<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/plain"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>reqDeleteFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">==</span> <span class="token string">"success"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Target file deleted successfully!"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dependent server connection failed! Check whether the dependent server started successfully."</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-createnewjsonfile" tabindex="-1"><a class="header-anchor" href="#post-createnewjsonfile" aria-hidden="true">#</a> [POST] <code v-pre>/CreateNewJsonFile</code></h3>
<p>创建一个JSON文件，创建成功返回<code v-pre>success</code>，创建失败则返回<code v-pre>失败原因</code></p>
<table>
<thead>
<tr>
<th style="text-align:center">失败原因内容</th>
<th style="text-align:center">对应中文</th>
<th style="text-align:center">解决办法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Data parsing failed</td>
<td style="text-align:center">对象数据解析失败</td>
<td style="text-align:center">请检查发送的对象数据格式是否正确</td>
</tr>
<tr>
<td style="text-align:center">Incorrect data format, please recheck and send again.</td>
<td style="text-align:center">错误的数据格式</td>
<td style="text-align:center">请检查发送的对象数据格式是否同示例一样（包括大小写）</td>
</tr>
</tbody>
</table>
<p>使用示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token keyword">const</span> reqCreateNewJsonFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/CreateNewJsonFile</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reqCreateNewJsonFile<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"fileName"</span><span class="token operator">:</span><span class="token string">"market111.json"</span><span class="token punctuation">,</span><span class="token string-property property">"fileContent"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">"a"</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    reqCreateNewJsonFile<span class="token punctuation">.</span>method <span class="token operator">=</span> HttpRequestMethod<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">;</span>
    reqCreateNewJsonFile<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/plain"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>reqCreateNewJsonFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">==</span> <span class="token string">"success"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"File created successfully!"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">!=</span> <span class="token string">"success"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dependent server connection failed! Check whether the dependent server started successfully."</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-getjsonfiledata" tabindex="-1"><a class="header-anchor" href="#post-getjsonfiledata" aria-hidden="true">#</a> [POST] <code v-pre>/GetJsonFileData</code></h3>
<p>获取JSON文件数据，获取成功则返回json格式的数据，删除失败则返回<code v-pre>fail</code></p>
<p>使用示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token keyword">const</span> reqGetFileData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/GetFileData</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reqGetFileData<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">"./test/FileName.json"</span>
    reqGetFileData<span class="token punctuation">.</span>method <span class="token operator">=</span> HttpRequestMethod<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">;</span>
    reqGetFileData<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/plain"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>reqDeleteFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">!=</span> <span class="token string">"fail"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Get file data successfully!"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dependent server connection failed! Check whether the dependent server started successfully."</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-overwritejsonfiledata" tabindex="-1"><a class="header-anchor" href="#post-overwritejsonfiledata" aria-hidden="true">#</a> [POST] <code v-pre>/OverwriteJsonFileData</code></h3>
<p>覆盖JSON文件内容，覆盖成功则返回<code v-pre>success</code>，覆盖失败则返回<code v-pre>失败原因</code></p>
<table>
<thead>
<tr>
<th style="text-align:center">失败原因内容</th>
<th style="text-align:center">对应中文</th>
<th style="text-align:center">解决办法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Data parsing failed</td>
<td style="text-align:center">对象数据解析失败</td>
<td style="text-align:center">请检查发送的对象数据格式是否正确</td>
</tr>
<tr>
<td style="text-align:center">Incorrect data format, please recheck and send again.</td>
<td style="text-align:center">错误的数据格式</td>
<td style="text-align:center">请检查发送的对象数据格式是否同示例一样（包括大小写）</td>
</tr>
</tbody>
</table>
<p>使用示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token keyword">const</span> reqOverwriteJsonFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/OverwriteJsonFile</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reqOverwriteJsonFile<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"fileName"</span><span class="token operator">:</span><span class="token string">"FileName.json"</span><span class="token punctuation">,</span><span class="token string-property property">"fileData"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">"a"</span><span class="token operator">:</span><span class="token string">"呵呵呵呵"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    reqOverwriteJsonFile<span class="token punctuation">.</span>method <span class="token operator">=</span> HttpRequestMethod<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">;</span>
    reqOverwriteJsonFile<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/plain"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>reqOverwriteJsonFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">==</span> <span class="token string">"success"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Overwrite file data successfully!"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>body <span class="token operator">!=</span> <span class="token string">"success"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dependent server connection failed! Check whether the dependent server started successfully."</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-writelinetofile-开发中" tabindex="-1"><a class="header-anchor" href="#post-writelinetofile-开发中" aria-hidden="true">#</a> [POST] <code v-pre>/WriteLineToFile</code>（开发中）</h3>
<p>向目标文件写入一行内容</p>
<h3 id="post-deletelinefromfile-开发中" tabindex="-1"><a class="header-anchor" href="#post-deletelinefromfile-开发中" aria-hidden="true">#</a> [POST] <code v-pre>/DeleteLineFromFile</code>（开发中）</h3>
<p>向目标文件删除一行内容</p>
<h3 id="post-overwritefiledata-开发中" tabindex="-1"><a class="header-anchor" href="#post-overwritefiledata-开发中" aria-hidden="true">#</a> [POST] <code v-pre>/OverwriteFileData</code>（开发中）</h3>
<p>覆盖文件内容</p>
<h3 id="post-checkdir-开发中" tabindex="-1"><a class="header-anchor" href="#post-checkdir-开发中" aria-hidden="true">#</a> [POST] <code v-pre>/CheckDir</code>（开发中）</h3>
<p>检查目标文件夹是否存在</p>
<h3 id="post-createdir-开发中" tabindex="-1"><a class="header-anchor" href="#post-createdir-开发中" aria-hidden="true">#</a> [POST] <code v-pre>/CreateDir</code>（开发中）</h3>
<p>创建一个文件夹</p>
</div></template>


