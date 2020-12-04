import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='name'>
            用户名: <input type='text'
              td='name'
              name='name'
              onChange={e => this.handleChange(e)}
              value={this.state.name}>
            </input>
          </label>
          <br />
          <label htmlFor='age'>
            年龄: <input type='text'
              td='name'
              name='age'
              onChange={e => this.handleChange(e)}
              value={this.state.age}>
            </input>
          </label>
          <br />
          <label htmlFor='height'>
            身高: <input type='text'
              td='name'
              name='height'
              onChange={e => this.handleChange(e)}
              value={this.state.height}>
            </input>
          </label>
          <br />
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

  handleChange(e) {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }



}

export default App;