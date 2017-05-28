
import { createAsyncAction, } from 'redux-async-action-reducer';

import { getWeather, WeatherRequest } from '../../apis';
import { LOAD_WEATHER } from '../../constants/actions'



export const loadWeather = createAsyncAction<LOAD_WEATHER, WeatherRequest, WeatherReport>(LOAD_WEATHER, getWeather);



