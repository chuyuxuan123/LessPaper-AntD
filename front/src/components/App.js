import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Layout
} from 'antd';

import Axios from 'axios';

import AssistPage from './AssistPage';
import ResultPage from './ResultPage';
import NewQuestionPage from './NewQuestionPage';
import HomePage from './HomePage';
import SigninPage from './SigninPage';
import RegisterPage from './RegisterPage';
import Navbar from './Navbar';
import '../assets/css/App.css';

import {domainUrl} from '../model/domainUrl';

const {
  Header, Content, Footer
} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  handelSignin = () => {
    Axios.get(`${domainUrl}/login/validate?name=q`)//TODO:这个请求还需要重新写，目前只是测试
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      login: true
    })
  }

  handelSignout = () => {
    this.setState({
      login: false
    })
    window.location.href = "/";
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Navbar login={this.state.login} signOut={this.handelSignout} />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>

              {!this.state.login && <Route exact path="/" render={props => <SigninPage login={this.state.login} signIn={this.handelSignin} />} />}
              {!this.state.login && <Route path="/signup" component={RegisterPage} />}
              {this.state.login && <Route exact path="/" component={HomePage} />}
              {this.state.login && <Route path="/home" component={HomePage} />}
              {this.state.login && <Route path="/newquestion" component={NewQuestionPage} />}
              {this.state.login && <Route path="/result" component={ResultPage} />}
              <Route path="/help" component={AssistPage} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              LessPaper ©2018 Created by Skr狠人.All Rights Reserved
          </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
