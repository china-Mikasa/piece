import React, { useEffect, useLayoutEffect, useState } from 'react';

function UseLayoutEffactDemo(props) {

  const [count, setCount] = useState(10)

  // useEffect会执行两次 
  // 原因执行顺序: useEffect会在dom更新完后调用 
  // useEffect(() => {
  //   console.log(count)
  //   if(count === 0) {
  //     setCount(Math.random())
  //   }
  // }, [count])

  useLayoutEffect(() => {
    console.log(count)
    if(count === 0) {
      setCount(Math.random())
    }
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>生命结束</button>
    </div>
  );
}

export default UseLayoutEffactDemo;