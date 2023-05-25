import React, { useState } from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { ReactComponent as DoubleArrows } from '../../assets/images/doubleArrow.svg';

import styles from './Sidebar.module.scss';
import { useGetSectionsForHomePage } from './utils';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { navigationConfig } = useGetSectionsForHomePage();

  return (
    <div className={classNames(styles.sidebar, open && styles.sidebar__active)}>
      <button
        type="button"
        className={classNames(styles.button, {
          [styles.button__open]: open,
        })}
        onClick={() => setOpen((prev) => !prev)}>
        <DoubleArrows />
      </button>
      <div
        className={classNames(styles.navigation, {
          [styles.navigation__open]: open,
        })}>
        {navigationConfig.map((item) => (
          <Link to={item.link} key={item.link} className={styles.navigation__link}>
            <div className={styles.navigation__icon}>{item.icon}</div>

            <span className={styles.navigation__text}>{item.text}</span>
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__logo} />
        <span className={styles.footer__text}>User</span>
      </div>
    </div>
  );
};

export default Sidebar;
