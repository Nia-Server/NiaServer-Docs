---
lang: zh-CN
title: ⛳生成空岛
---
# ⛳使用Gametest生成空岛

::: warning 编写中页面提醒
本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！
:::

::: warning 注意游戏版本
由于Gametest官方的API一直属于测试阶段，可能会随时更改，以下脚本格式仅仅保证在正式版1.19.5上可以正常使用！
:::


### ❓什么是Gametest？

[Gametest又称为“游戏测试框架”](https://learn.microsoft.com/zh-cn/minecraft/creator/documents/gametestgettingstarted)，你可以编写一些简单的 JavaScript 代码，构建属于自己的游戏测试，从而基于原版我的世界基岩版实现一些原来所不能实现的功能！

目前Mojang官方已经提供了一定数量的[API](https://learn.microsoft.com/zh-cn/minecraft/creator/scriptapi/)，已经足够我们实现一些有意思的事情。

### 🚃开始编写脚本开始生成空岛吧！

首先我们要在游戏中添加一个名为`IslandDate`的计分板，**并且添加一个名为`num`的虚拟对象并将其的值设定为1**！

这里的`IslandDate`计分板是用于存储空岛相关数据的一个积分板，其中`num`为当前空岛的数量。

然后这里为了方便后续的编写，我自定义了几个函数。

```js
//一些自定义函数

/**
 * 将Msg消息广播至整个游戏
 * @param {string} Msg
 */
function Broadcast(Msg) {
    world.getDimension("overworld").runCommandAsync(`tellraw @a {\"rawtext\":[{\"text\":\"${Msg}\"}]}`);
}

/**
 * 将Msg消息发送至名为PlayerName的玩家
 * @param {string} Msg
 * @param {string} PlayerName
 */
function Tell(Msg,PlayerName) {
    world.getDimension("overworld").runCommandAsync(`tellraw @a[name=${PlayerName}] {\"rawtext\":[{\"text\":\"${Msg}\"}]}`);
}

/**
 * 运行指令
 * @param {string} Cmd
 */
function RunCmd(Cmd) {
    world.getDimension("overworld").runCommandAsync(`${Cmd}`);
}
```

我这里生成的空岛是以坐标(cX,cY,cZ)为圆心，空岛按照一个个同心圆排列，每个空岛在该圆上的距离相等，从而最大限度的利用了空间。

以下的脚本我基本注释已经做的很清楚了，请自行查看。

```js
//定义一些常数
const R = 100;  //空岛间距/初始半径
const CX = 0;
const CY = 50;
const CZ = 0;

//自定义函数
function CaculatePos(playerName,cX,cY,cZ) {
    //这里首先取得IslandDate计分板下所有计分项名称
    let Participants = world.scoreboard.getObjective("IslandDate").getParticipants()
    //这里使用一个循环遍历所有计分项
    for (let i = 0; i < Participants.length; i++) {
        //直到计分项名称为num时才执行if里的语句
        if (Participants[i].displayName == "num") {
            //读取计分项num的值，并赋值给变量num
            let num = world.scoreboard.getObjective("IslandDate").getScore(Participants[i]);
            //赋值变量Allnum r
            let AllNum = 0;
            let r = 0;
            //这里说判断该空岛应该在第几个圆圈上
            do {
                r = r + R;
                AllNum = parseInt(2 * Math.PI * r / R) + AllNum;
                //调试语句（25-27），可以删掉
                if (num <= AllNum){
                    Broadcast(`§7AllNum：${AllNum} 此时的半径：${r}`);
                }
            } while (num > AllNum);
            //计算该空岛在本圆圈上的第几个位置上
            let pos = parseInt(2 * Math.PI * r / R) - AllNum + num
            //根据位置计算相应的X,Z坐标
            let posX = parseInt(Math.cos(pos * 2 * Math.PI / (parseInt(2 * Math.PI * r / R))) * r) + cX;
            let posZ = -parseInt(Math.sin(pos * 2 * Math.PI / (parseInt(2 * Math.PI * r / R))) * r) + cZ;
            //调试语句（35），可以删掉
            Broadcast(`§7num的值为：${num} pos的值为：${pos} posX的值为：${posX} posZ的值为：${posZ}`);
            //底下的语句就可以按照自己的需求进行更改了，毕竟XZ坐标已经算出来了，我这里的仅供参考
            //这里是加载名为island1的结构至计算的坐标
            RunCmd(`structure load mystructure:island1 ${posX} ${cY} ${posZ}`);
            //然后把玩家传送过去
            RunCmd(`tp @a[name=${playerName}] ${posX} ${cY + 15} ${posZ}`);
            //最后给空岛数量加一
            RunCmd("scoreboard players add num IslandDate 1");
            //结束整个循环
            break;
        }
    }
}
```

至此，空岛生成就结束了，你可以按照自己的需求更改相应的脚本语段，从而实现更多有意思的功能！