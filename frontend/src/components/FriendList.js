import React, { Component } from "react";
import './FriendList.css';
import Util from '../Util';
import history from "../History";

export class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend_list: [
                // {
                //     name: "Usergfgfg1",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User 2",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User  3",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User   4",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User    5",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User     6",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User     7",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User     8",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User     9",
                //     img: "userimage.jpeg"
                // },
                // {
                //     name: "User     10",
                //     img: "userimage.jpeg"
                // },
                
            ]
        };
        this.onClick = this.onClick.bind(this);
    }
    render() {
        return (
            <div>
            
        
            <div className="row">
                <div className='col-md-12'>
                    {/* <FriendListHeader /> */}
                    <div class="friend-list-header">
                    <div class="row">
                        <div class="col-md-4" style={{  }}>
                            <div style={{ fontWeight: "bold" }}>Contact</div>
                            <div style={{ fontSize: "16px", color: "var(--text-secondary-color)" }}>{this.state.friend_list.length}</div>
                        </div>
                        <div class="col-md-8" style={{ paddingLeft: "30%", paddingTop: "1.5%" }}>
                            <button class="btn btn-dark" style={{
                                backgroundColor: "black", color: "white", fontWeight: "bold",
                                fontSize: "13px", width: "100px", padding: ""
                            }} onClick={() => this.onClick()} disabled={window.location=="http://localhost:3000/addFriend"?true:false}>Add Friend</button>
                        </div>
                    </div>
                        
                    <div class="friend-list-container">
                        {this.state.friend_list.map(friend => {
                            return (
                                <Friend key={friend.name} friend={friend} />
                            );
                        })}
                    </div>
                </div>
            </div>
            </div>
            </div>

            
        );
    }

    async componentDidMount() {
        // console.log(window.location);
        var response = await Util.getFriends();
        await this.setState({
            friend_list: response.data
        });
        console.log(this.state);

    }

    onClick = () => {
        // console.log("click");
        history.push(`/addFriend`);
        window.location.reload();
   
    };
}

export default FriendList;

class Friend extends Component {


    render() {
        return (
            <div>
                <div className="row friend-box" style={{ marginLeft: "15px" }}>
                    <div className='col-md-4' style={{ width: '100%', margin: 'auto' }}>
                        <img className="friend-image " src={"userimage.jpeg"} />
                    </div>
                    <div className='col-md-8' style={{ width: '100%', margin: 'auto' }}>
                        <div className="friend-name ">{this.props.friend.username}</div>
                    </div>
                </div>
            </div>
        )
    }
}

