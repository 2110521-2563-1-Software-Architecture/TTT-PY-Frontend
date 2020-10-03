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
      <div className="user" style={{backgroundColor:"yellow"}}>
        <Link to="/Login" className="row user-row" style={{backgroundColor:"blue"}}>
          <div className="col-md-4" style={{backgroundColor:"red", width:"100%"}}>
            <img className="user-image" style={{paddingLeft:"10px"}} src="user_icon.png" />
          </div>
          <div className="col-md-8" style={{backgroundColor:"green", width:"100%"}}>
            <div className="username" style={{paddingLeft:"10px", textAlign:"right"}}>Sign In</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
