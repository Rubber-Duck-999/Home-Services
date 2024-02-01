import React, { useState } from 'react';
import ValidateSensorsData from '../validators/sensors';
import AverageCard from '../components/average_card';

export default function Sensor() {
  let [data, setData] = useState([]);
  React.useEffect(() => {
    (async () => {
      const data = await ValidateSensorsData();
      setData(data);
    })();
  }, []);
  return (
    <AverageCard data={data} choice={true}/>
  );
};

