import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { getAuth, updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../index.css';
import { getAuth, updateProfile, } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ProfileBack({ user, setUser }) {
  const [userName, setUserName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
   const [profilePicture, setProfilePicture] = useState(null);

  const auth = getAuth();
  const storage = getStorage();

  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSave = async () => {
    try {
      let photoURL = user.photo;
      
      // 1. Update profile picture if a new one is selected
      if (profilePicture) {
        const profilePictureRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);
        await uploadBytes(profilePictureRef, profilePicture);
        photoURL = await getDownloadURL(profilePictureRef);

        await updateProfile(auth.currentUser, { photoURL });
      }

      // 2. Update username
      if (userName !== user.name) {
        await updateProfile(auth.currentUser, { displayName: userName });
      }

     
      // Update user state in the parent component
      setUser({
        ...user,
        name: userName,
        email: email,
        photo: photoURL,
      });

      // Clear input fields after save
      setUserName('');
      setEmail('');
           setProfilePicture(null);

      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="profile-back">
      <h1>Profile</h1>

      <div className="">
        <div className="rounded-full w-32 h-32 bg-gray-200 overflow-hidden">
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="object-cover w-full h-full" />
          ) : user && user.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="object-cover w-full h-full" />
          ) : (


            <div className="flex items-center justify-center h-full">
              <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-2xl" />
            </div>
          )}
        </div>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="mt-2"
        />
      </div>

      <p>Change image</p>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
       
 
        <button
          type="submit"
          onClick={handleSave}
          className="mt-7 px-6 z-30 py-2 bg-[#F61B01] rounded-md text-white"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
