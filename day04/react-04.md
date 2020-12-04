# react-day04

今天是学习react的第四天，虽然不是真正意义上的第四天

### 父组件向子组件传值

- 父组件

父组件传值有点类试vue的组件传值，不过vue是同归v-bind动态绑定将值传递过去的

react中需要直接写自定义的属性，把需要传递的值通过js表达式或者直接写在属性后面

~~~jsx
// 父组件
this.state = {
  message: '这是来自父组件的消息'
}

<Sun content={this.state.message} ></Sun>
~~~

- 子组件

子组件接收参数先是需要在constructor上写props，然后再super(props) 

通过this.props.message就能获取到来自父组件传递而来的数据

~~~jsx
class Sun extends Component {
  constructor(props) {
  	super(props)
    this.state = {
    	message: '这是属于子组件的消息'
    }
  }
  render() {
 		return (
    	<Fragment>
    		<div{this.props.message}></div>    // 显示来自父组件的消息
   		</Fragment>
    )
  }
}
~~~

### 子组件向父组件传值

在react中不能像vue那么方便通过$emit传递方法

先在父组件写一个方法改变父组件的状态，将这个方法传递给子组件

~~~jsx
//父组件
<Sun updataState={this.updataState.bind(this)}></Sun>

updataState(data) {
  this.setState({
 		message: data                 
  }) 
}
~~~

~~~jsx
//子组件
this.state = {
  message: '这是子组件的消息'
}
<button onClick={() => {this.updataState(this.state.message)}}></button>
~~~

### 组件的两种方式

- 函数实组件（无状态组件）

~~~jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Clock() {
  return (
  	<div><p>函数式组件</p></div>
  )
}

ReactDOM.render(<Clock />, document.querySelector('#root'))
~~~



- 类组件

~~~jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component {
  constructor(props) {
  	super(props)
 		this.state = {}
  }
  render() {
  	return (
    	<div><p>sdasdasd</p></div>
    )
  }
}
~~~

### react路由

#### react-router-dom 安装

yarn add react-router-dom --save

npm install  ract-router-dom --save



#### 路由的使用

创建一个AppRouter.jsx用来存储所有的路由

~~~jsx
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'

class AppRouter extends Component {
  render() {
  	return (
      {/*在Router中写东西那么里面的内容一定会显示在上面*/}
    	<Router>
    		{/*Link在渲染完成相当于a标签*/}
    		<Link to='/'>首页</Link>
    		{/*限制路由路径所显示的组件*/}
    		<Route path='/' component={() => { (<div>跳转首页</div>) }}></Route>
    		{/*重定向 当路由为根路径时将会跳转到/home*/}
    		<Redirect from='/' to='/home'></Redirect>
    	</Router>
    )
  }
}

{/*限制路由路径所显示的组件*/}
withRouter(组件名) 
给不是通过路由切换来的组件传入history、loaction、match三个对象传入props对象上
{/*TabBar就是一个列子*/}
~~~

#### 路由三大对象

- history
  - 
- loaction
- match

