import { useParams } from 'react-router';

import styles from './Monitoring.module.scss';
import withLayout from '../../HOCs/withLayout';
import Chart from '../../components/common/primitives/Chart/Chart';
// import { useSearchParams } from 'react-router-dom';
import currentStator from '../../json/currentStator.json';
import currentRotorFirst from '../../json/currentRotorFirst.json';
import currentRotorSecond from '../../json/currentRotorSecond.json';

const Monitoring = () => {
  const { id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const tab = searchParams.get('tab') ?? 'current';

  return (
    <div className={styles.page}>
      <Chart currentField={`ЭКСГАУСТЕР ${id || 4}. ТОК СТАТОРА`} data={currentStator} />
      <Chart
        currentField={`ЭКСГАУСТЕР ${id || 4}. ТОК РОТОРА 1`}
        data={currentRotorFirst}
      />
      <Chart
        currentField={`ЭКСГАУСТЕР ${id || 4}. ТОК РОТОРА2`}
        data={currentRotorSecond}
      />
    </div>
  );
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
