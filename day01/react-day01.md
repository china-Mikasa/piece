# react框架第一天学习

### 项目安装

- npm install -g create-react-app 全局进行安装
- create-react-app   项目名     创建react项目
- yarn start 运行
- yarn build 打包



### 项目目录

![文件目录](C:\Users\Mikasa\Desktop\react学习\day01\文件目录.png)

- yarn.lock：     项目依赖的安装包版本号会在这里做一些限制。
- README.md:		关于项目的说明文件
- package.json：        配置文件，第三方包管理工具
- gitgnore：     如果项目是用git管理的，有些文件不想上传到git仓库里，可以把文件定义到该文件中
- src： 核心目录
  - index.js：整个程序的入口文件
  - registerServiceWorker.js ：(pwa)用户第一次访问网页需要联网，下次即使断网，也依然可以显示。
  - App.test.js：项目测试文件。
- public:      公开的文件
  - favicon.ico：  项目图标，可以自己制作一个ico图标，取名为favicon.ico，覆盖该文件
  - index.html： 项目的首页
  - manifest.json:    定义网页快捷方式
- node_modules:    项目依赖的第三方的包，是脚手架实现自己功能依赖的一些外部的文件



### 01-Hello World

~~~js
APP.js //自定义组件，必须要大写开头
import React, { Component } from 'react'

//app组件
class App extends Component {
  render() {
  	return (
    	<div>
      	Hello	World
      </div>
    )
  }
}

export default App
~~~



~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//将App组件挂载到，id为root的元素上
ReactDOM.render(<App />, document.getElementById('root'))
~~~



### JSX

jsx:	javascript 和 xml    

- 遇到<这个符号当作HTML解析
- 遇到{这个符号当作js解析



### react注意点

1. 在组件写class的方法为className
2. 自定义函数写在render下面
3. 自定义函数默认的this指向为undefined
4. 每个组件都需要一个根元素，可以用react.Fragment  碎片组件来  这样不会有没有意义的HTML标签
5. 改变状态需要用setState函数



### 新学英文单词

constructor   构造函数   Fragment碎片  target 指向当前元素  extends 继承

