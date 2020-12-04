# react-day03

### ref属性 用于获取dom元素

~~~jsx
import React, { Component } from 'react'

class Giants extends Component {
  constructor() {
  	this.state = {
    	inputChange: this.textChange.bind(this)
    }
  }
  render() {
		return (
    	<input ref={ (input) => (this.input = input)} onChange={this.state.inputChange}>我是input的value值</input>
    )
  }
  inputChange() {
  	console.log(this.input.value)						//输出我是input的value值
  }
}
~~~

