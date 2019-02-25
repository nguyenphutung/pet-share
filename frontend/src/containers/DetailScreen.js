import React, {Component} from 'react'
import axios from '../axios'
import NavBar from '../components/NavBar';
import PetImage from "../components/PetImage"
import Chat from "../components/Chat";

import io from "socket.io-client";

class DetailScreen extends Component {
  state = {
    inputComment: "",
    comments: [],
    image: ""
  }

  _onInputComment = text => this.setState({inputComment: text});
  //
  // _handleUserInput = event =>{
  //   this.state.inputComment(event.target.value)
  // }

  // _handleCommentChange = event => {
  //   this.setState({inputComment: event.target.value});
  // }

  socket = io('localhost:8080');

  // this.socket.on('RECEIVE_MESSAGE', function(data){
  //   addMessage(data);
  // });
  //
  // const addMessage = data => {
  //   console.log(data);
  //   this.setState({messages: [...this.state.messages, data]});
  //   console.log(this.state.messages);
  // };

  componentDidMount(){
    axios
    .get(`/api/images/${this.props.match.params.imageId}`)
    .then(data => {
      console.log(data.data);
      this.setState({image: data.data});
      const _comments = this.state.image.comment ? this.state.image.comment.map(comment =>
        <p key = {comment._id} style={{borderTop: "1px solid #cccccc"}}>
          <span className="font-weight-bold">{comment.createdBy.username}</span>
          : {comment.content}
        </p>) : "";
      this.setState({comments: _comments});
    })
    .catch(err => console.error(err));
  }

  sendMessage = (event) => {
    event.preventDefault();


      axios
      .post("/api/images/" + this.props.match.params.imageId + "/comments", {
        content: this.state.inputComment
      })
      console.log(this.state.inputComment);
      //console.log(this.socket);

      this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});
  }

  render () {
    return (
      <div>
        <NavBar onSearchChange = {this._onSearchChange} username= {this.props.username} onLogout = {this.props.onLogout}/>
        <div className="main_content container">
          <div className = "row">
            <div className = "col-6 mr-auto ml-auto">
              {this.state.image ? <PetImage img={this.state.image} comments = {this.state.comments}/> : ""}
            </div>
            <Chat onInputComment = {this._onInputComment} sendMessage = {this.sendMessage}/>
          </div>

        </div>
      </div>
    );
  }
}

export default DetailScreen;
