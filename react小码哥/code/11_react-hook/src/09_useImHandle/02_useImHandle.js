import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 因为通过forwardRef获取子组件的dom,父组件可以对dom进行任何操作,在设计模式上不合理、react官网也是推荐这样来写


const LKDInput = forwardRef((props, ref) => {

  const inputRef = useRef()

  // 第一个参数父组件传入的ref, 第二个参数箭头函数, 第三个依赖项
  // 箭头函数返回一个对象 规定了父组件只能调用focus函数
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }), [inputRef])

  return <input ref={inputRef}></input>
})

function UseImperativeHandleDemo(props) {
  const inputRef = useRef()
  return (
    <div>
      <LKDInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}

export default UseImperativeHandleDemo;