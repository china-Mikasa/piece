import React, { useCallback, useState, memo } from 'react';

const HYButton = memo((props) => {
  console.log(props.title, '更新了')
  return <button onClick={props.incremnet}>英雄不朽+1秒</button>
})

function CallBackHookDemo01(props) {

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const incremnet = () => {
    console.log('increment执行')
    setCount(count + 1)
  }

  const incremnet2 = useCallback(() => {
    console.log('increment2执行')
    console.log(count)
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h1>{count}秒</h1>
      <HYButton title='btn1' incremnet={incremnet}/>
      <HYButton title='btn2' incremnet={incremnet2}/>
      <button onClick={() => setShow(!show)}>改变show</button>
    </div>
  );
}

export default CallBackHookDemo01;