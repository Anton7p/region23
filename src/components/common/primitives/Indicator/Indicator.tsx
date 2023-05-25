import React from 'react';

import classnames from 'classnames';

import { ReactComponent as IndicatorIcon } from '../../../../assets/images/indicator.svg';

import css from './Indicator.module.scss';

export enum EStatus {
  ERROR = 'error',
  NORMAL = 'normal',
  WARNING = 'warning',
}

export const Indicator = ({ status }: { status: EStatus }) => {
  return (
    <div className={classnames(css[status], css.container)}>
      <IndicatorIcon />
    </div>
  );
};
