import React, {Component} from 'react'
import axios from '../axios'
import NavBar from '../components/NavBar';
import PetImage from "../components/PetImage"

class DetailScreen extends Component {
  state = {
  }

  componentDidMount(){
    axios
    .get(`/api/images/${this.props.match.params.imageId}`)
    .then(data => {
      console.log(data.data);
        this.setState({image: data.data,
      });
    })
    .catch(err => console.error(err));
  }
  render () {
    return (
      <div>
        <NavBar onSearchChange = {this._onSearchChange} username= {this.props.username}/>
        <div className="main_content container">
          <div className = "row">
            <div className = "col-8 mr-auto ml-auto">
              {this.state.image ? <PetImage img={this.state.image}/> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
