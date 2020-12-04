import React, { Component } from 'react'

export default class AppTest extends Component {
  render() {
    return (
      <div>
        类组件
      </div>
    )
  }
}

/*
*
* 函数式组件的特点
*
*/

// 1.没有this对象
// 2.没有内部状态

export default function App() {
  return (
    <div className="App">
      函数试组件
    </div>
  )
}
