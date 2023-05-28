import React, { useMemo } from 'react';

import { Cell } from 'react-table';

import css from './ExhausterCard.module.scss';
import { TColumns } from '../../../Table/types';

import { ExhausterCardTableField } from './constant/tableConfig';
import { EStatus } from '../Indicator';

export const EExhausterStatus: Record<string, string> = {
  [EStatus.ERROR]: 'критическая неисправность',
  [EStatus.WARNING]: 'неисправность',
  [EStatus.NORMAL]: 'штатный режим',
};

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

        if (accessor === ExhausterCardTableField.CURRENT_STATUS) {
          return {
            ...customizedItem,
            Cell: ({ row: { original } }: Cell<any>) => {
              return (
                <div className={css[original[ExhausterCardTableField.CURRENT_STATUS]]}>
                  {EExhausterStatus[original[ExhausterCardTableField.CURRENT_STATUS]]}
                </div>
              );
            },
          };
        }

        if (accessor === ExhausterCardTableField.PREDICTED_MALFUNCTION) {
          return {
            ...customizedItem,
            Cell: ({ row: { original } }: Cell<any>) => {
              return (
                <div
                  className={
                    css[original[ExhausterCardTableField.PREDICTED_MALFUNCTION]]
                  }>
                  {
                    EExhausterStatus[
                      original[ExhausterCardTableField.PREDICTED_MALFUNCTION]
                    ]
                  }
                </div>
              );
            },
          };
        }

        return customizedItem;
      }),
    [columns]
  );
};
