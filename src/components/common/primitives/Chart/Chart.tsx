import React from 'react';

import moment from 'moment';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import css from './Chart.module.scss';

export type TChart = {
  data: Record<string, number | string>[];
  currentField: string;
};

const Chart = ({ data, currentField }: TChart) => {
  return (
    <div className={css.chart}>
      <h3>{currentField}</h3>
      <ResponsiveContainer>
        <LineChart
          width={1000}
          data={data.map((item) => {
            return {
              ...item,
              DT: moment(item.DT).format('h:mm:ss'),
            };
          })}
          margin={{ top: 10, right: 20, bottom: 70, left: -20 }}>
          <Line
            dot={false}
            type="monotone"
            dataKey={currentField}
            stroke="var(--bs-primary)"
            connectNulls
          />
          <CartesianGrid vertical strokeDasharray="10 10" />
          <XAxis dataKey="DT" />
          <YAxis dataKey={currentField} domain={['auto', 'auto']} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
