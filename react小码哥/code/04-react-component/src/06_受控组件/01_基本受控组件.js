import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '1223121'
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='name'>
            用户名: <input type='text'
              td='name'
              onChange={e => this.changeName(e)}
              value={this.state.name}>
            </input>
          </label>
          <input type='submit'></input>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    // 将表单提交的默认事件禁止了
    e.preventDefault()
    console.log(this.state.name)
  }

  changeName(e) {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }



}

export default App;