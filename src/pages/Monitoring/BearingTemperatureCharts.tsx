import React from 'react';

import Chart from '../../components/Chart/Chart';

import bearingTemperatureFirst from '../../json/bearingTemperatureFirst.json';
import bearingTemperatureSecond from '../../json/bearingTemperatureSecond.json';
import bearingTemperatureThird from '../../json/bearingTemperatureThird.json';
import bearingTemperatureFour from '../../json/bearingTemperatureFour.json';

const BEARING_TEMPERATURE_FIRST = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА ПОДШИПНИКА НА ОПОРЕ 1';
const BEARING_TEMPERATURE_SECOND = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА ПОДШИПНИКА НА ОПОРЕ 2';
const BEARING_TEMPERATURE_THIRD = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА ПОДШИПНИКА НА ОПОРЕ 3';
const BEARING_TEMPERATURE_FOUR = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА ПОДШИПНИКА НА ОПОРЕ 4';

const VibrationCharts = () => {
  return (
    <>
      <Chart currentField={BEARING_TEMPERATURE_FIRST} data={bearingTemperatureFirst} />
      <Chart
        currentField={BEARING_TEMPERATURE_SECOND}
        data={bearingTemperatureSecond}
      />{' '}
      <Chart currentField={BEARING_TEMPERATURE_THIRD} data={bearingTemperatureThird} />{' '}
      <Chart currentField={BEARING_TEMPERATURE_FOUR} data={bearingTemperatureFour} />
    </>
  );
};

export default VibrationCharts;
