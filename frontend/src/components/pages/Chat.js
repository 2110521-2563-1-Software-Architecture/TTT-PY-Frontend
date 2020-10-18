import React from 'react'
import FriendList from '../FriendList'
import FriendProfile from '../FriendProfile'

function Chat() {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <FriendList/>
            </div>
            <div className='col-md-8'>
                <FriendProfile/>
            </div>
        </div>
    )
}

export default Chat
