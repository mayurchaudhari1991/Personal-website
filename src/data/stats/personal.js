import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const calculateAge = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-03-19T00:00:00'); // Set the time to midnight
    setAge(Math.floor((Date.now() - birthTime) / divisor));
  };

  useEffect(() => {
    calculateAge(); // Initial calculation
    const timer = setInterval(() => calculateAge(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 0,
    link:
      'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Pune, India',
  },
];

export default data;
