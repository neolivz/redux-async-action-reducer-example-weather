
import { createAsyncAction, } from 'redux-async-action-reducer';

import { getCurrentLocation } from '../../apis';
import { LOAD_LOCATION } from '../../constants/actions'


export const loadLocation = createAsyncAction<LOAD_LOCATION, undefined, GeoLocation>(LOAD_LOCATION, getCurrentLocation);