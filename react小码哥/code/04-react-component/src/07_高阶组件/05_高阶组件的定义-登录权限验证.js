import React, { PureComponent } from 'react'

function withNetwork(WrapperComponent) {
  return props => {
    const { isLogin } = props
    if (isLogin) {
      return <Home />
    } else {
      return < Login />
    }
  }
}

function Home(props) {
  return (
    <div>
      首页
    </div>
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

class App extends PureComponent {
  render() {
    return (
      <AuthHome isLogin={false} />
    )
  }
}

export default App
