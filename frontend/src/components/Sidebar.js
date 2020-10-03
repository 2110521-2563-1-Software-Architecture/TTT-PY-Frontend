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
      <div className="user">
        <Link to="/Login" className="row user-row">
          <div className="col-md-3" style={{}}>
            <img className="user-image" style={{marginLeft:"10px"}} src="user_icon.png" />
          </div>
          <div className="col-md-9" style={{}}>
            <div className="username" style={{paddingLeft:"10px"}}>Sign In</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
