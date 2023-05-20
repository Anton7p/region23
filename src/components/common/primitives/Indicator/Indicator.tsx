import React from "react";
import IndicatorIcon from '../../../../../public/images/indicator.svg'

import css from './Indicator.module.scss';
import cn from 'classnames';

export enum EStatus {
    ERROR = "error",
    NORMAL = "normal",
    WARNING = "warning",
}

export const Indicator = ({status}: { status: EStatus }) => {
    return (
        <div className={cn(css[status],css.container )}>
            <IndicatorIcon/>
        </div>
    )
};

