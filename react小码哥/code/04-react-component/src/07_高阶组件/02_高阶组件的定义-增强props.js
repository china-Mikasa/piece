import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>首页</h2>
        <p>{this.props.nickname}</p>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>关于</h2>
        <p>{this.props.nickname}</p>
      </div>
    )
  }
}

const EnhancedHome = higherOrderComponent(Home)
const EnhancedAbout = higherOrderComponent(About)

// class组件写法
// function higherOrderComponent(WrapperComponent) {
//   return class NewCompoent extends PureComponent {
//     render() {
//       console.log(this)
//       return <WrapperComponent {...this.props} />
//     }
//   }
// }

// 函数组件写法
function higherOrderComponent(WrapperComponent) {
  return props => {
    return <WrapperComponent {...props}/>
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhancedHome nickname='mikasa' />
        <EnhancedAbout nickname='allen' />
      </div>
    )
  }
}

const enhancedComponent = higherOrderComponent(App)


export default enhancedComponent;