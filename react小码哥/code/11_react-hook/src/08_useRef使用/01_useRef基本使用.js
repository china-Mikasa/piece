import React, { useEffect, useRef, useState } from 'react';

function UseRefDemo(props) {
  const [count, setCount] = useState(0)
  // 通过useRef()给dom绑定ref
  const inputRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    console.log(inputRef.current)
    console.log(buttonRef.current)
  }, [])
  return (
    <div>
      <input ref={inputRef}></input>
      <button ref={buttonRef}>buttonRef</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 10)}>生命加10</button>
    </div>
  );
}

export default UseRefDemo