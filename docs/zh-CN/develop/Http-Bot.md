---
lang: zh-CN
title: 🤖Http-BOT
---
# 🤖Http-BOT


::: warning 编写中页面提醒
本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！
:::

## 为什么开发？

由于目前我的世界的Script-api无法实现诸如文件读写等功能,为此我们特此基于C++开发了`NIA-Http-Bot`用来实现更多功能，从而赋予Script-api更多可能

## 使用前注意事项

1.本项目基于**HTTP**进行通讯，故当前Minecraft版本应当注意启用**minecraft/server-net**模块（该模块只能运行在服务器上）

2.您可以前往**NIASERVER-V4**项目地址的[release](https://github.com/NIANIANKNIA/NIASERVER-V4/releases)下载最新release构建的**NIAHttpBOT.exe**来获取最新版的`NIA-Http-Bot`

3.如果您在使用期间遇到了问题/有建议，您可以前往**NIASERVER-V4**的[issues](https://github.com/NIANIANKNIA/NIASERVER-V4/issues)进行反馈！

4.由于涉及**HTTP**通讯，请在使用过程中注意服务器防火墙设置，以免对服务器安全造成威胁！

## 使用/开发教程

由于**minecraft/server-net**模块在本地存档中无法启用，所以我们应当在本地搭建一个服务器环境用于开发

1.前往我的世界官网[下载BDS](**minecraft/server-net**模块)，并将下好的服务端解压

2.安装行为包

3.修改服务器端文件，来启用net模块：将`config/default/permissions.json`内容改为

```json
{
    "allowed_modules": [
        "@minecraft/server-gametest",
        "@minecraft/server",
        "@minecraft/server-ui",
        "@minecraft/server-admin",
        "@minecraft/server-editor",
        "@minecraft/server-net"
    ]
}

```

即可启用

4.下载最新release构建的**NIAHttpBOT.exe**来获取最新版的`NIA-Http-Bot`

5.开始开发！

## 配置文件

## API一览表

### [GET] `/CheckServer`（开发中）

返回当前`NIAHttpBOT`的状态，多用于检测依赖服务器有没有正常开启

### [GET] `/GetTime`（开发中）

获取当前时间，返回形如"2019-01-28 12:53"的字符串

使用示例

```js
const port = 3000
const reqGetTime = http.get(`http://127.0.0.1:${port}/GetTime`)
    reqServerStarted.then((response) => {
        if (response.status == 200) {
            console.log(response.body)
        } else {
            console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
        }
    })
```


### [POST] `/CheckFile`

检查一个文件是否存在，目标文件存在则返回`true`，不存在则返回`false`

使用示例
```js
const port = 3000
const reqCheckFile = new HttpRequest(`http://127.0.0.1:${port}/CheckFile`);
    reqCheckFile.body = "FileName.json"
    reqCheckFile.method = HttpRequestMethod.POST;
    reqCheckFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqCheckFile).then((response) => {
    if (response.status == 200 && response.body == "true") {
        console.log("Target file exists.")
    } else if (response.status == 200 && response.body == "false") {
        console.error("The target file does not exist")
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/DeleteFile`（开发中）

::: warning 警告
请谨慎使用本API，可能会由于错误删除导致文件无法恢复！
:::

删除一个文件，删除成功返回`success`，删除失败则返回`fail`

使用示例
```js
const port = 3000
const reqDeleteFile = new HttpRequest(`http://127.0.0.1:${port}/DeleteFile`);
    reqDeleteFile.body = "./test/FileName.json"
    reqDeleteFile.method = HttpRequestMethod.POST;
    reqDeleteFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
    http.request(reqDeleteFile).then((response) => {
        if (response.status == 200 && response.body == "success") {
            console.log("Target file deleted successfully!")
        } else {
            console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
        }
    })
```


### [POST] `/CreateNewJsonFile`

创建一个JSON文件，创建成功返回`success`，创建失败则返回`失败原因`

| 失败原因内容 | 对应中文 | 解决办法 |
| :----: | :----: | :----: |
| Data parsing failed | 对象数据解析失败 | 请检查发送的对象数据格式是否正确 |
| Incorrect data format, please recheck and send again. | 错误的数据格式 | 请检查发送的对象数据格式是否同示例一样（包括大小写） |

使用示例

```js
const port = 3000
const reqCreateNewJsonFile = new HttpRequest(`http://127.0.0.1:${port}/CreateNewJsonFile`);
    reqCreateNewJsonFile.body = JSON.stringify({"fileName":"market111.json","fileContent":{"a":10}})
    reqCreateNewJsonFile.method = HttpRequestMethod.POST;
    reqCreateNewJsonFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqCreateNewJsonFile).then((response) => {
    if (response.status == 200 && response.body == "success") {
        console.log("File created successfully!")
    } else if (response.status == 200 && response.body != "success") {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```


### [POST] `/GetJsonFileData`


获取JSON文件数据，获取成功则返回json格式的数据，删除失败则返回`fail`

使用示例
```js
const port = 3000
const reqGetFileData = new HttpRequest(`http://127.0.0.1:${port}/GetFileData`);
    reqGetFileData.body = "./test/FileName.json"
    reqGetFileData.method = HttpRequestMethod.POST;
    reqGetFileData.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
    http.request(reqDeleteFile).then((response) => {
        if (response.status == 200 && response.body != "fail") {
            console.log("Get file data successfully!")
        } else {
            console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
        }
    })
```

### [POST] `/OverwriteJsonFileData`

覆盖JSON文件内容，覆盖成功则返回`success`，覆盖失败则返回`失败原因`

| 失败原因内容 | 对应中文 | 解决办法 |
| :----: | :----: | :----: |
| Data parsing failed | 对象数据解析失败 | 请检查发送的对象数据格式是否正确 |
| Incorrect data format, please recheck and send again. | 错误的数据格式 | 请检查发送的对象数据格式是否同示例一样（包括大小写） |

使用示例
```js
const port = 3000
const reqOverwriteJsonFile = new HttpRequest(`http://127.0.0.1:${port}/OverwriteJsonFile`);
    reqOverwriteJsonFile.body = JSON.stringify({"fileName":"FileName.json","fileData":{"a":"呵呵呵呵"}})
    reqOverwriteJsonFile.method = HttpRequestMethod.POST;
    reqOverwriteJsonFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqOverwriteJsonFile).then((response) => {
    if (response.status == 200 && response.body == "success") {
        console.log("Overwrite file data successfully!")
    } else if (response.status == 200 && response.body != "success") {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/RunCMD`(开发中)

执行cmd命令

::: warning 警告
由于API涉及服务器安全性问题，本功能默认关闭，请在确定做好准备的条件下修改配置文件后启用本功能！
:::

### [POST] `/WriteLineToFile`（开发中）

向目标文件写入一行内容

### [POST] `/DeleteLineFromFile`（开发中）

向目标文件删除一行内容

### [POST] `/OverwriteFileData`（开发中）

覆盖文件内容

### [POST] `/CheckDir`（开发中）

检查目标文件夹是否存在

### [POST] `/CreateDir`（开发中）

创建一个文件夹