// MyCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        className="" // Apply the desired height (e.g., h-48 for 200px)
      />
    </div>
  );
};

export default MyCalendar;
