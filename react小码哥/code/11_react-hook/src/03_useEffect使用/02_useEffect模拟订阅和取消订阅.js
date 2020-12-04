import React, { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(0)

  /*
  * useEffect 接受两个参数, 第一个参数是函数(写箭头函数就完事了), 第二个参数是数组
  * 箭头函数里支持返回一个函数
  * useEffect 第一个函数本身相当于componentDidMount函数做的事件,  返回函数相当componentDidUpdata函数做的事件
  * useEffect修改的时候会先走箭头函数里return的箭头函数然后走本体
  */ 
  useEffect(() => {
    console.log('订阅某些事件')
    return () => {
      console.log('取消订阅')
    }
  })

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>+1</button>
      <button onClick={() => setState(state - 1)}>-1</button>
    </div>
  );
}

export default App;