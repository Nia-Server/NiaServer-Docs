---
lang: zh-CN
title: 🤖Http-BOT
---
# 🤖Http-BOT


::: warning 编写中页面提醒
本页面仍处于编写状态中，内容可能不全面，会对阅读造成一定的影响！
:::

### 为什么开发？

由于目前我的世界的Script-api无法实现诸如文件读写等功能,为此我们特此基于C++开发了`NIA-Http-Bot`用来实现更多功能，从而赋予Script-api更多可能

### API

#### GET-API

##### 获取当前时间

`/GetTime`

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

#### POST-API

##### 创建一个文件

`/CreateNewFile`

创建成功返回`success`，创建失败则返回`fail`

使用示例
```js
const port = 3000
const reqCreateNewFile = new HttpRequest(`http://127.0.0.1:${port}/CreateNewFile`);
    reqCreateNewFile.body = "NewFileName.json"
    reqCreateNewFile.method = HttpRequestMethod.POST;
    reqCreateNewFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
    http.request(reqCreateNewFile).then((response) => {
        if (response.status == 200 && response.body == "success") {
            console.log("File created successfully!")
        } else {
            console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
        }
    })
```

##### 检查一个文件是否存在

`/CheckFile`

目标文件存在则返回`true`，不存在则返回`false`

使用示例
```js
const port = 3000
const reqCheckFile = new HttpRequest(`http://127.0.0.1:${port}/CheckFile`);
    reqCheckFile.body = "./test/FileName.json"
    reqCheckFile.method = HttpRequestMethod.POST;
    reqCheckFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
    http.request(reqCheckFile).then((response) => {
        if (response.status == 200 && response.body == "true") {
            console.log("Target file exists.")
        } else {
            console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
        }
    })
```

##### 删除一个文件

`/DeleteFile`

删除成功返回`success`，删除失败则返回`fail`

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

##### 获取文件数据(目前仅支持json)

`/GetFileData`

获取成功则返回json格式的数据，删除失败则返回`fail`

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

##### 覆盖文件内容

`/OverwriteFileData`

覆盖成功则返回`success`，覆盖失败则返回`fail`

使用示例
```js
const port = 3000
const reqOverwriteFileData = new HttpRequest(`http://127.0.0.1:${port}/OverwriteFileData`);
    reqOverwriteFileData.body = JSON.stringify({"file":"./test/FileName.json","fileData":{"a":"b"}})
    reqOverwriteFileData.method = HttpRequestMethod.POST;
    reqOverwriteFileData.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
    http.request(reqDeleteFile).then((response) => {
        if (response.status == 200 && response.body != "fail") {
            console.log("Overwrite file data successfully!")
        } else {
            console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
        }
    })
```

##### 向目标文件写入一行内容

开发中内容!