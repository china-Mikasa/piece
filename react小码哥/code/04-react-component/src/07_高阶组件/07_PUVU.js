import React, { PureComponent } from 'react'

import Demo from './demo'

import axios from 'axios'

const uniacid = 53
const openid = 'oCKOnuEaxr176_rHxqxjP_bzUlt0'


function withPVUV(WrapperComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      axios.post('https://dev.lexiangpingou.cn/wechat_users_api.php?action=puvindex', { uniacid, openid }).then(res => {
        console.log(res)
      })
    }
    render() {
      return <Demo />
    }
  }
}

export default withPVUV(Demo)