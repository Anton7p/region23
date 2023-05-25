import React, { HTMLAttributes, useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useSearchParams } from 'react-router-dom';

import styles from './TabsPanel.module.scss';
import Select from '../common/primitives/CustomSelect/Select';

interface TabsProps extends HTMLAttributes<HTMLElement> {
  tabList?: { name: string; query: string }[] | [];
}

const TabsPanel: React.FC<TabsProps> = ({ children, tabList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? '';
  const activeTab = tabList && tabList.findIndex((item) => item.query === tab);
  const activeTabIndex = activeTab !== -1 ? activeTab : 0;

  const [tabIndex, setTabIndex] = useState(activeTabIndex);

  useEffect(() => {
    if (tabIndex !== activeTab && activeTab !== -1) {
      setTabIndex(activeTab);
    }
  }, [activeTab, tabIndex]);

  const changeTab = (query: string) => {
    setSearchParams({ tab: query });
  };
  if (!tabList) return null;
  return (
    <>
      <div className={styles.mobile}>
        <Select
          fieldName="tabList"
          state={tabList.find((item) => item.query === tab) || tabList[0]}
          searchField="name"
          options={tabList}
          setState={(item) => changeTab(item.query as string)}
        />
      </div>
      <div className={styles.desktop}>
        <Tabs
          className={styles.tabs}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}>
          <TabList className={styles.list}>
            {tabList.map((item) => (
              <Tab
                onClick={() => changeTab(item.query)}
                className={styles.tab}
                selectedClassName={styles.tab__active}
                key={item.name}>
                <span>{item.name}</span>
              </Tab>
            ))}
          </TabList>

          {tabList.map((item) => (
            <TabPanel className={styles.panel} key={item.query}>
              {children}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default TabsPanel;
