---
lang: en-US
title: 🤖Http-BOT
---
# 🤖Http-BOT



## Why develop?

Since the current Minecraft Script-api cannot implement functions such as file reading and writing, we hereby developed `NIA-Http-Bot` based on C++ to achieve more functions, thus giving Script-api more possibilities

## Precautions before use

1. This project communicates based on **HTTP**, so the current Minecraft version should pay attention to enable the **minecraft/server-net** module (this module can only run on the server)

2. You can go to the [release](https://github.com/NIANIANKNIA/NIASERVER-V4/releases) of the **NIASERVER-V4** project address to download the **NIAHttpBOT.exe** built by the latest release to get the latest version of `NIA-Http-Bot`

3. If you encounter problems/have suggestions during use, you can go to [issues](https://github.com/NIANIANKNIA/NIASERVER-V4/issues) of **NIASERVER-V4** to give feedback!

4. Since it involves **HTTP** communication, please pay attention to the server firewall settings during use, so as not to pose a threat to server security!

## Usage/Development Tutorial

Since the **minecraft/server-net** module cannot be enabled in the local archive, we should build a server environment locally for development

1. Go to the official website of Minecraft [Download BDS] (**minecraft/server-net** module), and unzip the downloaded server

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

### [GET] `/CheckServer` (under development)

Return the current status of `NIAHttpBOT`, mostly used to detect whether the dependent server is normally enabled

### [GET] `/GetTime` (under development)

Get the current time and return a string like "2019-01-28 12:53"

Example of use

```js
const port = 3000
const reqGetTime = http.get(`http://127.0.0.1:${port}/GetTime`)
reqServerStarted. then((response) => {
     if (response. status == 200) {
         console. log(response. body)
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
     reqRunCmd.method = HttpRequestMethod.POST;
     reqRunCmd. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqRunCmd).then((response) => {
     if (response.status == 200 && response.body == "success") {
         console.log("Dos command executed successfully!")
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```


### [POST] `/CheckFile`

Checks whether a file exists, returns `true` if the target file exists, and `false` if it does not exist

Example of use

```js
const port = 3000
const reqCheckFile = new HttpRequest(`http://127.0.0.1:${port}/CheckFile`);
     reqCheckFile.body = "FileName.json"
     reqCheckFile.method = HttpRequestMethod.POST;
     reqCheckFile. headers = [
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

### [POST] `/CheckDir`

Check if the target folder exists, return `true` if the target folder exists, and `false` if it does not exist

Example of use

```js
const port = 3000
const reqCheckDir = new HttpRequest(`http://127.0.0.1:${port}/CheckDir`);
     reqCheckDir. body = "./A"
     reqCheckDir.method = HttpRequestMethod.POST;
     reqCheckDir.headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqCheckDir).then((response) => {
     if (response.status == 200 && response.body == "true") {
         console.log("Target folder exists.")
     } else if (response.status == 200 && response.body == "false") {
         console.error("The target folder does not exist")
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```

### [POST] `/CreateNewFile`

Create a file, return `success` if the creation is successful, and `failure reason` if the creation fails

| Failure reason content | Solution |
| :----: | :----: |
| Data parsing failed | Please check whether the format of the sent object data is correct |
| Incorrect data format, please recheck and send again. | Please check whether the sent object data format is the same as the example (including capitalization) |

Example of use

```js
const port = 3000
const reqCreateNewFile = new HttpRequest(`http://127.0.0.1:${port}/CreateNewFile`);
     reqCreateNewFile.body = JSON.stringify({"fileName":"test.txt","content":"This is the first line\nThis is the second line"})
     reqCreateNewFile.method = HttpRequestMethod.POST;
     reqCreateNewFile. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqCreateNewFile).then((response) => {
     if (response.status == 200 && response.body == "success") {
         console.log("File created successfully!")
     } else if (response.status == 200 && response.body != "success") {
         console. error(response. body)
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```



### [POST] `/CreateNewJsonFile`

Create a JSON file, return `success` if the creation is successful, and return `failure reason` if the creation fails

| Failure reason content | Solution |
| :----: | :----: |
| Data parsing failed | Please check whether the format of the sent object data is correct |
| Incorrect data format, please recheck and send again. | Please check whether the sent object data format is the same as the example (including capitalization) |

Example of use

```js
const port = 3000
const reqCreateNewJsonFile = new HttpRequest(`http://127.0.0.1:${port}/CreateNewJsonFile`);
     reqCreateNewJsonFile.body = JSON.stringify({"fileName":"market111.json","fileContent":{"a":10}})
     reqCreateNewJsonFile.method = HttpRequestMethod.POST;
     reqCreateNewJsonFile. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqCreateNewJsonFile).then((response) => {
     if (response.status == 200 && response.body == "success") {
         console.log("File created successfully!")
     } else if (response. status == 200 && response.body != "success") {
         console. error(response. body)
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```


### [POST] `/GetJsonFileData`


Obtain JSON file data, return the data in json format if the acquisition is successful, return `fail` if the deletion fails

Example of use
```js
const port = 3000
const reqGetJsonFileData = new HttpRequest(`http://127.0.0.1:${port}/GetJsonFileData`);
     reqGetJsonFileData.body = "market.json"
     reqGetJsonFileData.method = HttpRequestMethod.POST;
     reqGetJsonFileData. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqGetJsonFileData).then((response) => {
     if (response.status == 200 && response.body != "The target file does not exist") {
         console.log("Get file data successfully! File data:" + response.body)
     } else if (response.status == 200 && response.body == "The target file does not exist") {
         console.error("The target file does not exist")
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```

### [POST] `/OverwriteFile`

Overwrite the file content, return `success` if the overwrite is successful, and `failure reason` if the overwrite fails

| Failure reason content | Solution |
| :----: | :----: |
| Data parsing failed | Please check whether the format of the sent object data is correct |
| Incorrect data format, please recheck and send again. | Please check whether the sent object data format is the same as the example (including capitalization) |

Example of use
```js
const port = 3000
const reqOverwriteFile = new HttpRequest(`http://127.0.0.1:${port}/OverwriteFile`);
     reqOverwriteFile.body = JSON.stringify({"fileName":"FileName.txt","content": "This is the first line\nThis is the second line"})
     reqOverwriteFile.method = HttpRequestMethod.POST;
     reqOverwriteFile. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqOverwriteJsonFile).then((response) => {
     if (response.status == 200 && response.body == "success") {
         console.log("Overwrite file data successfully!")
     } else if (response.status == 200 && response.body != "success") {
         console. error(response. body)
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```

### [POST] `/OverwriteJsonFile`

Overwrite the content of the JSON file, return `success` if the overwrite is successful, and return `failure reason` if the overwrite fails

| Failure reason content | Solution |
| :----: | :----: |
| Data parsing failed | Please check whether the format of the sent object data is correct |
| Incorrect data format, please recheck and send again. | Please check whether the sent object data format is the same as the example (including capitalization) |

Example of use
```js
const port = 3000
const reqOverwriteJsonFile = new HttpRequest(`http://127.0.0.1:${port}/OverwriteJsonFile`);
     reqOverwriteJsonFile.body = JSON.stringify({"fileName":"FileName.json","fileData":{"a":"hehehehe"}})
     reqOverwriteJsonFile.method = HttpRequestMethod.POST;
     reqOverwriteJsonFile. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqOverwriteJsonFile).then((response) => {
     if (response.status == 200 && response.body == "success") {
         console.log("Overwrite file data successfully!")
     } else if (response.status == 200 && response.body != "success") {
         console. error(response. body)
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```



### [POST] `/WriteLineToFile`

Write a line of content to the target file at the end, return `success` if successful, return `failure reason` if failed

| Failure reason content | Solution |
| :----: | :----: |
| Data parsing failed | Please check whether the format of the sent object data is correct |
| Incorrect data format, please recheck and send again. | Please check whether the sent object data format is the same as the example (including capitalization) |

** Pay attention to adding a newline character, otherwise there will be no newline! **

Example of use
```js
const port = 3000
const reqWriteLineToFile = new HttpRequest(`http://127.0.0.1:${port}/WriteLineToFile`);
     reqWriteLineToFile.body = JSON.stringify({"fileName":"123.txt","content": "This is a line of test content" + "\n"})
     reqWriteLineToFile.method = HttpRequestMethod.POST;
     reqWriteLineToFile. headers = [
         new HttpHeader("Content-Type", "text/plain"),
     ];
http.request(reqWriteLineToFile).then((response) => {
     if (response.status == 200 && response.body == "success") {
         console.log("Overwrite file data successfully!")
     } else if (response.status == 200 && response.body != "success") {
         console. error(response. body)
     } else {
         console.error("Dependent server connection failed! Check whether the dependent server started successfully.")
     }
})
```
## Usage example

[Player trading market (under construction)](https://github.com/NIANIANKNIA/NIASERVER-V4/blob/dev/development_behavior_packs/NIA_V4.0_BP/scripts/market.js)

