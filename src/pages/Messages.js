import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chatbox from "./Chatbox";
import {
  faGrip,
  faSwatchbook,
  faClipboardList,
  faBarsProgress,
  faMessage,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ContextProvider from "../Context/Context";

export default function Messages() {
  

  return (
    <ContextProvider>
      <div className="flex h-screen">
      

        {/* Main Chat Area */}
        <div className="flex-1">
          <Chatbox /> {/* Render the ChatBox outside the sidebar */}
        </div>
      </div>
    </ContextProvider>
  );
}
