import React, {Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/logo.png';
import ProfilePanel from './ProfilePanel';

class NavBar extends Component {
  render() {
    return (
      <div  className="navbar navbar-expand">
        <div className="container">
          <div className="col-6 text-center">
            <img src={logo} alt= "logo"/>
          </div>
          <SearchField onSearchChange= {this.props.onSearchChange}/>
          <ProfilePanel username = {this.props.username}/>
        </div>
      </div>
    );
  }
}

export default NavBar;
