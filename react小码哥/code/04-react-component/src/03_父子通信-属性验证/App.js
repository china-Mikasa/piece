import React, { Component } from 'react'
import PropTypes from 'prop-types'


function ChildCpn(props) {
  const { name, age, height, giants } = props
  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          giants.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  )
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired, // 默认值字符串 必传
  age: PropTypes.number, // 默认值整型 
  height: PropTypes.string,
  giants: PropTypes.array
}

ChildCpn.defaultProps = {
  name: '艾伦',
  age: 18,
  height: '172',
  giants: ['a', 'b', 'c']
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'mikasa',
      age: 18,
      height: '170',
      giants: ['艾伦', '三笠', '爱尔敏']
    }
  }
  render() {
    const { name, age, height, giants } = this.state
    return (
      <div>
        <ChildCpn name={name} age={age} height={height} giants={giants} />
        <ChildCpn />
      </div>
    )
  }
}

export default App;