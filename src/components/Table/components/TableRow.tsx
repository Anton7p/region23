import React, { FC } from 'react';

import { Row } from 'react-table';

import styles from './TableRow.module.scss';

type TableRowProps = {
  row: Row<object>;
};

const TableRow: FC<TableRowProps> = ({ row }) => {
  return (
    <tr className={styles.row__tr}>
      {row.cells?.map((cell) => {
        return (
          <td
            className={styles.row__td}
            {...cell.getCellProps({
              style: { minWidth: cell.column.minWidth },
            })}>
            {cell.render('Cell')}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
