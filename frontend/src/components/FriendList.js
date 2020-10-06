import React, {Component} from "react";
import './FriendList.css';

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
                }
            ]
        }
    }
    render(){
        return(
            <div class="container">
                <div class="row">
                    <FriendListHeader/>
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

    async componentDidMount(){
        console.log(window.location.search)
        if (window.location.search) {
            let params = new URLSearchParams(window.location.search);
            var userId = params.get("userId");
            fetch("http://localhost:8081/friend")
                .then(res => res.json())
                .then((result)=>
                    console.log(result)
                    // this.setState({

                    // })
                )
            // var response = await Util.getChatUserBox(params.get("userId"));
            // this.onClickUser(response._id);
          }
    }
}

export default FriendList;

class FriendListHeader extends Component{
    render(){
        return(
            <div>
                <div class="friend-list-header">
                    <div class="col-4 " style={{ width:"100%"}}>
                        <div style={{ fontWeight: "bold"}}>Contact</div>
                        <button class="btn btn-dark" style={{backgroundColor:"black",color:"white",fontWeight:"bold"}}>Add Friend</button>
                        <div style={{ fontSize:"12px", color: "rgb(183, 186, 187)"}}>1 friends</div>                
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
