import React, { useState, useEffect, Component } from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
export class Sidebar extends Component {
  render() {
    if (localStorage.getItem('isSignIn') == 'false') {
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
                <Link to='/Chat' className={'nav-links isDisabled'}>
                  <div className='nav-text'>Chat</div>
                </Link>
              </div>
              <div className='nav-item'>
                <Link to='/Setting' className={'nav-links isDisabled'}>
                  <div className='nav-text'>Settings</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="user container-fluid" style={{}}>
            <Link to={'/Login2'} className="row user-row" style={{}}>
              <div className="col-md-4" style={{}}>
                <img className="user-image" style={{}} src="user_icon.png" />
              </div>
              <div className="col-md-8" style={{}}>
                <div className="username" style={{ textAlign: "left" }}>{'Sign In'}</div>
              </div>
            </Link>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="sidebar">
          <div className="sidebar-container">
            <div className="nav-menu">
              <div className='nav-item'>
                <Link to='/' className='nav-links'>
                  <div className='nav-text'>Home</div>
                </Link>
              </div>
              <div className='nav-item'>
                <Link to='/Chat' className={'nav-links'}>
                  <div className='nav-text'>Chat</div>
                </Link>
              </div>
              <div className='nav-item'>
                <Link to='/Setting' className={'nav-links'}>
                  <div className='nav-text'>Settings</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="user container-fluid" style={{}}>
            <Link to={'/MyProfile'} className="row user-row" style={{}}>
              <div className="col-md-4" style={{}}>
                <img className="user-image" style={{}} src="user_icon.png" />
              </div>
              <div className="col-md-8" style={{}}>
                <div className="username" style={{ textAlign: "left" }}>{'Username'}</div>
              </div>
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default Sidebar
