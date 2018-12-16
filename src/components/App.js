import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Layout
} from 'antd';

import ResultPage from './ResultPage';
import NewQuestionPage from './NewQuestionPage';
import HomePage from './HomePage';
import SigninPage from './SigninPage';
import Navbar from './Navbar';
import '../assets/css/App.css';

const {
  Header, Content, Footer
} = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false
    }
  }
  
  handelSignin = () => {
    this.setState({
      login: true
    })
  }

  handelSignout = () => {
    this.setState({
      login: false
    })
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
            { this.state.login && <Route exact path="/" component={HomePage} />} 
            { this.state.login && <Route path="/home" component={HomePage} /> }
            { this.state.login && <Route path="/newquestion" component={NewQuestionPage} /> }
            { this.state.login && <Route path="/result" component={ResultPage} /> }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            LessPaper ©2018 Created by Skr狠人
          </Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App;
