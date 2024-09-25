import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faSwatchbook, faClipboardList, faBarsProgress, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import notifications from '../images/notifications.png';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NotificationsComponent() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(false);
  const [open, setOpen] = useState(false); // Set dialog initially closed

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
    // Set dialog to open when clicking Save Changes
    setOpen(true);
  };

  return (
    <>
      {/* Dialog box for deactivation confirmation */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Deactivate account
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className='notifications'>
        <div className="menu-card playing">
          <div className="menu-content">
            <div className='logo'><img src={image} alt="Logo" /></div>
            <div className='menu'>
              <ul>
                <li><FontAwesomeIcon icon={faGrip} className='icon' /><Link to="/dashboard" className="menu-link">Dashboard</Link></li>
                <li><FontAwesomeIcon icon={faSwatchbook} className='icon' /><Link to="/courses" className="menu-link">My Courses</Link></li>
                <li><FontAwesomeIcon icon={faClipboardList} className='icon' /><Link to="/classes" className="menu-link">My Classes</Link></li>
                <li><FontAwesomeIcon icon={faBarsProgress} className='icon' /><Link to="/progress" className="menu-link">Progress</Link></li>
                <li><FontAwesomeIcon icon={faMessage} className='icon' /><Link to="/messages" className="menu-link">Messages</Link></li>
                <li className="active"><FontAwesomeIcon icon={faBell} size="xl" style={{ marginRight: '8px', color: "red" }} />Notifications</li>
                <li><FontAwesomeIcon icon={faGear} className='icon' /><Link to="/settings" className="menu-link">Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="notifications-content">
          <Navbar />
          <div className="notification-container">
            <div className="N-container">
              <h2>Notifications</h2>
              <img src={notifications} alt="Settings" className="mt-14" />
            </div>
            <form onSubmit={handleSubmit} className="my-form">
              <div className="flex flex-col">
                <h2>Notification Settings</h2>

                <div className="form-group flex items-center">
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

              <button type="submit" className="w-22 mt-14 ml-24 px-5 z-30 py-2 bg-[#F61B01] rounded-md text-white">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
