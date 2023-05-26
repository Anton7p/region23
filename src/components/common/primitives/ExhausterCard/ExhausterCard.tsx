import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import classNames from 'classnames';
import { map, random } from 'lodash';
import moment from 'moment';

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

import { EExhausterField } from '../../../../pages/Home/types';

export type TExhauster = {
  status: EStatus;
  exhausterNumber: string;
  additional: boolean;
  exhausterValue: Record<string, number | string>;
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

type TExhausterCardProps = {
  additional: boolean;
} & TExhauster;
export const ExhausterCard = ({
  status,
  exhausterNumber,
  exhausterValue,
  additional,
}: TExhausterCardProps) => {
  const [activeSupport, setActiveSupport] = useState<Record<string, number | string>>({
    value: 'ОПОРA 1',
    id: 1,
    vibration: exhausterValue[EExhausterField.VIBRATION_SUPPORT_FIRST],
    bearingTemperature: exhausterValue[EExhausterField.BEARING_TEMPERATURE_FIRST],
  });

  const navigate = useNavigate();

  const handleRouteChange = (id: string) => {
    navigate(`/${urls.monitoring}/${id}`);
  };
  return (
    <div className={css.card}>
      <div className={css.title}>
        <div className={css.name}>
          <span> {`Эксгаустер №${exhausterNumber}`}</span>
        </div>
        <Button className="card" onClick={() => handleRouteChange(exhausterNumber)}>
          Параметры <ArrowIcon />
        </Button>
      </div>
      <div className={css.forecast}>
        {activeSupport && (
          <div className={css.forecast__replacement}>
            <span className={css.forecast__replacement__title}>
              Последняя замена опоры
            </span>
            <div className={css.forecast__replacement__content}>
              <span className={css.content__date}>{`${random(1, 30)} сут`}</span>
              <div className={css.content__forecast}>
                <span>
                  Прогноз
                  <Indicator
                    status={
                      [EStatus.ERROR, EStatus.WARNING, EStatus.NORMAL][random(1, 3)]
                    }
                  />
                </span>
                <span>{`${random(1, 30)} сут`}</span>
              </div>
            </div>
          </div>
        )}
        <div className={css.property}>
          {map(
            [
              {
                value: EExhausterField.CURRENT_ROTOR_FIRST,
                icon: <ElectricIcon />,
                unitMeasurements: 'A',
              },
              {
                value: EExhausterField.CURRENT_STATOR,
                icon: <ElectricIcon />,
                unitMeasurements: 'A',
              },
              {
                value: EExhausterField.CURRENT_ROTOR_SECOND,
                icon: <ElectricIcon />,
                unitMeasurements: 'A',
              },
              {
                value: EExhausterField.OIL_PRESSURE,
                icon: <OilIcon />,
                unitMeasurements: 'кПа',
              },
              {
                value: EExhausterField.OIL_TEMPERATURE_SYSTEM,
                icon: <TemperatureIcon />,
                unitMeasurements: 'C',
              },
              {
                value: EExhausterField.OIL_TEMPERATURE_OIL_BLOCK,
                icon: <TemperatureIcon />,
                unitMeasurements: 'C',
              },
            ],
            (item) => (
              <div className={css.property__content}>
                <span className={css.property__content__title}>
                  {item.icon}
                  {item.value}
                </span>
                <span className={css.property__content__value}>
                  {exhausterValue[item.value]} {item.unitMeasurements}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <div className={classNames({ [css.open]: !additional }, css.additional)}>
        <div className={css.forecast__item}>
          <div className={css.forecast__item__date}>
            <Select
              fieldName="activeSupport"
              state={activeSupport}
              searchField="value"
              options={[
                {
                  value: 'ОПОРA 1',
                  id: 1,
                  vibration: exhausterValue[EExhausterField.VIBRATION_SUPPORT_FIRST],
                  bearingTemperature:
                    exhausterValue[EExhausterField.BEARING_TEMPERATURE_FIRST],
                },
                {
                  value: 'ОПОРA 2',
                  id: 2,
                  vibration: exhausterValue[EExhausterField.VIBRATION_SUPPORT_SECOND],
                  bearingTemperature:
                    exhausterValue[EExhausterField.BEARING_TEMPERATURE_SECOND],
                },
                {
                  value: 'ОПОРA 3',
                  id: 3,
                  vibration: exhausterValue[EExhausterField.VIBRATION_SUPPORT_THIRD],
                  longitudinalVibration:
                    exhausterValue[EExhausterField.LONGITUDINAL_VIBRATION_SUPPORT_THIRD],
                  bearingTemperature:
                    exhausterValue[EExhausterField.BEARING_TEMPERATURE_THIRD],
                },
                {
                  value: 'ОПОРA 4',
                  id: 4,
                  vibration: exhausterValue[EExhausterField.VIBRATION_SUPPORT_FOUR],
                  longitudinalVibration:
                    exhausterValue[EExhausterField.LONGITUDINAL_VIBRATION_SUPPORT_FOUR],
                  bearingTemperature:
                    exhausterValue[EExhausterField.BEARING_TEMPERATURE_FOUR],
                },
              ]}
              setState={(item) => setActiveSupport(item)}
            />
            <span className={css.forecast__item__date}>
              {moment(exhausterValue.DT).format('DD.MM.YYYY')}
            </span>
          </div>
        </div>

        <div className={css.icon}>{getRotorIcon(Number(activeSupport.id))}</div>

        <div className={css.property}>
          {map(
            [
              {
                value: 'vibration',
                icon: <VibrationIcon />,
                unitMeasurements: 'мм/c',
                text: 'Вибрация',
              },
              {
                value: 'longitudinalVibration',
                icon: <VibrationIcon />,
                unitMeasurements: 'мм/c',
                text: 'Вибрация продольная',
              },
              {
                value: 'bearingTemperature',
                icon: <TemperatureIcon />,
                unitMeasurements: 'С',
                text: 'Температура подшипника',
              },
            ],
            (item) => {
              if (!activeSupport[item.value]) return null;
              return (
                <div className={css.property__content}>
                  <span className={css.property__content__title}>
                    {item.icon}
                    {item.text}
                  </span>
                  <span className={css.property__content__value}>
                    {activeSupport[item.value]} мм/c
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
