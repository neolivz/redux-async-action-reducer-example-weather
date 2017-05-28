import * as React from 'react';
import * as style from './style';
import TextField from 'material-ui/TextField';




interface SettingsProps {
    saveSettings: any;
    settings: Settings;
    done:any;
}

const styles = {
    style: {
        color: '#fff',
    },
    hintStyle: {
        color: '#aaa'
    }
};

export const Settings: React.StatelessComponent<SettingsProps> = (props) => {
    if (!props.settings)
        return <div>Settings Not Found</div>
    const { settings, saveSettings, done } = props;
    const { city,
        temperatureUnit, windSpeedUnit, pressureUnit,
        temperatureEnabled, windSpeedEnabled, pressureEnabled,
     } = settings;

    const onTemperatureClick = () => saveSettings({ ...settings, temperatureEnabled: !temperatureEnabled });
    const onWindClick = () => saveSettings({ ...settings, windSpeedEnabled: !windSpeedEnabled });
    const onPressureClick = () => saveSettings({ ...settings, pressureEnabled: !pressureEnabled });
    const onCelsiusClick = () => saveSettings({ ...settings, temperatureUnit: 'C' });
    const onFahrenheitClick = () => saveSettings({ ...settings, temperatureUnit: 'F' });
    const onKMPHClick = () => saveSettings({ ...settings, windSpeedUnit: 'kmph' });
    const onMPHClick = () => saveSettings({ ...settings, windSpeedUnit: 'mph' });
    const onMPSClick = () => saveSettings({ ...settings, windSpeedUnit: 'm/s' });
    const onPaClick = () => saveSettings({ ...settings, pressureUnit: 'Pa' });
    const onMbarClick = () => saveSettings({ ...settings, pressureUnit: 'mbar' });
    const onAtmClick = () => saveSettings({ ...settings, pressureUnit: 'atm' });
    const onCityChange = (e, city) => saveSettings({ ...settings, city });




    return (
        <div className={style.settingsRoot}>
            <div className={style.settingsMain}>
                <div className={style.city}>
                    <span className={style.cityField}>
                        <TextField
                            onChange={onCityChange}
                            hintText="eg:- Sydney,AU"
                            defaultValue={city}
                            floatingLabelText="City"
                            fullWidth={true}
                            inputStyle={styles.style}
                            hintStyle={styles.hintStyle}
                            underlineStyle={styles.style}
                            underlineFocusStyle={styles.style}
                            floatingLabelStyle={styles.style}
                            floatingLabelFocusStyle={styles.style}
                        />
                    </span>
                </div>
                <div className={style.allUnits}>
                    <div className={style.unitsContainer}>
                        <span
                            onClick={onTemperatureClick}
                            className={temperatureEnabled ? style.selected : ''}>
                            <i className="wi wi-thermometer"></i>{temperatureEnabled}
                        </span>
                        <span
                            className={style.unitsValues}>
                            <span
                                onClick={onCelsiusClick}
                                className={temperatureUnit === 'C' ? style.selected : ''}>
                                <i className="wi wi-celsius"></i>
                            </span>
                            <span
                                onClick={onFahrenheitClick}
                                className={temperatureUnit === 'F' ? style.selected : ''}>
                                <i className="wi wi-fahrenheit"></i>
                            </span>
                        </span>
                    </div>

                    <div className={style.unitsContainer}>
                        <span
                            onClick={onWindClick}
                            className={windSpeedEnabled ? style.selected : ''}>
                            <i className="wi wi-strong-wind"></i>
                        </span>
                        <span className={style.unitsValues}>
                            <span
                                onClick={onKMPHClick}
                                className={windSpeedUnit === 'kmph' ? `${style.selected} ${style.smallText}` : style.smallText}>
                                km/hr
                        </span>
                            <span
                                onClick={onMPHClick}
                                className={windSpeedUnit === 'mph' ? `${style.selected} ${style.smallText}` : style.smallText}>
                                miles/hr
                        </span>
                            <span
                                onClick={onMPSClick}
                                className={windSpeedUnit === 'm/s' ? `${style.selected} ${style.smallText}` : style.smallText}>
                                m/s
                        </span>
                        </span>
                    </div>

                    <div className={style.unitsContainer}>
                        <span
                            onClick={onPressureClick}
                            className={pressureEnabled ? style.selected : ''}>
                            <i className="wi wi-barometer"></i>
                        </span>
                        <span className={style.unitsValues}>
                            <span
                                onClick={onMbarClick}
                                className={pressureUnit === 'mbar' ? `${style.selected} ${style.smallText}` : style.smallText}>
                                mbar
                        </span>
                            <span
                                onClick={onPaClick}
                                className={pressureUnit === 'Pa' ? `${style.selected} ${style.smallText}` : style.smallText}>
                                Pa
                        </span>
                            <span
                                onClick={onAtmClick}
                                className={pressureUnit === 'atm' ? `${style.selected} ${style.smallText}` : style.smallText}>
                                atm
                        </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.settingsClose}>
                <i className="fa fa-times" aria-hidden="true" onClick={done}></i>
            </div>
        </div>
    )
}