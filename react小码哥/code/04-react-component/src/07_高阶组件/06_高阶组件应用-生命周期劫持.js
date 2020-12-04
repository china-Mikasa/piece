import React, { Fragment, PureComponent } from 'react'

function withNetwork(WrapperComponent) {
  return class NetComponent extends PureComponent {
    UNSAFE_componentWillMount() {
      this.startTime = Date.now()
      console.log(this.startTime)
    }
    render() {
      return <WrapperComponent />
    }
    componentDidMount() {
      this.endTime = Date.now()
      console.log(`渲染时间: ${this.endTime - this.startTime}`)
    }
  }

}

function Home(props) {
  return (
    <div>
      首页
    </div >
  )
}

function Login(props) {
  return (
    <div>
      登录页
    </div>
  )
}

const AuthHome = withNetwork(Home)
const AuthLogin = withNetwork(Login)

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <AuthHome />
        <AuthLogin />
      </Fragment>
    )
  }
}

export default App
