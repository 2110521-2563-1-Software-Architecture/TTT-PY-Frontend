import React, { useState, useEffect, Component } from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Util from "../Util";
import imgs from "../assets/img.js"
export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  async componentDidMount() {
    const profileInfo = await Util.getMyprofile()
    await this.setState(profileInfo.data)
  }

  render() {
    let isSignIn = localStorage.getItem('isSignIn');
    let  user = "Sign In"
    if (isSignIn == 'true') {
      user = localStorage.getItem('user')
    }
      return (
        <div className="sidebar">
          <div className="sidebar-container">
            <div className="nav-menu">
              <div className='nav-item'>
                <Link to='/' className='nav-links'>
                  <div className='nav-text'>Home</div>
                </Link>
              </div>
              <div className='nav-item'>
                <Link to='/Chat' className={isSignIn == 'true'? 'nav-links':'nav-links isDisabled'}>
                  <div className='nav-text'>Chat</div>
                </Link>
              </div>
              <div className='nav-item'>
                <Link to='/Setting' className={isSignIn == 'true'? 'nav-links':'nav-links isDisabled'}>
                  <div className='nav-text'>Settings</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="user container-fluid" style={{}}>
            <Link to={isSignIn?'/MyProfile':'/Login'} className="row user-row" style={{}}>
              <div className="col-md-4" style={{}}>
                <img className="user-image" style={{}} src={this.state.img!=null?imgs[this.state.img]:"user_icon.png"} />
              </div>
              <div className="col-md-8" style={{}}>
                <div className="username" style={{ textAlign: "left" }}>{user}</div>
              </div>
            </Link>
          </div>
        </div>
      )
  }
}

export default Sidebar
