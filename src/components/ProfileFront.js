import React  from 'react';
import '../index.css';
import image from '../images/edu1.png';

const ProfileFront = ({
    //  userName = 'User',
      profileImage = '', socialMediaLinks = [] }) => {
  return (
    <div className="profile-front">
      <h1>Welcome!
        </h1>
     
      
      <div className="profile-image">
        <img src={profileImage} alt="User Profile" />
      </div>
      <div className="user-name">     
        <h2>first name and last</h2></div>
        <div className='edu'>   <img src={image} alt="" className=' ' />  </div>
       
      

    </div>
  );
};

export default ProfileFront;
