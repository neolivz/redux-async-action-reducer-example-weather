import * as React from 'react';
import { loadLocation, loadWeather, toggleSettings, loadSettings, saveSettings } from '../../actions';
import './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState, WeatherStore, GeoLocationStore, SettingsStore } from '../../reducers';
import { WeatherCard } from '../../components';

export namespace App {

  // Props from the mapStateToProps method
  export interface StateProps {
    weather: WeatherStore;
    location: GeoLocationStore;
    settings: SettingsStore;
  }

  // Props from the mapDispatchToProps method
  export interface DispatchProps {
    loadLocation: any;
    loadWeather: any;
    loadSettings: any;
    toggleSettings: any;
    saveSettings: any;
  }

  export interface OwnProps {
  }
  export type Props = StateProps & OwnProps & DispatchProps;
}

// @connect<App.StateProps, App.DispatchProps, App.OwnProps>(mapStateToProps,
// mapDispatchToProps) // Typescript bug does not allow to do it like this way atm
export class Weather extends React.Component<App.Props, {}> {
  componentDidMount() {
    const { loadLocation, loadSettings } = this.props
    loadLocation();
    loadSettings();
  }

  componentWillReceiveProps(newProps: App.Props) {
    const { loadWeather } = this.props;
    if (!newProps.weather.failure &&
      newProps.settings && newProps.settings.store
      && newProps.settings.store !== undefined
      && newProps.settings.store.city !== undefined
      && newProps.settings.store.city !== '') {

      if ((!newProps.settings.open
        && this.props.settings.open)
        || ((!newProps.settings.open &&
          (!this.props.settings.store ||
            newProps.settings.store.city != this.props.settings.store.city)))) {
        loadWeather({ type: 'QUERY', city: newProps.settings.store.city })
      }

    } else if (newProps.location && newProps.location.store &&
      ((this.props.location.store != newProps.location.store)
        || (this.props.settings.store && newProps.settings.store &&
          newProps.settings.store.city === '' && this.props.settings.store.city !== ''))) {
      const { lat, lon } = newProps.location.store;
      loadWeather({ lat, lon, type: "LATLON" });
    }
  }
  render() {
    //TODO: Generalize this as a utility
    if (!this.props.weather || this.props.weather.working)
      return <div>Loading...</div>
    else if (this.props.weather.failure) {
      if (this.props.settings
        && this.props.settings.store
        && this.props.settings.store.city) {
        return <div>Can't find weather for city. Loading local weather.</div>
      }
      return <div>Loading Weather Failed</div>
    }
    if (!this.props.settings) {
      return <div>Loading Default Units</div>
    }
    if (!this.props.weather.store)
      return <span>Initializing...</span>
    const { temp, temp_max, temp_min, humidity, pressure } = this.props.weather.store.main;
    const { main, id, description } = this.props.weather.store.weather[0];
    const { deg, speed } = this.props.weather.store.wind;
    const { dt, name } = this.props.weather.store;
    const { sunrise, sunset } = this.props.weather.store.sys;
    const { open, store } = this.props.settings
    const { toggleSettings, saveSettings } = this.props;

    return (<WeatherCard
      deg={deg}
      speed={speed}
      temp={temp}
      temp_max={temp_max}
      temp_min={temp_min}
      humidity={humidity}
      pressure={pressure}
      name={name}
      dt={dt}
      weatherType={main}
      sunrise={sunrise}
      sunset={sunset}
      code={id}
      settingsOpen={open}
      toggleSettings={toggleSettings}
      saveSettings={saveSettings}
      settings={store}
      description={description}
    />);
  }
}

function mapStateToProps(state: RootState, ownProps: App.OwnProps): App.StateProps {

  const { weather, geoLocation, settings } = state;
  return {
    location: geoLocation,
    weather,
    settings,
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadLocation,
    loadWeather,
    toggleSettings,
    loadSettings,
    saveSettings,
  }, dispatch);
}


export default connect<App.StateProps, App.DispatchProps, App.OwnProps>(mapStateToProps, mapDispatchToProps)(Weather);

