import { combineReducers } from 'redux';

import BLEReducer from './BLEReducer';
import rootReducer from './rootReducer';

export default combineReducers({
  BLEs: BLEReducer,
  rootReducer: rootReducer
  });
