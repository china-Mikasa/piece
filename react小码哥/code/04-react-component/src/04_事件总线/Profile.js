import React, { PureComponent } from 'react'
import EventsBus from './eventBus'

class Profile extends PureComponent {
  render() {
    return (
      <div>
        我的
      </div>
    )
  }

  componentDidMount() {
    console.log(this)
    console.log(EventsBus)
    // 通过事件总线添加监听
    EventsBus.addListener('aaaaa', this.eventsClick)
    console.log(EventsBus)
  }

  componentWillUnmount() {
    // 移除监听
    EventsBus.removeListener('aaaaa', this.eventsClick)
  }

  eventsClick(name, num) {
    console.log()
    console.log(this)
    console.log(name, num)
  }
}

export default Profile
