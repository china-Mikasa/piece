import React, { useCallback, useState } from 'react';

function CallBackHookDemo01(props) {

  const [count, setCount] = useState(0)

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
      <button onClick={incremnet}>英雄不朽+1秒</button>
      <button onClick={incremnet2}>英雄不朽+1秒</button>
    </div>
  );
}

export default CallBackHookDemo01;