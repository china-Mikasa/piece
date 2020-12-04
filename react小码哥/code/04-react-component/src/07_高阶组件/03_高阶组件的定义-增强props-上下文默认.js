import React, { PureComponent, createContext } from 'react'

// 创建默认的上下文实例
const UserContent = createContext()

class Home extends PureComponent {
  render() {
    return (
      // Consumer消费者 取得Provider的值
      <UserContent.Consumer>
        {
          user => {
            return <p>{user.name}</p>
          }
        }
      </UserContent.Consumer>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContent.Consumer>
        {
          user => {
            return <p>{user.name}</p>
          }
        }
      </UserContent.Consumer>
    )
  }
}

const EnhancedHome = higherOrderComponent(Home)
const EnhancedAbout = higherOrderComponent(About)

// 函数组件写法
function higherOrderComponent(WrapperComponent) {
  return props => {
    return <WrapperComponent {...props} />
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      giants: { name: 'allen', age: 18, height: 170 }
    }
  }
  render() {
    const { giants } = this.state
    return (
      <UserContent.Provider value={this.state.giants}>
        <Home />
        <About />
      </UserContent.Provider>
    )
  }
}

const enhancedComponent = higherOrderComponent(App)


export default enhancedComponent;