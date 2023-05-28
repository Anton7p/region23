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
};

const emulate = (data: Record<string, number | string>[], currentField: string) => {
  data.length = 300;
  return data.map((item, i) => {
    if (i > 150 && i !== 180 && i !== 230) {
      delete item[currentField];
      return item;
    }
    if (i === 180) {
      item[currentField] = data[39][currentField];
    }
    if (i === 230) {
      item[currentField] = data[3][currentField];
    }
    return item;
  });
};

const Chart = ({ data, currentField }: TChart) => {
  return (
    <ResponsiveContainer>
      <LineChart
        width={1000}
        data={emulate(data, currentField).map((item) => {
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
          x={moment(data[150].DT).format('h:mm:ss')}
          strokeWidth={3}
          fillOpacity={10}
          stroke="var(--bs-primary)"
        />
        <ReferenceLine
          className={css.line}
          x={moment(data[180].DT).format('h:mm:ss')}
          strokeWidth={3}
          fillOpacity={10}
          label="M3"
          stroke="var(--bs-warning)"
        />
        <ReferenceLine
          className={css.line}
          x={moment(data[230].DT).format('h:mm:ss')}
          strokeWidth={3}
          fillOpacity={10}
          label="M1"
          stroke="var(--bs-danger)"
        />
        <CartesianGrid vertical strokeDasharray="10 10" />
        <XAxis dataKey="DT" />
        <YAxis minTickGap={2} dataKey={currentField} domain={['auto', 'auto']} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
