import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faSwatchbook, faClipboardList, faBarsProgress, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../components/Navbar";
import notifications from '../images/notifications.png';

export default function ()  {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(false);

  const handleEmailNotificationsChange = (event) => {
    setEmailNotifications(event.target.checked);
  };

  const handlePushNotificationsChange = (event) => {
    setPushNotifications(event.target.checked);
  };

  const handleInAppNotificationsChange = (event) => {
    setInAppNotifications(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <div className='notifications'>  
<div class="menu-card playing">
  
  
  
  

      <div class="menu-content">

   
   

   <div className='logo'><img src={image} alt="Logo-image" /></div>
        <div className='menu'>
          <ul>
          <li>
          <FontAwesomeIcon icon={faGrip} className='icon'/> 
          <Link to="/dashboard" className="menu-link">Dashboard</Link></li>

            <li>
            <FontAwesomeIcon icon={faSwatchbook} className='icon' />
            <Link to="/courses" className="menu-link">My Courses</Link>
             </li>

            <li>
            <FontAwesomeIcon icon={faClipboardList} className='icon' /> <Link to="/classes" className="menu-link">My Classes</Link>
              </li>

            <li>
            <FontAwesomeIcon icon={faBarsProgress} className='icon' />
            <Link to="/progress" className="menu-link">Progress</Link></li>

            <li> <FontAwesomeIcon icon={faMessage} className='icon' />
            <Link to="/messages" className="menu-link">Messages</Link></li>

            <li className="active">
            <FontAwesomeIcon icon={faBell} size="xl" style={{ marginRight: '8px', color: "red" }}/>
            Notifications</li>

            <li>
            <FontAwesomeIcon icon={faGear} className='icon' />
            <Link to="/settings" className="menu-link">Settings</Link></li>
          </ul>
        </div>

  </div>
</div>

<div className="notifications-content">
<Navbar/>


    <div className="notification-container">
      
      <div className="N-container">  <h2>Notifi</h2>   

      <img src={notifications} alt="Settings" className="mt-14"  />
      
       </div>
      
      
      <form onSubmit={handleSubmit} className="my-form ">
  <div className="flex flex-col ">

  <h2 >cations</h2>

    <div className="form-group flex items-center ">
      <input
        type="checkbox"
        checked={emailNotifications}
        onChange={handleEmailNotificationsChange}
        id="emailNotifications"
        className="mr-2"
      />
      <label htmlFor="emailNotifications">Email Notifications
        <p>Receive emails for updates.</p>
      </label>
    </div>

    <div className="form-group flex items-center">
      <input
        type="checkbox"
        checked={pushNotifications}
        onChange={handlePushNotificationsChange}
        id="pushNotifications"
        className="mr-2"
      />
      <label htmlFor="pushNotifications">Push Notifications
      <p>Real-time alerts on your device.</p>
      </label>
    </div>

     <div className="form-group flex items-center">
    <input
      type="checkbox"
      checked={inAppNotifications}
      onChange={handleInAppNotificationsChange}
      id="inAppNotifications"
      className="mr-2"
    />
    <label htmlFor="inAppNotifications">In-App Notifications
    <p>Alerts within the app.</p>
    </label>
  </div>
  </div>

 

  <button type="submit" className= "w-22 mt-14 ml-28 px-5 z-30 py-2 bg-[#F61B01]  rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  hover:[text-shadow:2px_2px_2px_#fda4af] ">Save Changes</button>

</form>



    </div>
</div>







    </div>

</>
  );
}


