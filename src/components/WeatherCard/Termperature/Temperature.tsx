import * as React from 'react';
import * as style from './style';

interface TemperatureProps extends Temperature {
  unit: TemperatureUnits
}

const convert = (temp: number, unit: TemperatureUnits): number => {
  if (unit === 'C') {
    return Math.round((temp - 273) * 100) / 100;
  } else if (unit === 'F') {
    return Math.round((9 / 5 * (temp - 273) + 32) * 100) / 100;
  } else {
    return temp;
  }
}

const UnitScale: React.StatelessComponent<{ temp: number, unit: TemperatureUnits }> = (props) => {
  const { unit, temp } = props;
  return (
    <div>
      {convert(temp, unit,)}
      {unit === 'C' && <i className="wi wi-celsius"></i>}
      {unit === 'F' && <i className="wi wi-fahrenheit"></i>}
      {unit === 'K' && <span><i className="wi wi-degrees"></i>K</span>}
    </div>
  )
}

export const Temperature: React.StatelessComponent<TemperatureProps> = (props) => {
  const { temp, temp_max, temp_min, unit } = props;


  return (
    <div className={style.rootContent}>
      <div className={style.currentTemperature}>
        <i className="wi wi-thermometer"></i>

        <UnitScale temp={temp} unit={unit} />
      </div>
      <div className={style.maxMinContainer}>
        <div className={style.maxMin}>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
          <UnitScale temp={temp_max} unit={unit} />
        </div>
        <div className={style.maxMin}>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <UnitScale temp={temp_min} unit={unit} />
        </div>
      </div>
    </div>
  )
}

export default Temperature;