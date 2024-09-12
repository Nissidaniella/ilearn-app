import React from 'react';
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faSwatchbook, faClipboardList, faBarsProgress, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
export default function Progress() {
  return (
    <div className='progress'>  
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
            <FontAwesomeIcon icon={faClipboardList}className='icon' />
              <Link to="/classes" className="menu-link">My Classes</Link></li>

            <li className="active">
            <FontAwesomeIcon icon={faBarsProgress} size="xl" style={{ marginRight: '8px' }} />
            Progress</li>

            <li> <FontAwesomeIcon icon={faMessage} className='icon' />
            <Link to="/messages" className="menu-link">Messages</Link></li>

            <li>
            <FontAwesomeIcon icon={faBell} className='icon'/>
            <Link to="/notifications" className="menu-link">Notifications</Link></li>

            <li>
            <FontAwesomeIcon icon={faGear} className='icon' />
            <Link to="/settings" className="menu-link">Settings</Link></li>
          </ul>
        </div>

  </div>
</div>





    </div>
  );
}


