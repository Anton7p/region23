import React, { FC, useState } from 'react';

import { entries, map } from 'lodash';

import withLayout from '../../HOCs/withLayout';
import css from './Home.module.scss';

import HomeIndicator from './HomeIndicator';
import { Button } from '../../components/Button';
import exhausters from '../../json/common.json';
import { ExhausterCard } from '../../components/ExhausterCard';

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
        {map(entries(exhausters), ([exhausterNumber, exhausterValue]) => {
          return (
            <ExhausterCard
              key={exhausterValue.DT}
              exhausterValue={exhausterValue}
              exhausterNumber={exhausterNumber}
              additional={additional}
            />
          );
        })}
      </div>
    </div>
  );
};

export default withLayout(Home, {
  title: 'Агломерационный цех №2',
});
