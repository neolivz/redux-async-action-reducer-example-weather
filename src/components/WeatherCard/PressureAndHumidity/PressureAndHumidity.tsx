import * as React from 'react';
import * as style from './style';

interface PressureAndHumidityWithUnit extends PressureAndHumidity {
    unit: PressureUnits;
}

const convert = (pressure: number, unit: PressureUnits): number => {
    if (unit === 'mbar') return pressure;
    else if (unit === 'atm') return Math.round(pressure * 0.000986923 * 100) / 100;
    else if (unit === 'Pa') return Math.round(pressure * 100 * 100) / 100;
}

export const PressureAndHumidity: React.StatelessComponent<PressureAndHumidityWithUnit> = (props) => {
    const { humidity, pressure, unit } = props;

    return (
        <div className={style.rootContent}>
            <div className={style.rootSection}>
                <i className="wi wi-humidity"></i>{humidity}%
            </div>
            <div className={style.rootSection}>
                <i className="wi wi-barometer"></i>{convert(pressure, unit)} <span>{unit}</span>
            </div>
        </div>
    )
}