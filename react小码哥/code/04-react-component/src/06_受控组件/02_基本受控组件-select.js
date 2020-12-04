import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Allen'
    }
  }
  render() {
    // 设置select的默认值
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name='giants' 
                  onChange={e => this.changeName(e)}
                  value='allen'>
            <option value='mikasa'>三笠</option>
            <option value='allen'>艾伦</option>
            <option value='armin'>爱尔敏</option>
          </select>
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