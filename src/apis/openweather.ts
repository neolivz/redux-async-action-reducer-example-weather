import { ApiFunc } from 'redux-async-action-reducer';

import { API_URL, API_KEY, QUERY, LATLON } from '../constants/api';

type WeatherQuery = {
    type: QUERY;
    city: string;
}

type WeatherLatLon = {
    type: LATLON;
    lat: number;
    lon: number;
}
export type WeatherRequest = WeatherQuery | WeatherLatLon;

const getWeatherForCityAndCountry: ApiFunc<WeatherQuery, WeatherReport> = async (q: WeatherQuery) => {
    let resp = await fetch(`${API_URL}?q=${q.city}&appId=${API_KEY}`);
    const data: WeatherReport = await resp.json() as WeatherReport;
    return data;
};

const getWeatherForLatLon: ApiFunc<WeatherLatLon, WeatherReport> = async (q: WeatherLatLon) => {
    let resp = await fetch(`${API_URL}?lat=${q.lat}&lon=${q.lon}&appId=${API_KEY}`);
    const data: WeatherReport = await resp.json() as WeatherReport;
    return data;
};

export const getWeather: ApiFunc<WeatherRequest, WeatherReport> = async (q: WeatherQuery | WeatherLatLon) => {
    if (q.type === QUERY)
        return getWeatherForCityAndCountry(q);
    else
        return getWeatherForLatLon(q)
}

export const openweather = {
    getWeather,
}