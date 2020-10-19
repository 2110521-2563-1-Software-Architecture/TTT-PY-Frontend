import React from 'react'
import FriendList from '../FriendList'
import FriendProfile from '../FriendProfile'
import MyProfile from '../MyProfile'

function Friend() {
    return (
        <div className='row' style={{}}>
            <div className='col-md-4' style={{}}>
                <FriendList/>
            </div>
            <div className='col-md-8' style={{}}>
                <div style={{background: 'white', margin: 'auto', height: '100%'}}> No Friend</div>
            </div>
        </div>
    )
}

export default Friend
