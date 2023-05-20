import React from 'react';
import css from './AgloMachineCard.module.scss';

export const AgloMachineCard: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <div className={css.container}>{children}</div>
);
