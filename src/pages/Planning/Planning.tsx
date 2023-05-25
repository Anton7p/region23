import styles from './Planning.module.scss';
import withLayout from '../../HOCs/withLayout';

const Chart = () => {
  return <div className={styles.page}>123123</div>;
};

export default withLayout(Chart, {
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
