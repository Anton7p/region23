export enum ExhausterCardTableField {
  CURRENT_STATUS = 'Текущее состояние',
  PREDICTED_MALFUNCTION = 'M1',
  PREDICTED_MALFUNCTION_CRITICAL = 'M2',
}

export const EXHAUSTER_TABLE_CONFIG = [
  {
    header: 'Текущее состояние',
    accessor: ExhausterCardTableField.CURRENT_STATUS,
    minWidth: 100,
  },
  {
    header: 'Прогноз',
    accessor: ExhausterCardTableField.PREDICTED_MALFUNCTION,
    minWidth: 100,
  },
];
