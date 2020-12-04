import React, { useRef, forwardRef } from 'react';

// forwardRef: 通过父组件想要获取子组件的dom时可以使用
// 父组件定义ref通过属性传入子组件 class组件不需要forwardRef 函数式组件需要
// 使用forwardRef包裹函数 函数支持两个参数 props, ref。此时子组件可以将ref绑定到子组件上


const LKDInput = forwardRef((props, ref) => {
  return <input ref={ref}></input>
})

function ForwardDemo(props) {
  const inputRef = useRef()
  return (
    <div>
      <LKDInput ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}

export default ForwardDemo;