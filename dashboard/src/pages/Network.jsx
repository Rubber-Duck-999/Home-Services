import React, { useState } from 'react';
import ValidateNetworkData from '../validators/network';
import AverageCard from '../components/average_card';

export default function Network() {
  let [data, setData] = useState([]);
  React.useEffect(() => {
    (async () => {
      const data = await ValidateNetworkData();
      setData(data);
    })();
  }, []);
  return (
    <AverageCard data={data} choice={false}/>
  );
};

