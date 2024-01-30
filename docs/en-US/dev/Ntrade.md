---
lang: en-US
title: 📦Ntrade tutorial
---

# 📦Ntrade usage tutorial

::: warning Ntrade has stopped maintenance and no longer provides any technical support. Please try not to use this plug-in. The project has been replaced by market.js in the script-api-based plug-in NiaServer-Core!
:::

### Plugin function

A plugin for interplayer transactions

### Initialize the plugin

1. Configure the corresponding BDS server and install [LiteLoader](https://github.com/LiteLDev/LiteLoaderBDS).

2. Download the latest version of [Ntrade](https://github.com/NIANIANKNIA/Ntrade/releases).

3. Place the **Ntrade.lxl.js** in the extracted package under the flugins folder in the BDS root directory

4. Launch the **bedrock_server_mod.exe**, and the plugin will automatically generate the corresponding configuration file

### Modify the configuration file

Please refer to the following to modify the configuration file

Configuration file location: `plugins/Ntrade/config.json`

```json
{
    "MarketID": 1, //Market ID, do not change under normal circumstances
    "llmoney": 0, // whether to enable llmoney economy, 0 (false) is not enabled, 1 (true) is enabled
    "MoneyScoresBoardName": "money", // If for scoreboard economy, the corresponding scoreboard name
    "Password": "123456", //Remove Authorization Code
    "BanItems": [
        {
            "type": "minecraft:clock", //prohibited item id
            "aux": -1 // Prohibited items with special values (-1 means no restriction on special values)
        }
    ],
    "language": "en_US", //the main language of the plugin, en_US is English and zh_CN is Chinese
    "AutoOffShelfTime": 72, // Automatic removal time (in hours), set to -1 will not automatically take off the shelves
    "TaxRate": 0 // Transfer tax rate, set to 0 will not charge a fee, if necessary, please change to any number of [0,1) by yourself
}
```

### Get started

1. After modifying the configuration file, you can use it after opening the service

2. Enter the /trade command in the server to open the GUI and perform the corresponding operation

3. You can enter the /opentradegui @p open the marketplace GUI to the nearest player
