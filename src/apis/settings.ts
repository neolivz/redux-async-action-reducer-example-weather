import * as localforage from 'localforage';

import { SETTINGS } from '../constants/api'


export const saveSettings = async (settings: Settings): Promise<Settings> => {
    const oldSettings: Settings =
        await localforage.getItem(SETTINGS) as Settings || settings;
    const newSettings = { ...oldSettings, ...settings }
    await localforage.setItem(SETTINGS, newSettings);
    return newSettings;
}

export const loadSettings = async (): Promise<Settings> => {
    return await localforage.getItem(SETTINGS) as Settings ||
        {
            pressureEnabled: true, temperatureEnabled: true, windSpeedEnabled: true,
            pressureUnit: 'mbar', temperatureUnit: 'C', windSpeedUnit: 'kmph'
        };
}

export const settings = {
    saveSettings, loadSettings
}
