<template><div><h1 id="📜服务器图鉴-编写中" tabindex="-1"><a class="header-anchor" href="#📜服务器图鉴-编写中" aria-hidden="true">#</a> 📜服务器图鉴（编写中...）</h1>
<div class="custom-container warning"><p class="custom-container-title">编写中页面提醒</p>
<p>本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！</p>
</div>
<blockquote>
<p>NIA服务器V4版本的基本设定，你可以在这里查询到任何你想知道的关于服务器的设定！</p>
</blockquote>
<h3 id="🧊服务器背景故事设定" tabindex="-1"><a class="header-anchor" href="#🧊服务器背景故事设定" aria-hidden="true">#</a> 🧊服务器背景故事设定</h3>
<p>敬请期待</p>
<h3 id="🚨基本玩法" tabindex="-1"><a class="header-anchor" href="#🚨基本玩法" aria-hidden="true">#</a> 🚨基本玩法</h3>
<p>敬请期待</p>
<h3 id="🗻所有空岛类型" tabindex="-1"><a class="header-anchor" href="#🗻所有空岛类型" aria-hidden="true">#</a> 🗻所有空岛类型</h3>
<p>敬请期待</p>
<h3 id="💵货币系统" tabindex="-1"><a class="header-anchor" href="#💵货币系统" aria-hidden="true">#</a> 💵货币系统</h3>
<p>货币名为能源币，基准为一颗钻石1000货币</p>
<p>服务器商店回收木头，农作物，石头等物品</p>
<p>服务器所有商品价格/回收价格均基于<strong>基础物价*物价指数</strong></p>
<p>其中物价指数将每半小时更新一次，每次在<code v-pre>0.20-1.80</code>之间随机波动，概率符合二项分布。</p>
<p><strong>附表：基础物品基础物价表</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">物品名称</th>
<th style="text-align:center">售卖价格</th>
<th style="text-align:center">回收价格</th>
<th style="text-align:center">所属种类</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">钻石</td>
<td style="text-align:center">1000</td>
<td style="text-align:center">1000</td>
<td style="text-align:center">矿石</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">敬请期待</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h3 id="🫧氧气值设定" tabindex="-1"><a class="header-anchor" href="#🫧氧气值设定" aria-hidden="true">#</a> 🫧氧气值设定</h3>
<p>玩家初始拥有“初始呼吸装备”便获得<strong>5000/5000</strong>点氧气值 （前面为如今氧气值，后面的为初始等级氧气值最大容量）</p>
<p>以下所有数值除非说明否则均以“初始呼吸装备”为准</p>
<p>当玩家在线时，氧气值将以每分钟<strong>20</strong>点减少</p>
<p>当<strong>氧气值≥14000</strong>时玩家血量将由<strong>20点变为40点</strong></p>
<p>当<strong>氧气值≥10000</strong>时玩家获得<strong>跳跃提升1</strong>提升</p>
<p>当<strong>氧气值≥4800</strong>时玩家获得<strong>力量1</strong>提升</p>
<p>当<strong>氧气值≥3500</strong>时玩家获得<strong>生命恢复1</strong>提升</p>
<p>当<strong>氧气值≤400</strong>时玩家获得<strong>缓慢</strong>效果</p>
<p>当<strong>氧气值归零时</strong>，玩家初始会获得<strong>眩晕/缓慢/中毒/缺氧/挖掘疲劳/虚弱</strong>效果</p>
<p>当<strong>氧气值归零超过1分钟</strong>获得<strong>失明</strong>效果</p>
<p>当<strong>氧气值归零超过5分钟</strong>，玩家<strong>直接死亡</strong>并强制重生至&quot;医院&quot;，在&quot;医院&quot;强制支付一定数量的货币进行治疗，并获得400氧气值用于生命的基本维持，玩家需在下次氧气值归零前购买足够的氧气用于保命。</p>
<h3 id="🤖-呼吸装备-设定" tabindex="-1"><a class="header-anchor" href="#🤖-呼吸装备-设定" aria-hidden="true">#</a> 🤖&quot;呼吸装备&quot;设定</h3>
<p>玩家可以通过升级自己的呼吸装备来获得更高等级的效果</p>
<table>
<thead>
<tr>
<th style="text-align:center">装备名称</th>
<th style="text-align:center">最大氧气值</th>
<th style="text-align:center">每分钟损耗氧气值</th>
<th style="text-align:center">升级所消耗能源币</th>
<th style="text-align:center">特殊效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">初级呼吸装备Ⅰ</td>
<td style="text-align:center">5000</td>
<td style="text-align:center">20</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">初级呼吸装备Ⅱ</td>
<td style="text-align:center">5300</td>
<td style="text-align:center">19</td>
<td style="text-align:center">100</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">初级呼吸装备Ⅲ</td>
<td style="text-align:center">5500</td>
<td style="text-align:center">18</td>
<td style="text-align:center">300</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">中级呼吸装备Ⅰ</td>
<td style="text-align:center">5800</td>
<td style="text-align:center">18</td>
<td style="text-align:center">500</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">中级呼吸装备Ⅱ</td>
<td style="text-align:center">6000</td>
<td style="text-align:center">17</td>
<td style="text-align:center">700</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">中级呼吸装备Ⅲ</td>
<td style="text-align:center">6000</td>
<td style="text-align:center">16</td>
<td style="text-align:center">1000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">高级呼吸装备Ⅰ</td>
<td style="text-align:center">6300</td>
<td style="text-align:center">16</td>
<td style="text-align:center">1500</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">高级呼吸装备Ⅱ</td>
<td style="text-align:center">6500</td>
<td style="text-align:center">15</td>
<td style="text-align:center">2000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">高级呼吸装备Ⅲ</td>
<td style="text-align:center">6500</td>
<td style="text-align:center">14</td>
<td style="text-align:center">2500</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">X级呼吸装备Ⅰ</td>
<td style="text-align:center">7000</td>
<td style="text-align:center">13</td>
<td style="text-align:center">5000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">X级呼吸装备Ⅱ</td>
<td style="text-align:center">8000</td>
<td style="text-align:center">13</td>
<td style="text-align:center">7000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">X级呼吸装备Ⅲ</td>
<td style="text-align:center">9000</td>
<td style="text-align:center">12</td>
<td style="text-align:center">9000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">X级呼吸装备Ⅳ</td>
<td style="text-align:center">10000</td>
<td style="text-align:center">11</td>
<td style="text-align:center">10000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">X级呼吸装备Ⅴ</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">10</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">S级呼吸装备Ⅰ</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">5</td>
<td style="text-align:center">20000</td>
<td style="text-align:center">当<strong>氧气值≥3500</strong>时玩家获得<strong>生命恢复2</strong>提升</td>
</tr>
<tr>
<td style="text-align:center">S级呼吸装备Ⅱ</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">3</td>
<td style="text-align:center">30000</td>
<td style="text-align:center">当<strong>氧气值≥3500</strong>时玩家获得<strong>生命恢复3</strong>提升</td>
</tr>
<tr>
<td style="text-align:center">S级呼吸装备Ⅲ</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">2</td>
<td style="text-align:center">40000</td>
<td style="text-align:center">当<strong>氧气值≥4800</strong>时玩家获得<strong>力量2</strong>提升</td>
</tr>
<tr>
<td style="text-align:center">V型呼吸装备</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">1</td>
<td style="text-align:center">50000</td>
<td style="text-align:center">装备者可获得无限时间的<strong>夜视</strong>效果</td>
</tr>
</tbody>
</table>
<p><strong>注：“特殊效果”一栏如果为“-”，则代表正向增益buff按照氧气值设定中初始设定实行,如果没有特殊说明，默认更高级的装备支持低级装备所有功能，玩家不可以跨级升级。</strong></p>
<h3 id="🤿如何获得氧气" tabindex="-1"><a class="header-anchor" href="#🤿如何获得氧气" aria-hidden="true">#</a> 🤿如何获得氧气？</h3>
<p>①从商店购买&quot;氧气制造机&quot;（虚拟的）当玩家在线每分钟按照级别将产生<strong>5/8/10</strong>的氧气值直接至玩家氧气值中直到玩家氧气值满</p>
<p>②从商店直接使用货币购买氧气值</p>
<p>③接收其他玩家的&quot;有损&quot;转送氧气值（玩家a给玩家b转送氧气，由于过程中损耗，玩家b只能收到50-95%的氧气）</p>
<p>④敬请期待...</p>
<h3 id="🥖体力系统" tabindex="-1"><a class="header-anchor" href="#🥖体力系统" aria-hidden="true">#</a> 🥖体力系统</h3>
<p>玩家不在线时每八分钟回一个体力值，体力值基础最大值160格（可后期升级），玩家在线时每分钟回一格体力值，体力值可以用于进入矿场、刷怪场、跑酷等可以获得矿物、突破素材、货币的场所</p>
<h3 id="🧩等级系统" tabindex="-1"><a class="header-anchor" href="#🧩等级系统" aria-hidden="true">#</a> 🧩等级系统</h3>
<p>敬请期待</p>
<h3 id="💎矿石系统" tabindex="-1"><a class="header-anchor" href="#💎矿石系统" aria-hidden="true">#</a> 💎矿石系统</h3>
<p>敬请期待</p>
<h3 id="🎃副本系统" tabindex="-1"><a class="header-anchor" href="#🎃副本系统" aria-hidden="true">#</a> 🎃副本系统</h3>
<p>敬请期待</p>
<p>*<strong>所有名称、数值均为开发中内容，具体请以游戏正式服为准</strong></p>
<p>*<strong>本服务器与现实没有任何关系，所有设定均为游戏需要，现实请勿模仿</strong></p>
</div></template>


