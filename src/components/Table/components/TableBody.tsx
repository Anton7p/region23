import React from 'react';

import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';

import TableRow from './TableRow';

import styles from './TableBody.module.scss';

type BodyProps = {
  rows: Row<object>[];
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<object> | undefined
  ) => TableBodyProps;
  prepareRow: (row: Row<object>) => void;
};

const TableBody: React.FC<BodyProps> = ({ rows, getTableBodyProps, prepareRow }) => {
  return (
    <tbody {...getTableBodyProps()} className={styles.body}>
      {rows.map((row) => {
        prepareRow(row);
        return <TableRow row={row} />;
      })}
    </tbody>
  );
};

export default TableBody;
