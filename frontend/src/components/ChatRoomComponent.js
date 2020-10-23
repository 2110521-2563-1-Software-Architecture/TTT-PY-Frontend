import React, { Component } from 'react';
import './ChatRoom.css'

class ChatRoomComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputMessage: '',
            message: [
                {   user: "tangtai",
                    message: "hello"
                }
            ]
        }
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage(){
        console.log(this.state.inputMessage)
        this.state.message.push({
            user: localStorage.getItem("user"),
            message: this.state.inputMessage
        })
        console.log(this.state.message)
    }
    render() {
        return (            
            <div className="container">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                
                {/* heading area */}
                <div className="header" style={{ paddingLeft: "50px" }}>
                    <div className="header-name" style={{}}>
                        friend's name
                    </div>
                </div>

                {/* main area */}
                <div className="bg-chatroom">
                </div>¸

                 {/* sending box area */}
                <div className="send-box">
                    <div class="row">
                        <div class="icon" style={{ width: "10%" }}>
                            <i class="fa fa-plus"></i>
                        </div>
                        <div class="message">
                            <div class="box-message" placeholder="message">
                                <input class="input-message" placeholder="message" onChange={(e) => {this.setState({ inputMessage: e.target.value });}}></input>
                            </div>
                        </div>
                        <div class="icon" style={{ marginLeft: "2%" }}>
                            <i class="fas fa-camera"></i>
                        </div>
                        <div class="icon">
                            <i class="fas fa-paper-plane " onClick={this.sendMessage}></i>
                        </div>
                    </div>
                </div>


            </div>
        );
        }
}

export default ChatRoomComponent;