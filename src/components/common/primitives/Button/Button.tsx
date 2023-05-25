import React, { FC, ReactNode } from 'react';

import classnames from 'classnames';

import css from './Button.module.scss';

export interface ButtonTextProps {
  children: ReactNode;
  className: 'header' | 'card' | 'forecast';
}

export const Button: FC<ButtonTextProps> = ({ children, className }) => {
  return (
    <button type="button" className={classnames(css[className], css.button)}>
      {children}
    </button>
  );
};
