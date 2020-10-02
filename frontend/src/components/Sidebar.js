import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="nav-menu">
          <div className='nav-item'>
            <Link to='/Home' className='nav-links'>
              <div className='nav-text'>Home</div>
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/' className='nav-links isDisabled'>
              <div className='nav-text'>Chat</div>
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/' className='nav-links isDisabled'>
              <div className='nav-text'>Settings</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="user-profile">
        <div>
          <img className="user-image" src="userimage.jpeg" />
        </div>
        <div>
          <div className="username">Sign In</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
