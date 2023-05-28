import React, { useMemo } from 'react';

import css from './Analytics.module.scss';

import { TColumns } from '../../components/Table/types';

export const useGetColumnsConfig = (columns: TColumns[]) => {
  return useMemo(
    () =>
      columns.map((columnItem) => {
        const { accessor } = columnItem;

        const customizedItem = {
          ...columnItem,
          Header: () => {
            return <div className={css.headerCell}>{columnItem.header}</div>;
          },
        };
        console.log(accessor);
        return customizedItem;
      }),
    [columns]
  );
};
