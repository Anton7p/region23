import React from 'react';

import css from './Home.module.scss';
import { EStatus, Indicator } from '../../components/common/primitives/Indicator';

const HomeIndicator = () => {
  return (
    <div className={css.info}>
      <div className={css.info__name}>
        <Indicator status={EStatus.WARNING} />
        <span> предупреждение</span>
      </div>
      <div className={css.info__name}>
        <Indicator status={EStatus.ERROR} />
        <span>опасность</span>
      </div>
    </div>
  );
};

export default HomeIndicator;
