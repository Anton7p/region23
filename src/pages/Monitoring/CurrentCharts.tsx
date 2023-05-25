import React from 'react';

import Chart from '../../components/common/primitives/Chart/Chart';
import currentStator from '../../json/currentStator.json';
import currentRotorFirst from '../../json/currentRotorFirst.json';
import currentRotorSecond from '../../json/currentRotorSecond.json';

const STATOR = `ЭКСГАУСТЕР 4. ТОК СТАТОРА`;
const ROTOR_FIRST = `ЭКСГАУСТЕР 4. ТОК РОТОРА 1`;
const ROTOR_SECOND = `ЭКСГАУСТЕР 4. ТОК РОТОРА2`;

const CurrentCharts = () => {
  return (
    <>
      <Chart currentField={STATOR} title="ТОК СТАТОРА" data={currentStator} />
      <Chart currentField={ROTOR_FIRST} title="ТОК РОТОРА 1 " data={currentRotorFirst} />
      <Chart currentField={ROTOR_SECOND} title="ТОК РОТОРА 2" data={currentRotorSecond} />
    </>
  );
};

export default CurrentCharts;
