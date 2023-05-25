import { useSearchParams } from 'react-router-dom';

import styles from './Monitoring.module.scss';
import withLayout from '../../HOCs/withLayout';

import CurrentCharts from './CurrentCharts';
import OilTemperatureCharts from './OilTemperatureCharts';
import OilPressureCharts from './OilPressureCharts';
import BearingTemperatureCharts from './BearingTemperatureCharts';
import VibrationCharts from './VibrationCharts';
import LongitudinalVibrationCharts from './LongitudinalVibrationCharts';

const Monitoring = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'current';

  const renderCharts = () => {
    switch (tab) {
      case 'current':
        return <CurrentCharts />;
      case 'oilTemperature':
        return <OilTemperatureCharts />;
      case 'oilPressure':
        return <OilPressureCharts />;
      case 'bearingTemperature':
        return <BearingTemperatureCharts />;
      case 'vibration':
        return <VibrationCharts />;
      case 'longitudinalVibration':
        return <LongitudinalVibrationCharts />;
      default:
        return null;
    }
  };

  return <div className={styles.page}>{renderCharts()}</div>;
};

export default withLayout(Monitoring, {
  title: 'Параметры мониторинга',
  tabList: [
    { name: 'ТОК В СИСТЕМЕ', query: 'current' },
    { name: 'ТЕМПЕРАТУРА МАСЛА', query: 'oilTemperature' },
    { name: 'ДАВЛЕНИЕ МАСЛА', query: 'oilPressure' },
    { name: 'ТЕМПЕРАТУРА ПОДШИПНИКА', query: 'bearingTemperature' },
    { name: 'ВИБРАЦИЯ', query: 'vibration' },
    { name: 'ВИБРАЦИЯ ПРОДОЛЬНАЯ', query: 'longitudinalVibration' },
  ],
});
