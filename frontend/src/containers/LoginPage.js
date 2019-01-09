import React, { Component } from 'react';
import '../App.css';

class LoginPage extends Component {
  _handleUserInput = event =>{
    this.props.inputUsername(event.target.value)
  }
  _handlePassInput = event =>{
    this.props.inputPassword(event.target.value)
  }

  render() {
    return (
      <div>
        <form className = "container" onSubmit= {this.props.onLogin}>
          <div className="form-group">
            <label>Username</label>
            <input onChange = {this._handleUserInput} type="text" className="form-control" placeholder="Enter username"/>
            <small className="form-text text-muted">We'll never share your account with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange = {this._handlePassInput} type="password" className="form-control" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
