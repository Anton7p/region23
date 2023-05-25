import React from 'react';

import Chart from '../../components/common/primitives/Chart/Chart';

import longitudinalVibrationThird from '../../json/longitudinalVibrationThird.json';

import longitudinalVibrationFour from '../../json/longitudinalVibrationFour.json';

const VIBRATION_THIRD = 'ЭКСГАУСТЕР 4. ВИБРАЦИЯ НА ОПОРЕ 3. ПРОДОЛЬНАЯ.';
const VIBRATION_FOUR = 'ЭКСГАУСТЕР 4. ВИБРАЦИЯ НА ОПОРЕ 4. ПРОДОЛЬНАЯ.';

const LongitudinalVibrationCharts = () => {
  return (
    <>
      <Chart
        currentField={VIBRATION_THIRD}
        title="ВИБРАЦИЯ НА ОПОРЕ 3. ПРОДОЛЬНАЯ."
        data={longitudinalVibrationThird}
      />{' '}
      <Chart
        currentField={VIBRATION_FOUR}
        title="ВИБРАЦИЯ НА ОПОРЕ 4. ПРОДОЛЬНАЯ."
        data={longitudinalVibrationFour}
      />
    </>
  );
};

export default LongitudinalVibrationCharts;
