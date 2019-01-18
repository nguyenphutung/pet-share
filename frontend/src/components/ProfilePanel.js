import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProfilePanel extends Component {
  render() {
    // const display = this.props.username ? (
    //   <div>
    //     <span className="navbar-text">Welcome, {this.props.username}</span>
    //   </div>
    // ) : (
    //   <button className="btn btn-primary btn-block" onClick={this.props.onLogin}>
    //     Login
    //   </button>
    // );
    return (
      <div className="col-3 profile-panel text-right">
        <span className="navbar-text">Welcome, {this.props.username}</span>
        <Link to = {'/login'}><span className="navbar-text" onClick = {this.props.onLogout}>Log out</span></Link>
      </div>
    )
  }
}

export default ProfilePanel;
