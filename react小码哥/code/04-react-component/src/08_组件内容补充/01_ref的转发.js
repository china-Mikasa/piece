import React, { PureComponent, forwardRef, createRef } from 'react'


const HomeRef = forwardRef(function (props, ref) {
  return (
    <div>
      <p ref={ref}>13213131</p>
    </div>
  )
})



class App extends PureComponent {
  constructor(props) {
    super(props)
    this.homeRef = createRef()
  }
  render() {
    return (
      <div>
        <HomeRef ref={this.homeRef} />
        <button onClick={e => this.btnClick()}>打印</button>
      </div>
    )
  }
  btnClick() {
    console.log(this.homeRef.current)
  }
}

export default App
