import { ApiFunc } from 'redux-async-action-reducer';

import { GEO_IP } from '../constants/api';

declare interface GeoIPDetails {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
}

const getCurrentLocationFromIp = async ():Promise<GeoIPDetails> => {
    let resp = await fetch(`${GEO_IP}`);
    const data: GeoIPDetails = await resp.json() as GeoIPDetails;
    return data;
};

const getCurrentLocationFromNavigator = async ():Promise<Position> => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }) as Promise<Position>;
}

export const getCurrentLocation: ApiFunc<undefined, GeoLocation> = async () => {
    try {
        let location = await getCurrentLocationFromNavigator();
        return {lat:location.coords.latitude, lon: location.coords.longitude}
    } catch (e){
        let {lat, lon} = await getCurrentLocationFromIp();
        return {lat, lon};
    }
}

export const geoIp = {
    getCurrentLocation,
}