import React from 'react';

import Chart from '../../components/common/primitives/Chart/Chart';
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
      <Chart
        currentField={VIBRATION_FIRST}
        title="ВИБРАЦИЯ НА ОПОРЕ 1"
        data={vibrationFirst}
      />
      <Chart
        currentField={VIBRATION_SECOND}
        title="ВИБРАЦИЯ НА ОПОРЕ 2"
        data={vibrationSecond}
      />{' '}
      <Chart
        currentField={VIBRATION_THIRD}
        title="ВИБРАЦИЯ НА ОПОРЕ 3"
        data={vibrationThird}
      />{' '}
      <Chart
        currentField={VIBRATION_FOUR}
        title="ВИБРАЦИЯ НА ОПОРЕ 4"
        data={vibrationFour}
      />
    </>
  );
};

export default VibrationCharts;
