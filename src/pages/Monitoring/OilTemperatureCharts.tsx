import React from 'react';

import Chart from '../../components/common/primitives/Chart/Chart';
import oilTemperatureOilBlock from '../../json/oilTemperatureOilBlock.json';
import oilTemperatureOilSystem from '../../json/oilTemperatureSystem.json';

const OIL_BLOCK = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА МАСЛА В МАСЛОБЛОКЕ';
const OIL_SYSTEM = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА МАСЛА В СИСТЕМЕ';

const OilTemperatureCharts = () => {
  return (
    <>
      <Chart
        currentField={OIL_BLOCK}
        title="ТЕМПЕРАТУРА МАСЛА В МАСЛОБЛОКЕ"
        data={oilTemperatureOilBlock}
      />
      <Chart
        currentField={OIL_SYSTEM}
        title="ТЕМПЕРАТУРА МАСЛА В СИСТЕМЕ"
        data={oilTemperatureOilSystem}
      />
    </>
  );
};

export default OilTemperatureCharts;
