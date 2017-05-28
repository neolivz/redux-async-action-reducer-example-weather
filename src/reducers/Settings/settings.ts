import { AsyncStore, createReducer, asyncReducer, syncReducerGenerator, initialState }
  from 'redux-async-action-reducer';

// import { handleActions } from 'redux-actions';

import { TOGGLE_SETTINGS, LOAD_SETTINGS, SAVE_SETTINGS } from '../../constants/actions';

export type SettingsStore = AsyncStore<Settings> & { open: boolean };

export const settingsReducer = createReducer({ ...initialState, open: false },
  [syncReducerGenerator(TOGGLE_SETTINGS, (state, request) => {
    return { ...state, open: request === true }
  })],
  [
    asyncReducer([SAVE_SETTINGS, LOAD_SETTINGS]),
  ]
)

// export const settingsReducer = handleActions<SettingsStore, Settings>({
//   [ActionConstants.LOAD_SETTINGS]: reducerActionGroupFactory<Settings>(),
//   [ActionConstants.SAVE_SETTINGS]: reducerActionGroupFactory<Settings>(),
//   [ActionConstants.TOGGLE_SETTINGS]:
//   (state, action: ActionSimple<any, boolean>): SettingsStore => {
//     return { ...state, open: action.request === true }
//   }
// }, initialActiveState);

export default settingsReducer;