import React, { useState, useEffect, Component } from 'react'
import history from "../../History";

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: localStorage.getItem('user'),
            email: localStorage.getItem('email'),
        };
    }
    render() {
        console.log("in the Edit page")
        const backToProfile = ()=>{
            history.push(`/MyProfile`);
            window.location.reload();
        }
        const handleChange_user = (e)=>{
            this.setState({ user: e.target.value });
        }
        const handleChange_email = (e)=>{
            this.setState({ email: e.target.value });
        }
        return (
            <div className="background-color" style={{ paddingLeft: '100px' }}>

                <div style={{ width: "700px" }}>
                    <div className="row" style={{ paddingTop: "100px", marginLeft: "100px"}}>
                        <img className="profile-image" src="userimage.jpeg" />
                        <div className="edit-button" style={{marginTop: "180px"}}>Edit Picture</div>
                    </div>
                    <input
                        type="text"
                        className="row box"
                        value={this.state.user}
                        placeholder="username"
                        onChange={handleChange_user}
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "100px",
                        }}
                    ></input>
                    <input
                        type="email"
                        className="row box"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={handleChange_email}
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "100px",
                        }}
                    ></input>
                    <div style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "100px",
                        }}>
                        <button className="button" style={{ marginBottom: '20px' }} onClick={backToProfile}>
                            Done
                        </button>
                        <button className="button" style={{ marginBottom: '20px',marginLeft:'20px', width: '200px' }}>
                            Change Password
                        </button>
                    </div>
                </div>


            </div>
        );
    }
}

export default EditProfile;


// import React from 'react';

// function EditProfile(props) {
//     return (
//         <div className="background-color" style={{ paddingLeft: '100px' }}>
//                  <div style={{ paddingTop: "100px" }}>
//                      <img className="profile-image" src="userimage.jpeg" />
//                  </div>
//                  <div className="profile-title">
//                      {localStorage.getItem('user')}
//                  </div>
//                  <div className="profile-data" style={{ marginBottom: '50px' }}>
//                      {localStorage.getItem('email')}
//                  </div>
//                  <div>
//                      <button className="button" style={{ marginBottom: '20px' }}>
//                          Done
//                      </button>
//                  </div>

//              </div>
//     );
// }

// export default EditProfile;