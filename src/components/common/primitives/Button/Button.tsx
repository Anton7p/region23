import React, { FC, ReactNode } from 'react';

import classnames from 'classnames';

import css from './Button.module.scss';

export interface ButtonTextProps {
  children: ReactNode;
  onClick: () => void;
  className: 'header' | 'card' | 'forecast';
}

export const Button: FC<ButtonTextProps> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={classnames(css[className], css.button)}
      onClick={onClick}>
      {children}
    </button>
  );
};
