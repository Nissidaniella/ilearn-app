import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faSwatchbook,
  faClipboardList,
  faBarsProgress,
  faMessage,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Classes() {
  return (
    <div className="classes">
      <div class="menu-card playing">
       

        <div class="menu-content">
       

          <div className="logo">
            <img src={image} alt="Logo-image" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGrip} className="icon" />
                <Link to="/dashboard" className="menu-link">
                  Dashboard
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faSwatchbook} className="icon" />
                <Link to="/courses" className="menu-link">
                  My Courses
                </Link>
              </li>

              <li className="active">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  size="xl"
                  style={{ marginRight: "8px" }}
                />
                My Classes
              </li>

              <li>
                <FontAwesomeIcon icon={faBarsProgress} className="icon" />
                <Link to="/progress" className="menu-link">
                  Progress
                </Link>
              </li>

              <li>
                {" "}
                <FontAwesomeIcon icon={faMessage} className="icon" />
                <Link to="/messages" className="menu-link">
                  Messages
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faBell} className="icon" />
                <Link to="/notifications" className="menu-link">
                  Notifications
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faGear} className="icon" />
                <Link to="/settings" className="menu-link">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h1>gffxtrfxxxxxxrrrrrrrrrrrrrrrrr</h1>

     
    </div>
  );
}
