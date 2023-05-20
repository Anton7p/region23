import css from './Button.module.scss';

import React, {FC, ReactNode} from "react";
import cn from "classnames";


export interface ButtonTextProps {
    children: ReactNode;
    className: string;
}

export const getClassName = (style: Record<string, string>, className: string) => {
    return style[className]
}
export const Button: FC<ButtonTextProps> = ({children, className}) => {
    return (
        <button type="button" className={cn(getClassName(css, className), css.button)}>
            {children}
        </button>
    )
};
