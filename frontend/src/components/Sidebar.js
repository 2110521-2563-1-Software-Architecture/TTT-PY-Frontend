import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  const [isSignIn, setSignIn] = useState(false);
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
            <Link to='/Chat' className={isSignIn? 'nav-links':'nav-links isDisabled'}>
              <div className='nav-text'>Chat</div>
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/Setting' className={isSignIn? 'nav-links':'nav-links isDisabled'}>
              <div className='nav-text'>Settings</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="user container-fluid" style={{}}>
        <Link to="/Login" className="row user-row" style={{}}>
          <div className="col-md-4" style={{}}>
            <img className="user-image" style={{}} src="user_icon.png" />
          </div>
          <div className="col-md-8" style={{}}>
            <div className="username" style={{textAlign:"left"}}>Sign In</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
