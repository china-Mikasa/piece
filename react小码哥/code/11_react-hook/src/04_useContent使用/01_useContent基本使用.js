import React, { useContext } from 'react';

import { oneContent, twoContent } from './App'

function ContextHookDemo(props) {

  const one = useContext(oneContent)
  const two = useContext(twoContent)

  console.log(one, two)

  return <div>123231123</div>

}

export default ContextHookDemo;