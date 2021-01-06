import React, { Component } from 'react'
import {Button,message} from 'antd'
export default class Admin extends Component {
  clickHandler = () => {
    message.success('点击了按钮')
  }
  render() {
    return (
      <div>
        admin-------
        <Button type="primary" onClick={this.clickHandler}>按钮</Button>
      </div>
    )
  }
}
