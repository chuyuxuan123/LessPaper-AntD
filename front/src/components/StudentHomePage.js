import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { List, Tabs, Button } from 'antd';

function callback(key) {
    console.log(key);
}

const data = [
    {
        title: "Qusetion 4",
    },
    {
        title: "Question 5",
    },
    {
        title: "Question 6"
    }
]

export default class StudentHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.id
        }
    }
    render() {
        return (
            <div>
                <Tabs onChange={callback}>
                    <Tabs.TabPane tab="未完成" key="1">
                        <List
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        
                                        title={<a href="/result">{item.title}</a>}
                                        description="Question Decription"
                                    />
                                    {/* TODOS: link指向的url */}
                                    {/* <Link to="/upload">
                                    <Button type="primary">上传答案</Button>
                                    </Link> */}
                                </List.Item>
                            )}
                        />

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="已完成" key="2">
                        <List
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        
                                        title={<a href="/result">{item.title}</a>}
                                        description="Question Decription"
                                    />
                                    <Link to="/result">
                                    <Button type="primary">查看结果</Button>
                                    </Link>
                                </List.Item>
                            )}
                        />
                    </Tabs.TabPane>

                </Tabs>

            </div>
        )
    }
}

