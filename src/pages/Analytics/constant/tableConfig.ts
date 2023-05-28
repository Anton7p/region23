import { TMessage } from '../types';

export const MESSAGES_TABLE_CONFIG = [
  {
    header: 'номер',
    accessor: TMessage.NUMBER,
  },
  {
    header: 'МАШИНА',
    accessor: TMessage.MACHINE,
  },
  {
    header: 'ИМЯ МАШИНЫ',
    accessor: TMessage.MACHINE_NAME,
  },
  {
    header: 'ТЕХ. МЕСТО',
    accessor: TMessage.TECH_PLACE,
  },
  {
    header: 'НАЗВАНИЕ ТЕХ. МЕСТА',
    accessor: TMessage.TECH_PLACE_NAME,
  },
  {
    header: 'ВИД СООБЩЕНИЯ',
    accessor: TMessage.MESSAGE_TYPE,
  },
  {
    header: 'ОПИСАНИЕ',
    accessor: TMessage.DESCRIPTION,
  },
  {
    header: 'ДАТА НАЧАЛА НЕИСПРАВНОСТИ',
    accessor: TMessage.START_DATE,
  },
  {
    header: 'ДАТА УСТРАНЕНИЯ НЕИСПРАВНОСТИ',
    accessor: TMessage.END_DATE,
  },
];
