import React, { PureComponent } from 'react';

class App extends PureComponent {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        高阶组件的定义
      </div>
    );
  }
}

function higherOrderComponent(WrapperComponent) {
  return class NewCompoent extends PureComponent {
    render() {
      return <WrapperComponent {...this.props} />
    }
  }
}

const enhancedComponent = higherOrderComponent(App)


export default enhancedComponent;