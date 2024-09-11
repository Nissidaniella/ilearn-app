import React, { useState } from "react";

const Notifications = () => {
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
     <h2 className="PS">Notifications</h2>
    <div className="notification-container">
      <form onSubmit={handleSubmit} className="my-form">
  <div className="flex flex-col ">
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

 

  <button type="submit" className=" mt-7 px-6 z-30 py-2 bg-blue-500 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#0a66c2] hover:[text-shadow:2px_2px_2px_#fda4af] ">Save Changes</button>
</form>



    </div></>
  );
};

export default Notifications;
