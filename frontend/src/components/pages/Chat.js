import React from 'react'
import ChatRoomComponent from '../ChatRoomComponent'
import FriendList from '../FriendList'

function Chat() {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <FriendList/>
            </div>
            <div className='col-md-8'>
                <ChatRoomComponent/>
            </div>
        </div>
    )
}

export default Chat
