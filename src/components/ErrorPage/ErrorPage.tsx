import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './ErrorPage.module.scss';

type ErrorPageProps = {
  error?: number;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const renderButton = (err?: number) => {
    switch (err) {
      case 404:
        return (
          <NavLink to="/">
            <button type="button">{`error.${error}.button`}</button>
          </NavLink>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <div className={styles.description}>
          <h2 className={styles.title}>error.title {error}</h2>

          <span>{`error.${error}.text`}</span>
          {renderButton(error)}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
