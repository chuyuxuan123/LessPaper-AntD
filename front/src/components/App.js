import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Layout
} from 'antd';

import Axios from 'axios';

import AssistPage from './AssistPage';
import ResultPage from './ResultPage';
import NewQuestionPage from './NewQuestionPage';
import TeacherHomePage from './TeacherHomePage';
import StudentHomePage from './StudentHomePage';
import SigninPage from './SigninPage';
import RegisterPage from './RegisterPage';
import TeacherNavbar from './TeacherNavbar';
import StudentNavbar from './StudentNavbar';
import JudgePage from './JudgePage';
import '../assets/css/App.css';

import { domainUrl } from '../model/domainUrl';

const {
  Header, Content, Footer
} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      identity: 1
    }
  }

  handelSignin = (id) => {
    Axios.get(`${domainUrl}/login/validate?name=q`)//TODO:这个请求还需要重新写，目前只是测试
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      loggedin: true,
      identity: id
    })
  }

  handelSignout = () => {
    this.setState({
      loggedin: false
    })
    window.location.href = "/";
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          {this.state.identity == 1 && <TeacherNavbar login={this.state.loggedin} signOut={this.handelSignout} />}
          {this.state.identity == 2 && <StudentNavbar login={this.state.loggedin} signOut={this.handelSignout} />}
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>

              {!this.state.loggedin && <Route exact path="/" render={props => <SigninPage login={this.state.loggedin} signIn={this.handelSignin} />} />}
              {!this.state.loggedin && <Route path="/signup" component={RegisterPage} />}
              {this.state.loggedin && this.state.identity==1 && <Route exact path="/" render={props => <TeacherHomePage id={this.state.identity}/>} />}
              {this.state.loggedin && this.state.identity==1 && <Route exact path="/home" render={props => <TeacherHomePage id={this.state.identity}/>} />}
              {this.state.loggedin && this.state.identity==2 && <Route exact path="/" render={props => <StudentHomePage id={this.state.identity}/>} />}
              {this.state.loggedin && this.state.identity==2 && <Route exact path="/home" render={props => <StudentHomePage id={this.state.identity}/>} />}

              {this.state.loggedin && <Route path="/newquestion" component={NewQuestionPage} />}
              {this.state.loggedin && <Route path="/result" component={ResultPage} />}
              {this.state.loggedin && <Route path="/pigai" component={JudgePage} />}
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
