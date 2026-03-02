import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  const macFormat = date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).replace(/,/g, ''); 

  return (
    <div className="date-time">
      {macFormat}
    </div>
  );
};

export default DateTime;