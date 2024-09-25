import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DaySpent = () => {
  const [timeSpent, setTimeSpent] = useState(() => {
    const storedTimeSpent = localStorage.getItem('timeSpent');
    return storedTimeSpent ? parseInt(storedTimeSpent) : 2;
  });

  const [startTime, setStartTime] = useState(new Date().getTime());

  useEffect(() => {
    let intervalId;

    const updateTimeSpent = () => {
      const currentTime = new Date().getTime();
      const timeDiff = (currentTime - startTime) / (1000 * 60 * 60 * 24); // convert to minutes
      const newTimeSpent = Math.floor(timeDiff) + 2;
      setTimeSpent(newTimeSpent);
      localStorage.setItem('timeSpent', newTimeSpent.toString());
    };

    intervalId = setInterval(updateTimeSpent, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  const remainingTime = 7 - timeSpent;

  const getColorForMinute = (minute) => {
    const colors = [
       'green', 'blue', 'purple', 'orange', 'teal', 'pink', 'gold'
    ];
    return colors[minute % colors.length];
  };

  const chartData = {
    labels: ['Time Spent', 'Remaining Time'],
    datasets: [
      {
        data: [timeSpent, remainingTime],
        backgroundColor: [getColorForMinute(timeSpent), 'rgb(246, 27, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='progress-chart'> 

    <p className='progress-text'> {timeSpent} day streak🔥</p>

  
      <Doughnut data={chartData} />
    

    </div>
  );
};

export default DaySpent;


