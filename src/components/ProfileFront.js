import React, { useState, useEffect } from "react";
import "../index.css";
import image from "../images/edu1.png";
import { getAuth } from "firebase/auth";

const ProfileFront = ({ profileImage = "", socialMediaLinks = [] }) => {
  const [user, setUser] = useState(null);

  // Function to fetch user info after login
  useEffect(() => {
    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    if (loggedInUser) {
      setUser({
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photo: loggedInUser.photoURL || profileImage, // fallback to default profile image if none
      });
    }
  }, [profileImage]);

  return (
    <div className="profile-front">
      <h1>Welcome!</h1>

      {user ? (
        <div>
          {/* Profile Image */}
          <div className="profile-image">
            <img src={user.photo} alt="User Profile" className="user-avatar" />
          </div>

          {/* User Name and Email */}
          <div className="user-name">
            <h2>{user.name}</h2>
            {/* <p>{user.email}</p> */}
          </div>
        </div>
      ) : (
        // Loading or fallback content
        <div>Loading user data...</div>
      )}

      {/* Additional Image */}
      <div className="edu">
        <img src={image} alt="" className=" " />
      </div>
    </div>
  );
};

export default ProfileFront;
