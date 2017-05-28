import { combineReducers } from 'redux';

import { geoLocationReducer as geoLocation, GeoLocationStore } from './GeoLocation';
import { weatherReducer as weather, WeatherStore } from './Weather'
import { settingsReducer as settings, SettingsStore } from './Settings';


export interface RootState {
  geoLocation: GeoLocationStore;
  weather: WeatherStore;
  settings: SettingsStore;
}

export {
  GeoLocationStore,
  WeatherStore,
  SettingsStore
};
export default combineReducers<RootState>({
  weather,
  geoLocation,
  settings
});
