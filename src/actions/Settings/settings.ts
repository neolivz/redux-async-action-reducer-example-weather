
import { createAsyncAction, createSimpleAction } from 'redux-async-action-reducer';

import { loadSettings as loadSettingsApi, saveSettings as saveSettingsApi } from '../../apis';
import { LOAD_SETTINGS, SAVE_SETTINGS, TOGGLE_SETTINGS } from '../../constants/actions'



export const loadSettings = createAsyncAction<LOAD_SETTINGS, undefined, Settings>(LOAD_SETTINGS, loadSettingsApi);

export const saveSettings = createAsyncAction<SAVE_SETTINGS, Settings, Settings>(SAVE_SETTINGS, saveSettingsApi);

export const toggleSettings = createSimpleAction<TOGGLE_SETTINGS, boolean>(TOGGLE_SETTINGS);

