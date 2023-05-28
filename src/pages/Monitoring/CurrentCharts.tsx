import React, { lazy } from 'react';

import currentStator from '../../json/currentStator.json';
import currentRotorFirst from '../../json/currentRotorFirst.json';
import currentRotorSecond from '../../json/currentRotorSecond.json';

const Chart = lazy(() => import('../../components/Chart/Chart'));

const STATOR = `ЭКСГАУСТЕР 4. ТОК СТАТОРА`;
const ROTOR_FIRST = `ЭКСГАУСТЕР 4. ТОК РОТОРА 1`;
const ROTOR_SECOND = `ЭКСГАУСТЕР 4. ТОК РОТОРА2`;

const CurrentCharts = () => {
  return (
    <>
      <Chart currentField={STATOR} data={currentStator} />
      <Chart currentField={ROTOR_FIRST} data={currentRotorFirst} />
      <Chart currentField={ROTOR_SECOND} data={currentRotorSecond} />
    </>
  );
};

export default CurrentCharts;
