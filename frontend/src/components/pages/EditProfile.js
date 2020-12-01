import React, { useState, useEffect, Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import history from "../../History";
import Util from "../../Util";
import imgs from "../../assets/img.js"

function Pictures() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="edit-button" style={{ marginTop: "180px" }} onClick={handleShow}>
                Edit Picture
        </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose your profile picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card">
                        <div className="row">
                            <img className="card" src="https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg" alt="Card image cap" style={{ width: "200px", margin: "20px", objectFit: "scale-down" }} />
                            <img className="card" src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" alt="Card image cap" style={{ width: "200px", margin: "20px", objectFit: "contain" }} />
                            <img className="card" src="https://mdbootstrap.com/img/Photos/Slides/img%20(150).jpg" alt="Card image cap" style={{ width: "200px", margin: "20px", objectFit: "contain" }} />
                            <img className="card" src="https://mdbootstrap.com/img/Photos/Slides/img%20(138).jpg" alt="Card image cap" style={{ width: "200px", margin: "20px", objectFit: "contain" }} />
                            <img className="card" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="Card image cap" style={{ width: "200px", margin: "20px", objectFit: "contain" }} />
                            <img className="card" src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" alt="Card image cap" style={{ width: "200px", margin: "20px", objectFit: "contain" }} />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('user'),
            email: localStorage.getItem('email'),
        };
    }
    async componentDidMount() {
        const profileInfo = await Util.getMyprofile()
        await this.setState(profileInfo.data)
        console.log(profileInfo.data)
        console.log(this.state)
        console.log(imgs[1])
    }
    render() {
        console.log("in the Edit page")
        const backToProfile = () => {
            history.push(`/MyProfile`);
            window.location.reload();
        }
        const confirmChange = async () => {
            console.log(this.state.email)
            await Util.editMyProfile(this.state.firstName, this.state.lastName, this.state.email, this.state.img);
            history.push(`/MyProfile`);
            window.location.reload();
        }
        const handleChange_firstName = (e) => {
            this.setState({ firstName: e.target.value });
        }
        const handleChange_lastName = (e) => {
            this.setState({ lastName: e.target.value });
        }
        const handleChange_email = (e) => {
            this.setState({ email: e.target.value });
        }
        return (
            <div className="background-color" style={{ paddingLeft: '100px' }}>

                <div>
                    <div className="row" style={{ paddingTop: "100px", marginLeft: "100px" }}>
                        <img className="profile-image" src={this.state.img?imgs[this.state.img]:imgs[0]} />
                        <div style={{marginLeft: '20px'}}>
                            <div className="profile-title">
                                {this.state.username}
                            </div>
                            <div className="profile-data" style={{ marginBottom: '50px' }}>
                                {this.state.email}
                            </div>
                        </div>
                    </div>
                    <div className="profile-data" style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}>Select your avatar</div>
                    <div className="row" style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}>
                        {imgs.map((imgProfile, index) => {
                            const changeImageProfile = () => {
                                this.setState({ img: index })
                            }
                            return (<img className="image-collection" src={imgProfile} alt="Card image cap" onClick={changeImageProfile} />);
                        })}
                    </div>
                    <input
                        type="text"
                        className="row box"
                        value={this.state.firstName}
                        placeholder="first name"
                        onChange={handleChange_firstName}
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "100px",
                        }}
                    ></input>
                    <input
                        type="text"
                        className="row box"
                        value={this.state.lastName}
                        placeholder="last name"
                        onChange={handleChange_lastName}
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
                        <button className="button" style={{ marginBottom: '20px' }} onClick={confirmChange}>
                            Confirm
                        </button>
                        <button className="cancle-button" style={{ marginBottom: '20px', marginLeft: '20px' }} onClick={backToProfile}>
                            Cancle
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