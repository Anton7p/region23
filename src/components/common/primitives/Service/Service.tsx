import css from './Service.module.scss';
import React from 'react';
import { EStatus, Indicator } from '../Indicator';
import { exhausters } from './constants';
import { ExhausterCard } from '../ExhausterCard';

export const Service = () => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <div className={css.name}>
          <Indicator status={EStatus.WARNING} />
          <span> предупреждение</span>
        </div>
        <div className={css.name}>
          <Indicator status={EStatus.ERROR} />
          <span>опасность</span>
        </div>
      </div>
      <div className={css.title}>Агломерационный цех №2</div>
      <div className={css.cards}>
        {exhausters.map((card: any) => {
          return <ExhausterCard key={card.exhausterNumber} {...card} />;
        })}
      </div>
    </div>
  );
};
