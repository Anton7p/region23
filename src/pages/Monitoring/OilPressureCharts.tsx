import React from 'react';

import Chart from '../../components/common/primitives/Chart/Chart';

import oilPressure from '../../json/oilPressure.json';

const OIL_SYSTEM = 'ЭКСГАУСТЕР 4. ДАВЛЕНИЕ МАСЛА В СИСТЕМЕ';

const OilPressureCharts = () => {
  return (
    <Chart
      currentField={OIL_SYSTEM}
      title="ДАВЛЕНИЕ МАСЛА В СИСТЕМЕ"
      data={oilPressure}
    />
  );
};

export default OilPressureCharts;
