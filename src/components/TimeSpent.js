import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const TimeSpent = () => {
  const [timeSpend, setTimeSpend] = useState(() => {
    const storedTimeSpend = localStorage.getItem('timeSpent');
    return storedTimeSpend ? parseInt(storedTimeSpend) : 0;
  });

  const [startTime, setStartTime] = useState(new Date().getTime());

  useEffect(() => {
    let intervalId;

    const updateTimeSpent = () => {
      const currentTime = new Date().getTime();
      const timeDiff = (currentTime - startTime) / 1000 / 60; // convert to minutes
      const newTimeSpend = Math.floor(timeDiff);
      setTimeSpend(newTimeSpend);
      localStorage.setItem('timeSpend', newTimeSpend.toString());
    };

    intervalId = setInterval(updateTimeSpent, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  const remainingTime = 60 - timeSpend;

  const getColorForMinute = (minute) => {
    const colors = [
      'red', 'green', 'blue', 'purple', 'orange', 'teal', 'pink', 'gold, orange, black'
    ];
    return colors[minute % colors.length];
  };

  const chartData = {
    labels: [`Spent ${timeSpend} min`, `Remaining ${remainingTime} min`],
    datasets: [
      {
        data: [timeSpend, remainingTime],
        backgroundColor: [getColorForMinute(timeSpend), 'rgb(2, 11, 170)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='progress-chart'>
     <p className='progress-text'> {timeSpend} minutes on the app.</p>
      <Doughnut data={chartData} />
    </div>
  );
};

export default TimeSpent;









