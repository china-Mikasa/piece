import React, { PureComponent, createRef } from 'react';

class Children extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  render() {
    return (
      <div>
        <button onClick={_ => this.btnClick()} ref={this.btnRef}>+1</button>
        <h2>{this.state.num}</h2>
      </div>
    )
  }

  btnClick() {
    this.setState({
      num: this.state.num + 1
    })
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.btnRef = new createRef()
    this.childrenRef = new createRef()
  }
  render() {
    return (
      <div>
        <div></div>
        <button onClick={_ => this.btnClick()} ref={this.btnRef}></button>
        <Children ref={this.childrenRef}/>
      </div>
    )
  }

  btnClick() {
    this.childrenRef.current.btnClick()
  }
}

export default App;