import React from 'react';

import moment from 'moment';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import css from './Chart.module.scss';

export type TChart = {
  data: Record<string, number | string>[];
  currentField: string;
  title: string;
};

const Chart = ({ data, currentField, title }: TChart) => {
  return (
    <div className={css.chart}>
      <h3>{title}</h3>
      <ResponsiveContainer>
        <LineChart
          width={1000}
          data={data.map((item) => {
            return {
              ...item,
              DT: moment(item.DT).format('h:mm:ss'),
            };
          })}
          margin={{ top: 10, right: 10, bottom: 70, left: -24 }}>
          <Line
            dot={false}
            type="monotone"
            dataKey={currentField}
            stroke="var(--bs-primary)"
            connectNulls
          />
          <Legend />
          <ReferenceLine
            className={css.line}
            strokeWidth={3}
            y={252}
            fillOpacity={10}
            label="M1"
            stroke="var(--bs-red)"
          />
          <ReferenceLine
            className={css.line}
            y={248}
            strokeWidth={3}
            fillOpacity={10}
            label="M3"
            stroke="var(--bs-warning)"
          />
          <CartesianGrid vertical strokeDasharray="10 10" />
          <XAxis dataKey="DT" />
          <YAxis dataKey={currentField} domain={['auto', 'auto']} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
