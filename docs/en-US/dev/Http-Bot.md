---
lang: en-US
title: 🤖Http-BOT
---
# 🤖Http-BOT

::: warning version prompt
All the APIs below are based on the latest build (see RELEASE below)
:::

[![Latest Release](https://img.shields.io/github/v/release/NIANIANKNIA/NiaServer-Core?include_prereleases&style=for-the-badge)](https://github.com/NIANIANKNIA/NiaServer-Core/releases/)


## Why develop?

Since the current Minecraft Script-api cannot implement functions such as file reading and writing, we hereby developed `NIA-Http-Bot` based on C++ to achieve more functions, thus giving Script-api more possibilities

## Precautions before use

1. This project communicates based on **HTTP**, so the current Minecraft version should pay attention to enable the **minecraft/server-net** module (this module can only run on the server)

2. You can go to the [release](https://github.com/NIANIANKNIA/NiaServer-Core/releases) of the **NiaServer-Core** project address to download the **NIAHttpBOT.exe** built by the latest release to get the latest version of `NIA-Http-Bot`

3. If you encounter problems/have suggestions during use, you can go to [issues](https://github.com/NIANIANKNIA/NiaServer-Core/issues) of **NiaServer-Core** to give feedback!

4. Since it involves **HTTP** communication, please pay attention to the server firewall settings during use, so as not to pose a threat to server security!

## Usage/Development Tutorial

Since the **minecraft/server-net** module cannot be enabled in the local archive, we should build a server environment locally for development

1. Go to the official website of Minecraft [Download BDS](https://www.minecraft.net/en-us/download/server/bedrock), and unzip the downloaded server

2. Install the behavior package

3. Modify the server-side file to enable the net module: change the content of `config/default/permissions.json` to

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

to enable

4. Download **NIAHttpBOT.exe** built by the latest release to get the latest version of `NIA-Http-Bot`

5. Start developing!

## configuration file

```cfg
# ip address, generally do not need to change
IPAddress = "127.0.0.1"

# Port, which must be consistent with the behavior package port
Port = 10086

#Whether to enable the DOS command function
UseCmd = false

```

## API

### [GET] `/CheckServer` (under development, not online)

Return the current status of `NIAHttpBOT`, mostly used to detect whether the dependent server is normally enabled

### [GET] `/GetTime` (under development, not online)

Get the current time and return a string like "2019-01-28 12:53"

Example of use

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

### [POST] `/RunCmd`

Execute DOS commands

::: warning warning
Since the API involves server security issues, this function is disabled by default. Please enable this function after modifying the configuration file under the condition that you are sure you are ready!
:::

Functions that can be realized:

- [Create Folder](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mkdir)
- [Delete file](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/del)
- [Display a line of output to NIAHttpBOT](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/echo)

For more DOS commands, please go to [Microsoft Official Documentation Site](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)

Example of use

```js
const port = 3000
const reqRunCmd = new HttpRequest(`http://127.0.0.1:${port}/RunCmd`);
    reqRunCmd.body = "del 123.txt"
    reqRunCmd.method = HttpRequestMethod.Post;
    reqRunCmd.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqRunCmd).then((response) => {
    if (response.status == 200) {
        console.log("Dos command executed successfully!")
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/CheckFile`

Checks whether a file exists. If the target file exists, it returns `true` with a status code of `200`. If it does not exist, it returns `false` with a status code of `400`

Example of use

```js
const port = 3000
const reqCheckFile = new HttpRequest(`http://127.0.0.1:${port}/CheckFile`);
    reqCheckFile.body = "FileName.json"
    reqCheckFile.method = HttpRequestMethod.Post;
    reqCheckFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqCheckFile).then((response) => {
    if (response.status == 200) {
        console.log("Target file exists.")
    } else if (response.status == 400) {
        console.error("The target file does not exist")
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/CheckDir`

Check if the target folder exists, if the target folder exists, return `true`, the status code is `200`, if it does not exist, return `false`, the status code is `400`

Example of use

```js
const port = 3000
const reqCheckDir = new HttpRequest(`http://127.0.0.1:${port}/CheckDir`);
    reqCheckDir.body = "./A"
    reqCheckDir.method = HttpRequestMethod.Post;
    reqCheckDir.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqCheckDir).then((response) => {
    if (response.status == 200) {
        console.log("Target folder exists.")
    } else if (response.status == 400) {
        console.error("The target folder does not exist")
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/CreateNewFile`

Create a file, if the creation is successful, return `success`, the status code is `200`, if the creation fails, return `failure reason`, the status code is `400`


Example of use

```js
const port = 3000
const reqCreateNewFile = new HttpRequest(`http://127.0.0.1:${port}/CreateNewFile`);
    reqCreateNewFile.body = JSON.stringify({"fileName":"test.txt","content":"这是第一行\n这是第二行"})
    reqCreateNewFile.method = HttpRequestMethod.Post;
    reqCreateNewFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqCreateNewFile).then((response) => {
    if (response.status == 200) {
        console.log("File created successfully!")
    } else if (response.status == 400) {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/CreateNewJsonFile`

Create a JSON file and return `success` with a status code of `200` if the creation is successful, or return `failure reason` with a status code of `400` if the creation fails

Example of use

```js
const port = 3000
const reqCreateNewJsonFile = new HttpRequest(`http://127.0.0.1:${port}/CreateNewJsonFile`);
    reqCreateNewJsonFile.body = JSON.stringify({"fileName":"market111.json","content":{"a":10}})
    reqCreateNewJsonFile.method = HttpRequestMethod.Post;
    reqCreateNewJsonFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqCreateNewJsonFile).then((response) => {
    if (response.status == 200) {
        console.log("File created successfully!")
    } else if (response.status == 400) {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/GetFileData`

Get the file data, return the file data (the type is a string) if the acquisition is successful, the status code is `200`, if the acquisition fails, return `fail`, the status code is `400`

Example of use

```js
const port = 3000
const reqGetFileData = new HttpRequest(`http://127.0.0.1:${port}/GetFileData`);
    reqGetFileData.body = "text.txt"
    reqGetFileData.method = HttpRequestMethod.Post;
    reqGetFileData.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqGetFileData).then((response) => {
    if (response.status == 200) {
        console.log("Get file data successfully! File data:" + response.body)
    } else if (response.status == 400) {
        console.error("The target file does not exist")
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/GetJsonFileData`

Obtain JSON file data, if the acquisition is successful, return the data in json format, the status code is `200`, if the acquisition fails, return `fail`, the status code is `400`

Example of use

```js
const port = 3000
const reqGetJsonFileData = new HttpRequest(`http://127.0.0.1:${port}/GetJsonFileData`);
    reqGetJsonFileData.body = "market.json"
    reqGetJsonFileData.method = HttpRequestMethod.Post;
    reqGetJsonFileData.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqGetJsonFileData).then((response) => {
    if (response.status == 200) {
        console.log("Get file data successfully! File data:" + response.body)
    } else if (response.status == 400) {
        console.error("The target file does not exist")
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/OverwriteFile`

Overwrite the content of the file. If the overwrite is successful, it will return `success` with a status code of `200`. If the overwrite fails, it will return `failure reason` with a status code of `400`

Example of use

```js
const port = 3000
const reqOverwriteFile = new HttpRequest(`http://127.0.0.1:${port}/OverwriteFile`);
    reqOverwriteFile.body = JSON.stringify({"fileName":"FileName.txt","content": "这是第一行\n这是第二行"})
    reqOverwriteFile.method = HttpRequestMethod.Post;
    reqOverwriteFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqOverwriteFile).then((response) => {
    if (response.status == 200) {
        console.log("Overwrite file data successfully!")
    } else if (response.status == 400) {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/OverwriteJsonFile`

Overwrite the content of the JSON file. If the overwrite is successful, it will return `success` with a status code of `200`. If the overwrite fails, it will return `failure reason` with a status code of `200`

Example of use

```js
const port = 3000
const reqOverwriteJsonFile = new HttpRequest(`http://127.0.0.1:${port}/OverwriteJsonFile`);
    reqOverwriteJsonFile.body = JSON.stringify({"fileName":"FileName.json","content":{"a":"呵呵呵呵"}})
    reqOverwriteJsonFile.method = HttpRequestMethod.Post;
    reqOverwriteJsonFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqOverwriteJsonFile).then((response) => {
    if (response.status == 200) {
        console.log("Overwrite file data successfully!")
    } else if (response.status == 400) {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

### [POST] `/WriteLineToFile`

Write a line of content to the target file at the end, if successful, return `success` with status code `200`, if failed, return `failure reason`, status code is `400`

** Pay attention to adding a newline character(\n), otherwise there will be no newline! **

Example of use

```js
const port = 3000
const reqWriteLineToFile = new HttpRequest(`http://127.0.0.1:${port}/WriteLineToFile`);
    reqWriteLineToFile.body = JSON.stringify({"fileName":"123.txt","content": "这是一行测试内容" + "\n"})
    reqWriteLineToFile.method = HttpRequestMethod.Post;
    reqWriteLineToFile.headers = [
        new HttpHeader("Content-Type", "text/plain"),
    ];
http.request(reqWriteLineToFile).then((response) => {
    if (response.status == 200) {
        console.log("Overwrite file data successfully!")
    } else if (response.status == 400) {
        console.error(response.body)
    } else {
        console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
    }
})
```

## Example of use

**Suggested method**

Create the `./API/filesystem.js` file with the following content

(Currently written some commonly used functions, more functions will be updated later)

[Click to download sample file](https://github.com/NIANIANKNIA/NiaServer-Core/blob/dev/development_behavior_packs/NIA_V4.0_BP/scripts/API/filesystem.js)

```js
import {http,HttpRequestMethod,HttpRequest,HttpHeader} from '@minecraft/server-net';

const port = 10086
const server_url = "http://127.0.0.1"

export class ExternalFS {

    /**
     * @function Execute DOS command
     * @param {String} cmd
     * @return {String | Number} returns success if the acquisition is successful, and returns -1 if the server connection fails
     */
    RunCmd(cmd) {
        const reqRunCmd = new HttpRequest(`${server_url}:${port}/RunCmd`)
        .setBody(cmd)
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain");
        return new Promise(async (resolve) => {
            const response = await http.request(reqRunCmd);
            if (response.status == 200) {
                resolve(response.body);
            } else {
                resolve(-1);
            }
        })
    }

    /**
     * @function Get file content
     * @param {String} filename
     * @return {String | Number} returns the file data successfully, returns 0 if the file does not exist, returns -1 if the server connection fails
     */
    GetFileData(filename) {
        const reqGetFileData = new HttpRequest(`${server_url}:${port}/GetFileData`)
        .setBody(filename)
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain");
        return new Promise(async (resolve) => {
            const response = await http.request(reqGetFileData);
            if (response.status == 200) {
                resolve(JSON.parse(response.body));
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        })
    }

    /**
     * @function Get the content of the json file
     * @param {String} filename
     * @return {Object | Number} returns json data successfully, returns 0 if the file does not exist, returns -1 if the server connection fails
     */
    GetJSONFileData(filename) {
        const reqGetJsonFileData = new HttpRequest(`${server_url}:${port}/GetJsonFileData`)
        .setBody(filename)
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain");
        return new Promise(async (resolve) => {
            const response = await http.request(reqGetJsonFileData);
            if (response.status == 200) {
                resolve(JSON.parse(response.body));
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        })
    }

    /**
     * @function Create new file
     * @param {String} filename
     * @param {String} filecontent
     * @return {String | Number} Successful creation returns success, creation failure returns 0, server connection failure returns -1
     */
    CreateNewFile(filename,filecontent) {
        const reqCreateNewFile = new HttpRequest(`${server_url}:${port}/CreateNewFile`)
        .setBody(JSON.stringify({"fileName":filename,"content":filecontent}))
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain")
        return new Promise(async (resolve) => {
            const response = await http.request(reqCreateNewFile);
            if (response.status == 200) {
                resolve(response.body);
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        });
    }

    /**
     * @function Create new json file
     * @param {String} filename
     * @param {Object} filecontent
     * @return {String | Number} Successful creation returns success, creation failure returns 0, server connection failure returns -1
     */
    CreateNewJsonFile(filename,filecontent) {
        const reqCreateNewJsonFile = new HttpRequest(`${server_url}:${port}/CreateNewJsonFile`)
        .setBody(JSON.stringify({"fileName":filename,"content":filecontent}))
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain")
        return new Promise(async (resolve) => {
            const response = await http.request(reqCreateNewJsonFile);
            if (response.status == 200) {
                resolve(response.body);
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        });
    }

    /**
     * @function Overwrite file
     * @param {String} filename
     * @param {String} filecontent
     * @return {String | Number} Successful overwrite returns success, overwrite failure returns 0, server connection failure returns -1
     */
    OverwriteFile(filename,filecontent) {
        const reqOverwriteFile = new HttpRequest(`${server_url}:${port}/OverwriteFile`)
        .setBody(JSON.stringify({"fileName":filename,"content":filecontent}))
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain");
        return new Promise(async (resolve) => {
            const response = await http.request(reqOverwriteFile);
            if (response.status == 200) {
                resolve(response.body);
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        })
    }

    /**
     * @function Overwrite json file
     * @param {String} filename
     * @param {Object} filecontent
     * @return {String | Number} Successful overwrite returns success, overwrite failure returns 0, server connection failure returns -1
     */
    OverwriteJsonFile(filename,filecontent) {
        const reqOverwriteJsonFile = new HttpRequest(`${server_url}:${port}/OverwriteJsonFile`)
        .setBody(JSON.stringify({"fileName":filename,"content":filecontent}))
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain");
        return new Promise(async (resolve) => {
            const response = await http.request(reqOverwriteJsonFile);
            if (response.status == 200) {
                resolve(response.body);
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        })
    }

    /**
     * @function Write a line to a specific file
     * @param {String} filename
     * @param {String} filecontent
     * @return {String | Number} If the write is successful, it will return success, if the overwrite fails, it will return 0, and if the server connection fails, it will return -1
     */
    WriteLineToFile(filename,filecontent) {
        const reqWriteLineToFile = new HttpRequest(`${server_url}:${port}/WriteLineToFile`)
        .setBody(JSON.stringify({"fileName":filename,"content":filecontent}))
        .setMethod(HttpRequestMethod.Post)
        .addHeader("Content-Type", "text/plain");
        return new Promise(async (resolve) => {
            const response = await http.request(reqWriteLineToFile);
            if (response.status == 200) {
                resolve(response.body);
            } else if (response.status == 400) {
                resolve(0);
            } else {
                resolve(-1);
            }
        })
    }
}
```

Then we can call it directly without repeatedly writing

Call example (intercepted from part of the code of the player trading market)

```js
import { world } from '@minecraft/server';
import { ExternalFS } from './API/filesystem';

const fs = new ExternalFS();
const port = 10086
var MarketData = [-1]


world.afterEvents.worldInitialize.subscribe(() => {
    fs.getJSONFileData("market.json").then((result) => {
        if (result === 0) {
            fs.CreateNewJsonFile("market.json",[]).then((result) => {
                if (result === "success") {
                    MarketData = [];
                    console.log("玩家市场文件不存在，已成功创建！");
                } else if (result === -1) {
                    console.error("依赖服务器连接失败！请检查依赖服务器是否成功启动，以及端口是否设置正确！");
                }
            });
        } else if (result === -1) {
            console.error("依赖服务器连接失败！请检查依赖服务器是否成功启动，以及端口是否设置正确！");
        } else {
            MarketData = result;
            console.log("玩家市场数据获取成功！")
        }
    })
})
```