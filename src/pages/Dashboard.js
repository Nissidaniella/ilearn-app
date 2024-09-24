import React from "react";
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

import Buttons from "../components/Buttons";
import Navbar from "../components/Navbar";
import ProfileFront from "../components/ProfileFront";
import ProfileBack from "../components/ProfileBack";
// import Activity from "../components/Activity";

export default function Dashboard() {

//AIzaSyA0yiVthnCjgym7AgahdQny-7n6W7C8VYY  - youtube api key





  return (
    <div className="dashboard">
      <div class="menu-card  custom:block">
        <div class="menu-content">
          <div className="logo">
            <img src={image} alt="Logo-image" />
          </div>
          <div className="menu">
            <ul>
              <li className="active ">
                <FontAwesomeIcon
                  icon={faGrip}
                  size="xl"
                  style={{ marginRight: "3px" }}
                />{" "}
                Dashboard
              </li>
              <li>
                <FontAwesomeIcon icon={faSwatchbook} className="icon" />
                <Link to="/courses" className="menu-link">
                  My Courses
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faClipboardList} className="icon" />
                <Link to="/classes" className="menu-link">
                  My Classes
                </Link>
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
                  Chat box
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

      <div className="dashboard-content">
        <Navbar />

        <div className="dashboard-container flex flex-row md:flex-row">
          <div className="courses-link">
            <div className="courses-link-heading">
              {" "}
              <h1>Learning Hub</h1>
              <Link to="/courses" className="button-link">
                <Buttons />
              </Link>
            </div>

            <div class="cards">
              <div class="card red">
                <p class="text">Lorem Ipsum</p>
              </div>
              <div class="card blue">
                <p class="text">Lorem Ipsum</p>
              </div>
              <div class="card green">
                <p class="text">Lorem Ipsum</p>
              </div>
            </div>

            <div className="time-video flex">
              <div className="time bg-white"> timeee</div>
              <div className="video bg-white">vod</div>
            </div>

            <div className="assignments">
            <div className="courses-link-heading">
              {" "}
              <h1>Available Classes</h1>
              <Link to="/classes" className="button-link">
                <Buttons />
              </Link>
            </div>
              
              <a class="btn" href="#">
                I am a button
              </a>

              <a class="btn" href="#">
                I am a button
              </a>
              
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-card-inner">
              <div className="profile-card-front">
                <ProfileFront />
              </div>
              <div className="profile-card-back">
                <ProfileBack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}