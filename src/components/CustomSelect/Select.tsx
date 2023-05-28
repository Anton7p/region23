import React, { FC } from 'react';

import { get } from 'lodash';
import classNames from 'classnames';

import { ReactComponent as Arrow } from '../../assets/images/select_arrow.svg';

import styles from './Select.module.scss';
import { useActiveSelect } from './utils';
import { TSelectProps } from './types';

const Select: FC<TSelectProps> = ({
  fieldName,
  setState,
  options = [],
  state,
  searchField = 'value',
  text,
}) => {
  const { activeSelectName, openCloseOptions } = useActiveSelect(fieldName);

  const handleChangeValue = (item: Record<string, string | number>) => {
    setState(item);
    openCloseOptions();
  };

  return (
    <div className={classNames(styles[fieldName], styles.select)}>
      <button
        className={styles.button}
        type="button"
        id={fieldName}
        onClick={openCloseOptions}>
        {`${text ?? ''} ${get(state, searchField)}`}
        <Arrow
          id={fieldName}
          className={classNames(styles.arrow, { [styles.active]: activeSelectName })}
        />
      </button>
      {activeSelectName === fieldName && (
        <div
          className={styles.container}
          onClick={(e) => e.stopPropagation()}
          role="presentation">
          <div className={styles.options}>
            {options.map((item) => {
              return (
                <button
                  type="button"
                  className={styles.options__item}
                  key={item.id}
                  onClick={() => handleChangeValue(item)}>
                  <span>{`${text ?? ''} ${get(item, searchField)}`}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
