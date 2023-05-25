import React, { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Container.module.scss';

type Props = PropsWithChildren<{ className: string }>;

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(styles.container, className)}>{children}</div>;
};

export default Container;
