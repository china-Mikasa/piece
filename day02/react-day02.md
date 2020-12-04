# react-day02

### 组件之间的参数

- 父组件通过自定义属性向子组件传递参数

~~~jsx
//某个父组件   Giants
//直接在组件上自定义属性让用{}语法来将参数传递 

import React, { Component, Fragment } from 'react'
import GiantsItem from './GiantsItem'

class Giants extends Component {
  constructor(props) {
  	super(props)
    this.state = {
    	list: ['三笠', '艾伦', '爱尔敏']
    }
  }
  render() {
		return (
    	<Fragment>
      	<ul>
        	<GiantsItem content={ this.state.list }/>
    		</ul>
      </Fragment>
    )
  }
}

export default Giants

//最终结果为 <ul><li>三笠艾伦爱尔敏</li></ul>
~~~

- 子组件接受参数   

~~~jsx
// 使用this.props来接收来自父组件的传递进来的参数
import React, { Component } from 'react'

class GiantsItem extends Component {
  render() {
  	return (
    	<Fragment>
    		<li> { this.props.content }</li>
      </Fragment>
    )
  }
}

export default GianteItem 
~~~

### 数据校验(子组件校验来自父组件传来的参数)

```jsx
//需要先导入校验的方法 PropTypes    GiantsItem
import PropTypes from 'prop-types'

//数据校验写在class下面
GiantsItem.propTypes = {
  content: PropTypes.string   //content 必需为字符串型
  index: PropTypes.number   //index 必需为数字型
  deleteItem: PropTypes.func	//deleteItem 必需为一个函数
  age: PropTypes.number,isRequired	//age 必需为一个数组并且是必须要有这个从父组件传入的值
}
//数据默认值同数据校验写在class下面
GiantsItem.defaultProps = {
  author: '谏山创'				//给author一个默认值
}
```



### 每日单词

constructor constructor constructor constructor constructor constructor	 构造函数

Fragment Fragment Fragment Fragment Fragment Fragment Fragment 		碎片

render render render render render render render render render		渲染

target target target target target target target target target target		目标

propTypes  propTypes propTypes propTypes propTypes propTypes propTypes	数据校验的函数

defaultProps defaultProps defaultProps defaultProps defaultProps defaultProps	给数据写默认值的函数