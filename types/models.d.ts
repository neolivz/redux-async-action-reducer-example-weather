
declare interface Coord {
  lon: number;
  lat: number;
}

declare interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

declare interface Temperature {
  temp: number;
  temp_min: number;
  temp_max: number;
}

declare interface PressureAndHumidity {
  pressure: number;
  humidity: number;
}

declare interface WeatherMain extends Temperature, PressureAndHumidity {
  sea_level?: number;
  grnd_level?: number;
}

declare interface Wind {
  speed: number;
  deg: number;
}

declare interface Clouds {
  all: number;
}

declare interface Sys {
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

declare interface WeatherReport {
  coord?: Coord;
  weather: Weather[];
  base?: string;
  main: WeatherMain;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

declare interface GeoLocation {
  lat: number;
  lon: number;
}

declare interface AsyncComponent {
  working: boolean;
  failure: boolean;
}

declare interface ActiveComponet {
  open: boolean;
}


type Direction = 'North' | 'East' | 'West' | 'South';
type TemperatureUnits = 'C' | 'F' | 'K';
type WindSpeedUnits = 'm/s' | 'kmph' | 'mph';
type PressureUnits = 'Pa' | 'mbar' | 'atm';


declare interface Settings{
    city?: string;
    temperatureEnabled: boolean;
    temperatureUnit: TemperatureUnits;
    windSpeedEnabled: boolean;
    windSpeedUnit: WindSpeedUnits;
    pressureEnabled: boolean;
    pressureUnit: PressureUnits;
}