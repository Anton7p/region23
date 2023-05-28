import React from 'react';

import { useTable, UseTableOptions } from 'react-table';
import classNames from 'classnames';

import TableBody from './components/TableBody';

import TableHead from './components/TableHead';

import styles from './Table.module.scss';

import { TColumns } from './types';

export interface TableProps extends UseTableOptions<object> {
  columns: TColumns[];
  className?: string;
}

const Table: React.FC<TableProps> = ({ data, columns, className }) => {
  const options = { data, columns };
  const { headerGroups, rows, getTableBodyProps, prepareRow } = useTable(options);

  return (
    <table
      className={classNames({ [styles[className as string]]: className }, styles.table)}>
      <TableHead headerGroups={headerGroups} className={className} />
      <TableBody
        className={className}
        rows={rows}
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
      />
    </table>
  );
};

export default Table;
