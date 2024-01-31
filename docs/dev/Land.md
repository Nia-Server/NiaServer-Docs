---
lang: zh-CN
title: 🛖圈地系统使用说明
---
# 🛖圈地系统使用说明

::: info 提示
圈地系统依赖于[NIAHttpBOT](Http-Bot.md),在使用圈地系统之前请先阅读[NIAHttpBOT使用说明](Http-Bot.md)，设置好NIAHttpBOT的配置文件。
:::

## 圈地系统特性

- 支持多种圈地模式（2D/3D圈地）
- 圈地全程可视化操作
- 圈地系统独有交易市场
- 可自由配置领地内权限
- 管理员便捷管理领地

## 配置文件

```json
{
    //领地系统性能部分配置
    //领地计算索引值基准距离
    //为了保证服务器的流畅运行,DISTANSE参数应满足：DISTANSE * DISTANCE 等于或稍稍小于 MAX_SQUARE，否则可能会导致插件包运行超时而引发“hang”报错
    "DISTANCE" = 100,
    //领地系统基础配置
    //单人最多圈地数量
    "MAX_LAND_NUM" = 5,
    //2d/3d领地最大面积(两者均只计算xz平面所占面积)
    "MAX_SQUARE" = 10000,
    //2d/3d领地最小面积(两者均只计算xz平面所占面积)
    "MIN_SQUARE" = 100,
    //领地价格计算指数
    //2d领地单面积价格
    "PRICE_2D" = 300,
    //3d领地单块价格
    "PRICE_3D" = 3,
    //坐标限制范围
    "X_RANGE" = [-100000,100000],
    "Y_RANGE" = [-64,256],
    "Z_RANGE" = [-100000,100000],
    //金币计分板名称
    "MONEY_SCOREBOARD_NAME" = "money",
    "MONEY_SCOREBOARD_DISPLAY_NAME" = "金币"
}
```


