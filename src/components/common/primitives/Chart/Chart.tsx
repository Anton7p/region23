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

const format = (data: Record<string, number | string>[], currentField: string) => {
  return data.map((item, i) => {
    if (i > 500 && i !== 600 && i !== 700) {
      delete item[currentField];
      return item;
    }
    if (i === 600) {
      item[currentField] = data[390][currentField];
    }
    if (i === 700) {
      item[currentField] = data[30][currentField];
    }
    return item;
  });
};

const Chart = ({ data, currentField }: TChart) => {
  console.log(data[100].DT);

  return (
    <ResponsiveContainer>
      <LineChart
        width={1000}
        data={format(data, currentField).map((item) => {
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
          x={moment(data[500].DT).format('h:mm:ss')}
          strokeWidth={3}
          fillOpacity={10}
          label="Текущее значание"
          stroke="var(--bs-primary)"
        />
        <ReferenceLine
          className={css.line}
          x={moment(data[600].DT).format('h:mm:ss')}
          strokeWidth={3}
          fillOpacity={10}
          label="M3"
          stroke="var(--bs-warning)"
        />
        <ReferenceLine
          className={css.line}
          x={moment(data[700].DT).format('h:mm:ss')}
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
