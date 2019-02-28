import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { InputNumber, Button, Affix } from 'antd';


function onChange(value) {
    console.log('changed', value);
}


export default class JudgePage extends Component {
    render() {
        return (
            <div>
                <img src={require("../assets/img/sample2.jpg")} alt="sample pic" style={{ padding: "20px" }} />
                <Affix style={{ position: 'absolute',top:"100px", right: "20px"}}>
                    <InputNumber min={0} max={10} step={0.5} onChange={onChange} />
                    <Button type="primary">上一题</Button>
                    <Button type="primary">下一题</Button>
                    <Link to="/home">
                    <Button type="primary">结束</Button>
                    </Link>
                </Affix>
            </div>
        )
    }
}
