import React from 'react';

import classNames from 'classnames';
import { HeaderGroup } from 'react-table';

import styles from './TableHead.module.scss';

type TTableHeadProps = {
  headerGroups: HeaderGroup<object>[];
  className?: string;
};

const TableHead: React.FC<TTableHeadProps> = ({ headerGroups, className }) => {
  return (
    <thead
      className={classNames({ [styles[className as string]]: className }, styles.head)}>
      {headerGroups?.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()} className={styles.head__tr}>
          {headerGroup.headers?.map((column) => {
            return (
              <th
                {...column.getHeaderProps({ style: { minWidth: column.minWidth } })}
                className={styles.head__th}>
                <div className={styles.headerContent}>{column.render('Header')}</div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
