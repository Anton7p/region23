import React, { FC } from 'react';

import classNames from 'classnames';
import { Row } from 'react-table';

import styles from './TableRow.module.scss';

type TableRowProps = {
  row: Row<object>;
  className?: string;
};

const TableRow: FC<TableRowProps> = ({ row, className }) => {
  return (
    <tr
      className={classNames(
        {
          [styles[className as string]]: className,
        },
        styles.row__tr
      )}>
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
