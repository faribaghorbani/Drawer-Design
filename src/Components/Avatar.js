import React from 'react'
import avatar from '../Assets/images/avatar.png'


const Avatar = ({open}) => {
    return (
        <div className={`avatar-container ${open? 'open':'close'}`}>
            <div className='image'>
                <img src={avatar}/> 
            </div>
            <div className='description'>
                <p>Omer E</p>
                <p>Premium user</p>
            </div>
        </div>
    )
}

export default Avatar
