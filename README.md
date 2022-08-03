# Bootstrap Landing Page Example

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">

Bootstrap官方網站：[https://getbootstrap.com/](https://getbootstrap.com/)

## 安裝部署工具 [surge](https://surge.sh)

### 1. 取得並安裝 node.js

進入[node.js官方網站](https://nodejs.org/en/)下載LTS版本，並執行安裝程序。

### 2. Windows Powershell 執行原則變更

此步驟僅Windows系統使用者需要設定。

點選視窗左下角搜尋 Powershell，尋找到後按下「右鍵」->「以系統管理員開啟」。

查詢系統的執行政策

```shell
Get-ExecutionPolicy
```

將執行政策修改為RemoteSigned
```shell
Set-ExecutionPolicy RemoteSigned
```

### 3. 透過npm安裝surge

#### Windows:

```shell
npm i -g surge
```

#### MacOS:

```shell
sudo npm i -g surge
```

## 部署網站至 [surge](https://surge.sh)

部署網站至surge

```shell
surge
```
