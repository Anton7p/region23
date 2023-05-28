import React from 'react';

import { useTable, UseTableOptions } from 'react-table';

import TableBody from './components/TableBody';

import TableHead from './components/TableHead';

import styles from './Table.module.scss';

import { TColumns } from './types';

export interface TableProps extends UseTableOptions<object> {
  columns: TColumns[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const options = { data, columns };
  const { headerGroups, rows, getTableBodyProps, prepareRow } = useTable(options);

  return (
    <div className={styles.tableBox}>
      <table className={styles.table}>
        <TableHead headerGroups={headerGroups} />
        <TableBody
          rows={rows}
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
        />
      </table>
    </div>
  );
};

export default Table;
