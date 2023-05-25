import React, { PropsWithChildren } from 'react';

import classNames from 'classnames';

import { LayoutProps } from './types';

import Header from '../Header/Header';

import styles from './Layout.module.scss';

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  title,
  tabList,
}) => {
  return (
    <div className={classNames(styles.home__background, styles.layout)}>
      <Header title={title} tabList={tabList} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
