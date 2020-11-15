import React, { useState, useEffect, Component } from 'react'
import history from "../../History";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('user'),
            email: localStorage.getItem('email'),
        };
    }
    render() {
        console.log("in the Edit page")
        const backToProfile = () => {
            history.push(`/MyProfile`);
            window.location.reload();
        }
        const handleChange_user = (e) => {
            this.setState({ user: e.target.value });
        }
        const handleChange_email = (e) => {
            this.setState({ email: e.target.value });
        }
        return (
            <div className="background-color" style={{ paddingLeft: '100px' }}>

                <div style={{ width: "700px" }}>
                    <div className="row" style={{ paddingTop: "100px", marginLeft: "100px" }}>
                        <img className="profile-image" src="userimage.jpeg" />
                        <button className="edit-button" data-toggle="modal" data-target="#basicExampleModal" style={{ marginTop: "180px" }}>Edit Picture</button>
                        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                            Launch demo modal
                        </button> */}
                    </div>

                    <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
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
                        <button className="button" style={{ marginBottom: '20px', marginLeft: '20px', width: '200px' }}>
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