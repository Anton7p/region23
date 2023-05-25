import React, { PropsWithChildren } from 'react';

import styles from './Header.module.scss';

import TabsPanel from '../TabsPanel/TabsPanel';
import Sidebar from '../Sidebar/Sidebar';

type HeaderProps = {
  title?: string;
  tabList?: { name: string; query: string; element?: JSX.Element }[] | [];
};

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
  tabList,
}) => {
  return (
    <>
      <header className={styles.header}>
        <Sidebar />

        {title && (
          <div className={styles.header__title}>
            <h1>{title}</h1>
          </div>
        )}
        <div className={styles.header__container}>
          <TabsPanel tabList={tabList}>{children}</TabsPanel>
        </div>
      </header>
    </>
  );
};

export default Header;
