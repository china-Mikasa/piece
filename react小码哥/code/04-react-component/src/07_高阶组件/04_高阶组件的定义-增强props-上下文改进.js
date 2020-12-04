import React, { PureComponent, createContext } from 'react'

// 创建默认的上下文实例
const UserContent = createContext()

class Home extends PureComponent {
  render() {
    console.log(this.props)
    return (
      // Consumer消费者 取得Provider的值
      <div>
        <p>首页组件</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <p>关于组件</p>
        <p>{this.props.age}</p>
      </div>
    )
  } 
}

const EnhancedHome = withUser(Home)
const EnhancedAbout = withUser(About)

// 函数组件写法 高阶组件
function withUser(WrapperComponent) {
  return props => {
    return (
      <UserContent.Consumer>
        {
          user => {
            return <WrapperComponent {...props} {...user} />
          }
        }
      </UserContent.Consumer>
    )
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      giants: { name: 'mikasa', age: 18, height: 170 }
    }
  }
  render() {
    return (
      <UserContent.Provider value={this.state.giants}>
        <EnhancedHome region='中国' />
        <EnhancedAbout region='中国' />
      </UserContent.Provider>
    )
  }
}

export default App;