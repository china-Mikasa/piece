import React, { useReducer } from 'react';

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default: return
  }
}


function CountDemoUseReducer(props) {

  // useReducer接受两个参数 1.处理函数 2.默认状态
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export default CountDemoUseReducer;