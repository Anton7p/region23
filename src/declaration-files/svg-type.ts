import React from 'react';

export interface SvgIcon {
  className?: string | undefined;
  onClick?: (() => void) | undefined;
  style?: React.CSSProperties | undefined;
}

export type SvgIconType = React.FC<SvgIcon>;
