import React, { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('更新')
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