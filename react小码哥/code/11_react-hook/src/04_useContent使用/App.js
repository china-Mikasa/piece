import React, { createContext } from 'react';

import Content from './01_useContent基本使用'

export const oneContent = createContext()
export const twoContent = createContext()


function App(props) {
  return (
    <div>
      <oneContent.Provider value={{ name: 'mikasa', age: 17 }}>
        <twoContent.Provider value={{ name: 'allen', age: 18 }}>
          <Content />
        </twoContent.Provider>.
      </oneContent.Provider>
    </div>
  );
}

export default App;