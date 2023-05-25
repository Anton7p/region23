import styles from './Analytics.module.scss';
import withLayout from '../../HOCs/withLayout';

const Analytics = () => {
  return <div className={styles.page}>123123</div>;
};

export default withLayout(Analytics, {
  title: 'Прогноз',
  tabList: [
    { name: 'ЭКСГАУСТЕР 4.', query: 'current' },
    { name: 'ЭКСГАУСТЕР 5.', query: 'oilTemperature' },
    { name: 'ЭКСГАУСТЕР 6.', query: 'oilPressure' },
    { name: 'ЭКСГАУСТЕР 7.', query: 'bearingTemperature' },
    { name: 'ЭКСГАУСТЕР 8.', query: 'vibration' },
    { name: 'ЭКСГАУСТЕР 9.', query: 'longitudinalVibration' },
  ],
});
