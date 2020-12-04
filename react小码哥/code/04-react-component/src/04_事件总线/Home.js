import React, { PureComponent } from 'react'
import EventsBus from './eventBus'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={_ => this.btnEvent()}>首页</button>
      </div>
    )
  }
  btnEvent() {
    // 将事件发出去
    console.log(EventsBus)
    EventsBus.emit('aaaaa', 'mikasa', '123')
  }
}
