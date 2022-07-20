import React from 'react'
import avatar from '../Assets/images/avatar.png'
import '../Assets/Style/avatar.scss'


const Avatar = ({open}) => {
    return (
        <div className={`avatar-container ${open? 'open background':'close'}`}>
            <div className={`image ${open? 'null': 'background'}`}>
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
