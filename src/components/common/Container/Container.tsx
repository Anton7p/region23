import React from 'react';
import css from './Container.module.scss';

export const Container: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <div className={css.container}>{children}</div>
);
