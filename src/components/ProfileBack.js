import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

export default function ProfileBack () {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);


  const handleProfilePictureChange = (event) => {
    // Handle profile picture upload here
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSave = () => {
   
    console.log('Profile data saved:', { userName, email, password, profilePicture });
  };

  return (
    <div className="profile-back">
      <h1>Profile
      </h1>
<div className="">
        <div className="rounded-full w-32 h-32 bg-gray-200 overflow-hidden">
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-2xl" />
            </div>
          )}
        </div>
        {/* <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="mt-2"
        /> */}
      </div>

      <p>change image</p>
      
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
         
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        
        />
        <button type="submit"
  class=" mt-2 px-6 z-30 py-2 bg-blue-500 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#0a66c2] hover:[text-shadow:2px_2px_2px_#fda4af] "
>
  Save changes
</button>
      </div>

     
     
    </div>
  );
};


