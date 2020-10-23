import React, { Component } from "react";
import './FriendList.css';
import Util from '../Util';

export class FriendList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friend_list: [
                {
                    name: "Usergfgfg1",
                    img: "userimage.jpeg"
                },
                {
                    name: "User 2",
                    img: "userimage.jpeg"
                },
                {
                    name: "User  3",
                    img: "userimage.jpeg"
                },
                {
                    name: "User   4",
                    img: "userimage.jpeg"
                },
                {
                    name: "User    5",
                    img: "userimage.jpeg"
                },
                {
                    name: "User     6",
                    img: "userimage.jpeg"
                },
                {
                    name: "User     7",
                    img: "userimage.jpeg"
                },
                {
                    name: "User     8",
                    img: "userimage.jpeg"
                },
                {
                    name: "User     9",
                    img: "userimage.jpeg"
                },
                {
                    name: "User     10",
                    img: "userimage.jpeg"
                },
            ],
            amounts: 12
        }
    }
    render() {
        return (
            <div className="row">
                <div className='col-md-12'>
                    <FriendListHeader />
                    <div class="friend-list-container">
                        {this.state.friend_list.map(friend => {
                            return (
                                <Friend key={friend.name} friend={friend} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        // console.log(window.location.search)
        // if (window.location.search) {
        //     let params = new URLSearchParams(window.location.search);
        // var data = await Uint8ClampedArray.getFriends(params.get(""))

        var response = await Util.getFriend();
        // this.onClickUser(response._id);

    }
}

export default FriendList;

class FriendListHeader extends Component {
    render() {
        return (
            <div>
                <div class="friend-list-header">
                    <div class="row">
                        <div class="col-md-4" style={{  }}>
                            <div style={{ fontWeight: "bold" }}>Contact</div>
                            <div style={{ fontSize: "12px", color: "var(--text-secondary-color)" }}>12 friends</div>
                        </div>
                        <div class="col-md-8" style={{ paddingLeft: "35%", paddingTop: "1.5%" }}>
                            <button class="btn btn-dark" style={{
                                backgroundColor: "black", color: "white", fontWeight: "bold",
                                fontSize: "13px", width: "100px", padding: ""
                            }}>Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Friend extends Component {
    render() {
        return (
            <div>
                <div className="row friend-box" style={{ marginLeft: "15px" }}>
                    <div className='col-md-4' style={{ width: '100%', margin: 'auto' }}>
                        <img className="friend-image " src={this.props.friend.img} />
                    </div>
                    <div className='col-md-8' style={{ width: '100%', margin: 'auto' }}>
                        <div className="friend-name ">{this.props.friend.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}
