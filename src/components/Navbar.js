import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { getAuth } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();




  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    if (loggedInUser) {
      setUser({
        name: loggedInUser.displayName,
 
      });
    }
  }, []);

  return (
    <>
      
        <div className="nav-bar">
          <div className="search-container">
            <input type="text" required="required" />
            <label>Search courses..</label>
            <i></i>
          </div>

          <div className="dropdown">
          Hi {user && user.name}!
            <button className="dropbtn" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} /> 
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/login">Logout</Link>
              </div>
            )}
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
