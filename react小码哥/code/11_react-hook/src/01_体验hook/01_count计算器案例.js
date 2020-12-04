import React, { useState } from 'react';

function App(props) {

  /*
  * useState返回一个数组
  * 第一个参数状态,第二个参数函数
  * 可以给状态传一个默认值 0
  * 下面的写法数组的结构赋值
  *
  * */

  const arr = useState(0)
  const state = arr[0]
  const setState = arr[1]

  // const [state, setState] = useState(0)
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>加一</button>
      <button onClick={() => setState(state - 1)}>减一</button>
    </div>
  );
}

export default App;