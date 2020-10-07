import React, {Component} from "react";
import './FriendList.css';
import axios from "axios";

export class FriendList extends Component{
    constructor(props){
        super(props);

        this.state = {
            friend_list:[
                {
                    name: "User1",
                    img : "userimage.jpeg"
                },
                {
                    name: "User 2",
                    img : "userimage.jpeg"
                },
                {
                    name: "User  3",
                    img : "userimage.jpeg"
                },
                {
                    name: "User   4",
                    img : "userimage.jpeg"
                },
                {
                    name: "User    5",
                    img : "userimage.jpeg"
                },
                {
                    name: "User     6",
                    img : "userimage.jpeg"
                },
            ],
            amounts: 12
        }
    }
    render(){
        return(
                <div class="col">
                    <FriendListHeader/>
                    <div class="friend-list-container">
                        {this.state.friend_list.map(friend => {
                            return (
                            <Friend key={friend.name} friend={friend} />
                            );
                        })}
                    </div>
                    <div class="col logout-container" style={{ padding:"2%",paddingLeft:"9%" ,width:"30%"}}>
                        <button class="btn btn-danger" style={{fontWeight:"bold", fontSize:"12.5px"}}>Sign out</button>
                    </div>
                </div>
        );
    }

    async componentDidMount(){
        // console.log(window.location.search)
        // if (window.location.search) {
        //     let params = new URLSearchParams(window.location.search);
            // var data = await Uint8ClampedArray.getFriends(params.get(""))
        
            // var response = await Util.getChatUserBox(params.get("userId"));
            // this.onClickUser(response._id);
          
    }
}

export default FriendList;

class FriendListHeader extends Component{
    render(){
        return(
            <div>
                <div class="friend-list-header">
                    <div class="row">
                        <div class="col-4 " style={{ width:"100%"}}>
                            <div style={{ fontWeight: "bold"}}>Contact</div>
                            <div style={{ fontSize:"12px", color: "var(--text-secondary-color)"}}>12 friends</div>                
                        </div>
                        <div class="col-4" style={{paddingLeft:"35%", paddingTop:"1.5%"}}>
                            <button class="btn btn-dark" style={{backgroundColor:"black",color:"white",fontWeight:"bold", 
                                fontSize:"13px", width:"100px", padding:""}}>Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Friend extends Component{
    render(){
        return(
            <a class="friend-list" href="#">
                <div className="friend-box row-12">
                    <img className="friend-image " src={this.props.friend.img} />
                    <div className="friend-name ">{this.props.friend.name}</div>
                </div>
            </a>
        )
    }
}
