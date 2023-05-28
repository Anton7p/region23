import React from 'react';

import Chart from '../../components/Chart/Chart';
import vibrationThird from '../../json/vibrationThird.json';
import vibrationFirst from '../../json/vibrationFirst.json';
import vibrationFour from '../../json/vibrationFour.json';
import vibrationSecond from '../../json/vibrationSecond.json';

const VIBRATION_FIRST = 'ЭКСГАУСТЕР 4. ВИБРАЦИЯ НА ОПОРЕ 1';
const VIBRATION_SECOND = 'ЭКСГАУСТЕР 4. ВИБРАЦИЯ НА ОПОРЕ 2';
const VIBRATION_THIRD = 'ЭКСГАУСТЕР 4. ВИБРАЦИЯ НА ОПОРЕ 3';
const VIBRATION_FOUR = 'ЭКСГАУСТЕР 4. ВИБРАЦИЯ НА ОПОРЕ 4';

const VibrationCharts = () => {
  return (
    <>
      <Chart currentField={VIBRATION_FIRST} data={vibrationFirst} />
      <Chart currentField={VIBRATION_SECOND} data={vibrationSecond} />{' '}
      <Chart currentField={VIBRATION_THIRD} data={vibrationThird} />{' '}
      <Chart currentField={VIBRATION_FOUR} data={vibrationFour} />
    </>
  );
};

export default VibrationCharts;
