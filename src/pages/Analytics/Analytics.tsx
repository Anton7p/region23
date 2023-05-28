import React from 'react';

import styles from './Analytics.module.scss';
import withLayout from '../../HOCs/withLayout';

import Table from '../../components/Table/Table';

import data from '../../json/messages.json';
import { MESSAGES_TABLE_CONFIG } from './constant/tableConfig';
import { useGetColumnsConfig } from './useGetColumnConfig';

const Analytics = () => {
  const columnsConfig = useGetColumnsConfig(MESSAGES_TABLE_CONFIG);
  return (
    <div className={styles.page}>
      <Table className="analytics" columns={columnsConfig} data={data} />
    </div>
  );
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
