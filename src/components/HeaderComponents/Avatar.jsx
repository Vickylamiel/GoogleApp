import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg';
import '../../assets/styles/avatar.css';


export default function Avatar() {
  return (
    <div>
      <img src={ProfilePic} alt="ProfilePic" className='profile_pic'/>
    </div>
  )
}
