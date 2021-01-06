import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'

import './login.css'
const { Item } = Form
export default class Login extends Component {
  validatorField = (rule, value, callback) => {
    if (!value) {
      callback('请输入密码')
    } else if (value.length < 4) {
      callback('密码不能小于4位')
    } else if (value.length > 12) {
      callback('密码不能大于12位')
    } else if (!/^[0-9a-zA-Z_]{1,}$/.test(value)) {
      callback('密码只能以数字、字母、下划线组成')
    } else {
      callback()
    }
  }
  Finish = (values) => {
    console.log('111111')
    // console.log(values)
  }
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1 className="title">xxx项目：后台管理系统</h1>
        </header>
        <div className="login-content">
          <h3 className="title">用户登录</h3>
          <Form 
          className="login-form"
          onFinish={this.Finish}
          >
            <Item
              name="username"
              rules={[
                {required: true,message: '请输入用户名'},
                { min: 4, message: '用户名不能小于4位' },
                { max: 12,message: '用户名不能大于12位'},
                { pattern: /^[0-9a-zA-Z_]{1,}$/,message: '用户名只能以数字、字母、下划线组成'},
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Item>
            <Item
              name="password"
              rules={[
                { validator: this.validatorField},
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Item>
          </Form>
        </div>
      </div>
    )
  }
}
