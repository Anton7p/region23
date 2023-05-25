import React from 'react';

import classNames from 'classnames';

import styles from './Loader.module.scss';

type LoaderProps = Partial<Pick<HTMLDivElement, 'className'>> & {
  bgTheme?: 'default' | 'main';
  position?: 'center';
  size?: 's' | 'm';
};

const Loader: React.FC<LoaderProps> = ({ className, bgTheme, position, size = 'm' }) => {
  return (
    <div
      className={classNames(styles.loader, className, {
        [styles[`loader_${bgTheme}`]]: bgTheme,
        [styles[`loader_${position}`]]: position,
        [styles[`loader_${size}`]]: size,
      })}>
      <div
        className={classNames(styles.spinner, {
          [styles[`spinner_${size}`]]: size,
        })}
      />
    </div>
  );
};

export default Loader;
