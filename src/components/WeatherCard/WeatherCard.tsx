import * as React from 'react';

import * as style from './style';

import * as moment from 'moment';

import { PressureAndHumidity } from './PressureAndHumidity';
import { Temperature } from './Termperature';
import { Wind } from './Wind';
import { WeatherIcon } from './WeatherIcon';
import { Settings } from './Settings'

export interface CardProps extends WeatherMain, Wind {
  dt: number;
  name: string;
  weatherType: string;
  sunrise: number;
  sunset: number;
  code: number;
  description: string;
  settingsOpen: boolean;
  settings: Settings;
  toggleSettings: any;
  saveSettings: any;
}

export const Title: React.StatelessComponent<{ title: string }> = (props) => {
  const { title } = props;

  return (
    <div className={style.title}>
      <h1>{title}</h1>
    </div>
  )
}

export const WeatherCard: React.StatelessComponent<CardProps> = (props) => {
  const { deg, speed, humidity, pressure, temp, temp_max, temp_min, dt, sunrise, sunset, name, description, code, settingsOpen, toggleSettings, settings, saveSettings } = props;
  if (settingsOpen)
    return <Settings
      saveSettings={saveSettings}
      done={() => toggleSettings(false)}
      settings={settings} />
  const tillSunset = sunset - dt;
  const tillSunrise = sunrise - dt;
  //3600 = 1hr, 7200 = 2hr. 1 hr before and 2 hr after
  const start = 3600, end = -7200;
  //We will show sunrise image 1 hr before sunrise and 2 hours after sunrise 
  const day = (tillSunrise < start && tillSunrise > end) ? 'sunrise' :
    //Same goes for sunset
    (tillSunset < start && tillSunset > end) ? 'sunset' :
      //If it is between sunrise and sunset it's day else night
      (sunrise < dt && sunset > dt) ? 'day' : 'night';
  const backgroundColor = (
    (tillSunrise < start && tillSunrise > end) ||
    (tillSunset < start && tillSunset > end)) ? '#BB5771' :
    //If it is between sunrise and sunset it's day else night
    (sunrise < dt && sunset > dt) ? '#006064' : '#3F51B5';
  const opacity = (backgroundColor === '#006064') ? 0.1 : 0.2
  const isDay = sunrise < dt && sunset > dt;
  const sunsetTime = moment(sunset * 1000).fromNow(),
    sunriseTime = moment(sunrise * 1000).fromNow();

  const currentWeatherType =
    (code < 600) ? 'Rain' :
      (code < 700) ? 'Snow' :
        (code < 800) ? 'Atmosphere' :
          (code == 800) ? 'Clear' :
            (code < 900) ? 'Clouds' :
              'Default';


  return (
    <div className={style.root}>
      <div className={style.main} style={{ backgroundColor }}>
        <div className={style.mainLeft}>

          <Title title={name} />
          {settings.temperatureEnabled && <Temperature unit={settings.temperatureUnit} temp={temp} temp_max={temp_max} temp_min={temp_min} />}
          {settings.pressureEnabled && <PressureAndHumidity humidity={humidity} pressure={pressure} unit={settings.pressureUnit} />}
          {settings.windSpeedEnabled && <Wind deg={deg} speed={speed} unit={settings.windSpeedUnit} />}


        </div>
        <div className={style.mainRight}>
          <div className={style.settings}>
            <i className="fa fa-cog" aria-hidden="true"
              onClick={() => toggleSettings(true)}></i>
          </div>
          <div className={style.weatherIcon}>
            <WeatherIcon code={code} day={isDay} />
          </div>
          <div className={style.weatherDescription}>{description}</div>
          <div className={style.sunTimings}>
            <div>
              <i className="wi  wi-sunrise"></i>
              {sunriseTime}
            </div>
            <div>
              <i className="wi  wi-sunset"></i>
              {sunsetTime}
            </div>


          </div>
        </div>
        <div className={style.mainBg} style={{ opacity }}>
          <img className={style.mainBgImg} style={{ width: '100%' }} src={`/images/${currentWeatherType}-${day}.jpg`} />
        </div>

      </div>
      {/*<div className={style.footer}>
      </div>*/}



    </div>
  )
}
export default WeatherCard;
