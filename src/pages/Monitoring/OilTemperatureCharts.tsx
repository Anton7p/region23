import React from 'react';

import Chart from '../../components/common/primitives/Chart/Chart';
import oilTemperatureOilBlock from '../../json/oilTemperatureOilBlock.json';
import oilTemperatureOilSystem from '../../json/oilTemperatureSystem.json';

const OIL_BLOCK = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА МАСЛА В МАСЛОБЛОКЕ';
const OIL_SYSTEM = 'ЭКСГАУСТЕР 4. ТЕМПЕРАТУРА МАСЛА В СИСТЕМЕ';

const OilTemperatureCharts = () => {
  return (
    <>
      <Chart currentField={OIL_BLOCK} data={oilTemperatureOilBlock} />
      <Chart currentField={OIL_SYSTEM} data={oilTemperatureOilSystem} />
    </>
  );
};

export default OilTemperatureCharts;
