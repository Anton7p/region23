import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import classNames from 'classnames';

import css from './ExhausterCard.module.scss';

import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrow_left.svg';
import { ReactComponent as OilIcon } from '../../../../assets/images/oil.svg';
import { ReactComponent as ExhausterFirstIcon } from '../../../../assets/images/aglo_roto_1.svg';
import { ReactComponent as ExhausterSecondIcon } from '../../../../assets/images/aglo_roto_2.svg';
import { ReactComponent as ExhausterThirdIcon } from '../../../../assets/images/aglo_roto_3.svg';
import { ReactComponent as ExhausterFourIcon } from '../../../../assets/images/aglo_roto_4.svg';
import { ReactComponent as TemperatureIcon } from '../../../../assets/images/temperature.svg';
import { ReactComponent as VibrationIcon } from '../../../../assets/images/vibration.svg';
import { ReactComponent as ElectricIcon } from '../../../../assets/images/electric.svg';
import { EStatus, Indicator } from '../Indicator';
import { Button } from '../Button';
import Select from '../CustomSelect/Select';

import { urls } from '../../../../constants/urls';

export type TExhauster = {
  status: EStatus;
  exhausterNumber: number;
  rotors: TRotor[];
};

export const getRotorIcon = (rotorNumber: number) => {
  switch (rotorNumber) {
    case 2:
      return <ExhausterSecondIcon />;
    case 3:
      return <ExhausterThirdIcon />;
    case 4:
      return <ExhausterFourIcon />;
    default:
      return <ExhausterFirstIcon />;
  }
};

export type TRotor = {
  rotorNumber: number;
  lastReplacementDate: string;
  forecastReplacementDate: number;
  forecastDate: number;
  forecastReplacementStatus: EStatus;
  oilLevel: number;
  oilLevelStatus: EStatus;
  vibration: number;
  temperature: number;
  vibrationStatus: EStatus;
  temperatureStatus: EStatus;
};
type TExhausterCardProps = {
  additional: boolean;
} & TExhauster;
export const ExhausterCard = ({
  status,
  exhausterNumber,
  rotors,
  additional,
}: TExhausterCardProps) => {
  const [activeRotor, setActiveRotor] = useState<TRotor>(rotors[0]);
  const navigate = useNavigate();
  const handleRouteChange = (id: number) => {
    navigate(`/${urls.monitoring}/${id}`);
  };
  return (
    <div className={css.card}>
      <div className={css.title}>
        <div className={css.name}>
          <Indicator status={status} />
          <span> {`Эксгаустер №${exhausterNumber}`}</span>
        </div>
        <Button className="card" onClick={() => handleRouteChange(exhausterNumber)}>
          Параметры <ArrowIcon />
        </Button>
      </div>
      <div className={css.forecast}>
        {activeRotor && (
          <div className={css.forecast__replacement}>
            <span className={css.forecast__replacement__title}>
              Последняя замена ротера
            </span>
            <div className={css.forecast__replacement__content}>
              <span
                className={
                  css.content__date
                }>{`${activeRotor.forecastReplacementDate} сут`}</span>
              <div className={css.content__forecast}>
                <span>
                  Прогноз <Indicator status={activeRotor.forecastReplacementStatus} />
                </span>
                <span>{`${activeRotor.forecastDate} сут`}</span>
              </div>
            </div>
          </div>
        )}
        {activeRotor && (
          <div className={css.property}>
            <div className={css.property__content}>
              <span className={css.property__content__title}>
                <ElectricIcon />
                Ток ротора
              </span>
              <span className={css.property__content__value}>
                {activeRotor.oilLevel} A
              </span>
              <Indicator status={activeRotor.oilLevelStatus} />
            </div>
            <div className={css.property__content}>
              <span className={css.property__content__title}>
                <ElectricIcon />
                Ток статора
              </span>
              <span className={css.property__content__value}>
                {activeRotor.oilLevel} A
              </span>
              <Indicator status={activeRotor.oilLevelStatus} />
            </div>
            <div className={css.property__content}>
              <span className={css.property__content__title}>
                <OilIcon />
                Давление масла в системе
              </span>
              <span className={css.property__content__value}>
                {activeRotor.oilLevel} кПа
              </span>
              <Indicator status={activeRotor.oilLevelStatus} />
            </div>
            <div className={css.property__content}>
              <span className={css.property__content__title}>
                <TemperatureIcon />
                Температура масла в системе
              </span>
              <span className={css.property__content__value}>
                {activeRotor.temperature} С
              </span>
              <Indicator status={activeRotor.temperatureStatus} />
            </div>
            <div className={css.property__content}>
              <span className={css.property__content__title}>
                <TemperatureIcon />
                Температура масла в маслоблоке
              </span>
              <span className={css.property__content__value}>
                {activeRotor.temperature} С
              </span>
              <Indicator status={activeRotor.temperatureStatus} />
            </div>
          </div>
        )}
      </div>

      <div className={classNames({ [css.open]: !additional }, css.additional)}>
        <div className={css.forecast__item}>
          <div className={css.forecast__item__date}>
            <Select
              text="ОПОРА"
              fieldName="activeRotor"
              state={activeRotor}
              searchField="rotorNumber"
              options={rotors}
              setState={(item) => setActiveRotor(item as TRotor)}
            />
            <span className={css.forecast__item__date}>
              {' '}
              {activeRotor.lastReplacementDate}
            </span>
          </div>
        </div>

        <div className={css.icon}>{getRotorIcon(activeRotor.rotorNumber)}</div>

        <div className={css.property}>
          <div className={css.property__content}>
            <span className={css.property__content__title}>
              <VibrationIcon />
              Вибрация продолная
            </span>
            <span className={css.property__content__value}>
              {activeRotor.oilLevel} мм/c
            </span>
            <Indicator status={activeRotor.oilLevelStatus} />
          </div>
          <div className={css.property__content}>
            <span className={css.property__content__title}>
              <VibrationIcon />
              Вибрация
            </span>
            <span className={css.property__content__value}>
              {activeRotor.vibration} мм/c
            </span>
            <Indicator status={activeRotor.vibrationStatus} />
          </div>
          <div className={css.property__content}>
            <span className={css.property__content__title}>
              <TemperatureIcon />
              Температура подшипника
            </span>
            <span className={css.property__content__value}>
              {activeRotor.temperature} С
            </span>
            <Indicator status={activeRotor.temperatureStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};
