import * as React from 'react';
import * as style from './style';

interface TemperatureProps {
  day: boolean;
  code: number;
}



const generateWeatherClass = (code: number, day: boolean) => {
  let start = 'wi-day-'
  if (!day) {
    start = 'wi-night-alt-'
  }

  //Code always should go ascending order
  if (code < 300) {
    if (code === 202 || code === 221 || code === 232)
      return `${start}thunderstorm`;
    return `${start}storm-showers`;
  } else if (code < 600) {
    if (code === 302 || code === 312 || code === 314)
      return `${start}rain`;
    return `${start}rain-mix`;
  } else if (code < 700) {
    return `${start}snow`;
  } else if (code < 800) {
    if (code === 701 || code === 741)
      return day ? 'wi-day-fog' : 'wi-night-fog';
    else if (code === 711)
      return `wi-smoke`;
    else if (code === 721)
      return `wi-day-haze`;
    else if (code === 721)
      return `${start}haze`;
    else if (code === 731 || code === 751)
      return `wi-sandstorm`;
    else if (code === 761)
      return `wi-dust`;
    else if (code === 762)
      return `wi-volcano`;
    else if (code === 771)
      return `wi-strong-wind`;
    else if (code === 781)
      return `wi-tornado`;
    else
      return `wi-alien`;
  } else if (code < 900) {
    if (code === 800)
      return day ? `wi-day-sunny` : `wi-night-clear`;
    else if (code === 801 || code === 802)
      return `${start}cloudy`;
    else if (code === 803 || code === 804)
      return `${start}cloudy-high`;
    else
      return `wi-alien`
  } else if (code < 910) {
    if (code === 900)
      return `wi-tornado`;
    else if (code === 901)
      return `${start}storm-showers`;
    else if (code === 902)
      return `wi-hurricane`;
    else if (code === 903)
      return `wi-snowflake-cold`;
    else if (code === 904)
      return `wi-hot`;
    else if (code === 905)
      return `${start}windy`;
    else if (code === 906)
      return `${start}hail`;
    else
      return `wi-alien`;
  } else if (code < 1000) {
    if (code === 951) {
      return day ? `wi-day-sunny` : `wi-night-clear`;
    } else if (code < 956) {
      return 'wi-windy'
    } else if (code < 960) {
      return 'wi-strong-wind'
    } else if (code < 962) {
      return `${start}storm-showers`;
    } else if (code === 962) {
      return `wi-hurricane`;
    }
  }
}


export const WeatherIcon: React.StatelessComponent<TemperatureProps> = (props) => {
  const { day, code } = props;

  const weather = generateWeatherClass(code, day);
  return (
    <div className={style.weatherRoot}>
      <i className={`wi ${weather}`}>
      </i>
    </div>
  )
}