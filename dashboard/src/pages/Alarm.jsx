import React from 'react';
import AlarmCard from '../components/chakra_card';
import Title from '../components/title';

function Alarm() {
  return (
    <div>
      <Title title={"House Alarm Status"}/>
      <AlarmCard/>
    </div>
  );
};

export default Alarm;