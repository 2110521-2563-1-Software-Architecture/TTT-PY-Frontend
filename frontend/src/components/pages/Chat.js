import React from 'react'
import FriendList from '../FriendList'
import FriendProfile from '../FriendProfile'
import MyProfile from '../MyProfile'

function Chat() {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <FriendList/>
            </div>
            <div className='col-md-8'>
                <MyProfile/>
            </div>
        </div>
    )
}

export default Chat
