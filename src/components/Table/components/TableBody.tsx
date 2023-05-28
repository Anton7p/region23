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
  className?: string;
};

const TableBody: React.FC<BodyProps> = ({
  rows,
  getTableBodyProps,
  prepareRow,
  className,
}) => {
  return (
    <tbody {...getTableBodyProps()} className={styles.body}>
      {rows.map((row) => {
        prepareRow(row);
        return <TableRow row={row} className={className} />;
      })}
    </tbody>
  );
};

export default TableBody;
