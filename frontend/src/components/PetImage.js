import React, {Component} from 'react';
import config from "../config";

class PetImage extends Component {
  render () {
    return (
      <div className = "pet_image">
        <img className="img-fluid" src={config.rootPath + this.props.img.imageUrl} alt={this.props.img.title}/>
        <h4>{this.props.img.title}</h4>
        <p>{this.props.img.description}</p>
        {this.props.comments}
      </div>
    );
  }
}

export default PetImage;
