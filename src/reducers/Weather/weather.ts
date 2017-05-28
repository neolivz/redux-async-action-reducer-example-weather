import { AsyncStore, initialState, createReducer, asyncReducer } from 'redux-async-action-reducer';

import { LOAD_WEATHER } from '../../constants/actions';


export type WeatherStore = AsyncStore<WeatherReport>;


export const weatherReducer = createReducer(initialState, [],
  [
    asyncReducer(LOAD_WEATHER)
  ]
)

export default weatherReducer;