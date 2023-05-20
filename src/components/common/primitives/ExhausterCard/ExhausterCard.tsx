import css from './ExhausterCard.module.scss';
import React from "react";
import {EStatus, Indicator} from "@/components/common/primitives/Indicator";
import {Button} from "@/components/common/primitives";
import ArrowIcon from "../../../../../public/images/arrow_left.svg";
import OilIcon from "../../../../../public/images/oil.svg";
import ExhausterIcon from "../../../../../public/images/aglo.svg";
import TemperatureIcon from "../../../../../public/images/temperature.svg";
import VibrationIcon from "../../../../../public/images/vibration.svg";


export type TExhauster = {
    status: EStatus,
    exhausterNumber: number,
    rotorNumber: number,
    lastReplacementDate: string,
    forecastReplacementDate: number,
    forecastDate: number,
    forecastReplacementStatus: EStatus,
    oilLevel: number,
    oilLevelStatus: EStatus,
    vibration: number,
    temperature: number,
    vibrationStatus: EStatus,
    temperatureStatus: EStatus,
}
export const ExhausterCard = ({
                                  status,
                                  exhausterNumber,
                                  rotorNumber,
                                  lastReplacementDate,
                                  forecastReplacementDate,
                                  forecastReplacementStatus,
                                  forecastDate,
                                  oilLevel,
                                  vibration,
                                  vibrationStatus,
                                  oilLevelStatus,
                                  temperature,
                                  temperatureStatus

                              }: TExhauster) => {
    return (
        <div className={css.card}>
            <div className={css.title}>
                <div className={css.name}>
                    <Indicator status={status}/>
                    <span> {`Эксгаустер №${exhausterNumber}`}</span>
                </div>
                <Button className="card"><ArrowIcon/></Button>
            </div>
            <div className={css.forecast}>
                <div className={css.forecast__item}>
                    <span className={css.forecast__item__name}>{`Ротор №${rotorNumber}`}</span>
                    <div className={css.forecast__item__date}>
                        <span> {lastReplacementDate}</span>
                        <Button className="forecast">Изменить</Button>
                    </div>
                </div>
                <div className={css.forecast__replacement}>
                    <span className={css.forecast__replacement__title}>Последняя замена ротера</span>
                    <div className={css.forecast__replacement__content}>
                        <span className={css.content__date}>{`${forecastReplacementDate} сут`}</span>
                        <div className={css.content__forecast}>
                            <span>Прогноз <Indicator status={forecastReplacementStatus}/></span>
                            <span>{`${forecastDate} сут`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.icon}>
                <ExhausterIcon/>
            </div>
            <div className={css.property}>
                <div className={css.property__content}>
                    <span className={css.property__content__title}>
                        <OilIcon/>
                        Уровень масла
                    </span>
                    <span className={css.property__content__value}>{oilLevel}</span>
                    <Indicator status={oilLevelStatus}/>
                </div>
                <div className={css.property__content}>
                    <span className={css.property__content__title}>
                                     <VibrationIcon/>
                        Вибрация</span>
                    <span className={css.property__content__value}>{vibration}</span>
                    <Indicator status={vibrationStatus}/>
                </div>
                <div className={css.property__content}>
                    <span className={css.property__content__title}>
                                     <TemperatureIcon/>
                        Температура</span>
                    <span className={css.property__content__value}>{temperature}</span>
                    <Indicator status={temperatureStatus}/>
                </div>
            </div>
        </div>
    )
};
