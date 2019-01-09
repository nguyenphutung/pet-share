import React, {Component} from 'react';
import config from "../config";

class PetImage extends Component {
  render () {
    const comments = this.props.img.comment ? this.props.img.comment.map(comment =>
      <p style={{borderTop: "1px solid #cccccc"}}>
        <span class="font-weight-bold">{comment.createdBy.username}</span>
        : {comment.content}
      </p>) : "";
    return (
      <div className = "pet_image">
        <img className="img-fluid" src={config.rootPath + this.props.img.imageUrl} alt={this.props.img.title}/>
        <h4>{this.props.img.title}</h4>
        <p>{this.props.img.description}</p>
        {comments}
      </div>
    );
  }
}

export default PetImage;