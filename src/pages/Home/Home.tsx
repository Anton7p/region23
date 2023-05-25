import React, { FC, useState } from 'react';

import withLayout from '../../HOCs/withLayout';
import css from './Home.module.scss';

import { exhausters } from '../../components/common/primitives/Service/constants';
import { ExhausterCard } from '../../components/common/primitives/ExhausterCard';
import HomeIndicator from './HomeIndicator';
import { Button } from '../../components/common/primitives';

const Home: FC = () => {
  const [additional, setAdditional] = useState(false);
  return (
    <div className={css.home}>
      <div className={css.control}>
        <HomeIndicator />
        <Button className="additional" onClick={() => setAdditional((prev) => !prev)}>
          {additional ? 'Скрыть параметры опор' : 'Показать параметры опор'}
        </Button>
      </div>
      <div className={css.cards}>
        {exhausters.map((card) => (
          <ExhausterCard key={card.exhausterNumber} {...card} additional={additional} />
        ))}
      </div>
    </div>
  );
};

export default withLayout(Home, {
  title: 'Агломерационный цех №2',
});
