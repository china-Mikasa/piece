import React, { useEffect, useRef, useState } from 'react';

function UseRefDemo(props) {
  const [count, setCount] = useState(0)
  // 如给给useRef()默认值 那么它在这个函数将不会改变
  const pRef = useRef(count)

  // 触发点击事件完成dom的更新,进行useEffect函数体
  useEffect(() => {
    pRef.current = count
  }, [count])

  const changeCount = () => {
    setCount(count + 10)
    setCount(count + 10)
    setCount(count + 10)
    setCount(count + 10)
  }


  return (
    <div>
      <p>上一次的值{pRef.current}</p>
      <p>上一次的值{count}</p>
      <p>{count}</p>
      <button onClick={() => changeCount()}>生命加10</button>
    </div>
  );
}

export default UseRefDemo