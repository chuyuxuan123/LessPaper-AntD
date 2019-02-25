import React, { Component } from 'react'

import { Input, Icon, Row, Col, Button, Radio, Form } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            account: '',
            password: '',
            identity: 1
        }

    }
    handelAccount = (e) => {
        this.setState({
            account: e.target.value
        })
    }

    handelPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handelID = (e) => {
        this.setState({
            identity: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{ paddingTop: "160px", }} >
                    <Col span={7} >
                        <h1 style={{ textAlign: "center" }}><span><Icon type="heart" /></span>LessPaper</h1>
                        <Input.Group size="large">
                            <Input type="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" onChange={this.handelAccount} />
                            <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" onChange={this.handelPassword} />
                        </Input.Group>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle" style={{ paddingTop: "20px", }} >
                    <Radio.Group onChange={this.handelID}>
                        <Radio value={1} checked={this.state.identity === 1} >教师</Radio>
                        <Radio value={2} checked={this.state.identity === 2} >学生</Radio>
                    </Radio.Group>
                </Row>
                <Row type="flex" justify="space-around" align="middle" style={{ paddingTop: "20px", }} >
                    <Col span={5}>
                        <Button type="primary" icon="login" size="large" onClick={this.props.signIn.bind(this,this.state.identity)} block>登录</Button>
                    </Col>
                </Row>
            <Row type="flex" justify="space-around" align="middle" style={{ paddingTop: "50px", }} >
                <Link to='/signup'>注册新账号</Link>
            </Row>
            </div>
        )
    }
}
