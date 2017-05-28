
import { AsyncStore, createReducer, asyncReducer, initialState } from 'redux-async-action-reducer';
import { LOAD_LOCATION } from '../../constants/actions';

export type GeoLocationStore = AsyncStore<GeoLocation>;


export const geoLocationReducer = createReducer(initialState, undefined,
  [asyncReducer(LOAD_LOCATION)])

export default geoLocationReducer;