import React, { FC } from 'react';

import withLayout from '../../HOCs/withLayout';
import css from './Home.module.scss';

import { exhausters } from '../../components/common/primitives/Service/constants';
import { ExhausterCard } from '../../components/common/primitives/ExhausterCard';
import HomeIndicator from './HomeIndicator';

const Home: FC = () => {
  return (
    <div className={css.home}>
      <HomeIndicator />
      <div className={css.cards}>
        {exhausters.map((card) => (
          <ExhausterCard key={card.exhausterNumber} {...card} />
        ))}
      </div>
    </div>
  );
};

export default withLayout(Home, {
  title: 'Агломерационный цех №2',
});
