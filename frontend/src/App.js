import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from './axios'

import HomeScreen from "./containers/HomeScreen"
import DetailScreen from "./containers/DetailScreen"
import LoginPage from "./containers/LoginPage"

import {Route, withRouter} from 'react-router-dom'

class App extends Component {
  state = {
    userString: "",
    passString: "",
  };

  componentDidMount(){
    axios
    .get("/api/auth/checksession")
    .then(data => {
      console.log(data.data.username);
      this.setState({userString: data.data.username})
      this.props.history.push("/")
    })
    .catch(err => console.error(err));
  }

  _inputUsername = text => this.setState({userString: text});
  _inputPassword = text => this.setState({passString: text});

  _onLogin = (event) => {
    event.preventDefault();
    axios
    .post("/api/auth", {
      username: this.state.userString,
      password: this.state.passString
    })
    .then(response => {
      this.setState({
        username: response.data.username,
        id: response.data.id,
      });
      this.props.history.push("/");
    }
    )
    .catch(err => console.log(err));
  }


  render() {
    return (
        <div className="App">
          <Route exact path = "/login" render = {(props) => {
              return <LoginPage {...props} inputUsername = {this._inputUsername} inputPassword = {this._inputPassword} onLogin = {this._onLogin}/>;
            }}/>
          <Route exact path = "/" render = {(props) => {
              if(!this.state.username) {
                this.props.history.push("/login")
                return "";
              }
              return <HomeScreen {...props} username = {this.state.username}/>;
            }}/>
          <Route path = "/images/:imageId" render = {(props) => {
              return <DetailScreen {...props} username = {this.state.username}/>;
            }}/>
        </div>
    );
  }
}

export default withRouter(App);
