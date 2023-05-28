import { ExhausterCardTableField } from '../ExhausterCard/constant/tableConfig';
import { TMessage } from '../../pages/Analytics/types';

export type TColumns = {
  header: string;
  accessor: ExhausterCardTableField | TMessage;
  minWidth?: number;
};
