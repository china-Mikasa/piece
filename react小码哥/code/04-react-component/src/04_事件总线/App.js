import React, { PureComponent } from 'react'
// import { EventEmitter } from 'events'

import Profile from './Profile'
import Home from './Home'

// class Profile extends PureComponent {
//   render() {
//     return (
//       <div>
//         我的
//       </div>
//     )
//   }

//   componentDidMount() {
//     console.log(this)
//     // 通过事件总线添加监听
//     eventsBus.addListener('helloProfile', this.eventsClick)
//   }

//   componentWillUnmount() {
//     // 移除监听
//     eventsBus.removeListener('helloProfile', this.eventsClick)
//   }

//   eventsClick(name, num) {
//     console.log(eventsBus)
//     console.log(this)
//     console.log(name, num)
//   }
// }

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }

  



}

export default App;