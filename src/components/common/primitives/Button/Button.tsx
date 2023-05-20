import css from './Button.module.scss';

import React, {FC, ReactNode} from "react";
import cn from "classnames";


export interface ButtonTextProps {
    children: ReactNode;
    className: string;
}

export const Button: FC<ButtonTextProps> = ({children, className}) => {
    return (
        <button type="button" className={cn(css[className], css.button)}>
            {children}
        </button>
    )
};
