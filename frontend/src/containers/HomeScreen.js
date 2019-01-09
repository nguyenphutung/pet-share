import React, {Component} from 'react'
import axios from '../axios'
import NavBar from '../components/NavBar';
import MainContent from "../components/MainContent";

class HomeScreen extends Component {
  state = {
    images: [],
    searchString: "",
  }

  componentDidMount(){
    axios
    .get("/api/images")
    .then(data => {
      console.log(data.data);
      setTimeout(() => {
        this.setState({images: data.data,
        });
      }, 1000);
    })
    .catch(err => console.error(err));
  }

  _onSearchChange = text => this.setState({searchString: text});

  render () {
    const displayedImages = this.state.images.filter(img => img.title.includes(this.state.searchString) || img.description.includes(this.state.searchString))
    return (
      <div>
        <NavBar onSearchChange = {this._onSearchChange} username= {this.props.username}/>
        <MainContent images = {displayedImages}/>
      </div>
    );
  }
}

export default HomeScreen;
