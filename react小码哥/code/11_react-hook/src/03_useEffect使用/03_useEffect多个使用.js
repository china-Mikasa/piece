import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

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

  /*
  * useEffect第二个参数传数组, 数组里传状态。这个useEffect想要发生更新必要数组的某个状态值发生改变才会调用
  * 如: 传入一个空数组不会发生更新 用于订阅事件和调用接口 
  */

  useEffect(() => {
    console.log('订阅某些事件')
    return () => {
      console.log('取消订阅')
    }
  }, [])

  useEffect(() => {
    console.log('当前完成count: ' + count)
    return () => {
      console.log('当前修改之前count: ' + count)
    }
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default App;