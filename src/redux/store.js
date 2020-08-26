import { createStore, applyMiddleware } from 'redux';
import { BleManager, BleError } from 'react-native-ble-plx';
import thunk from 'redux-thunk';

import combineReducers from './index';

const DeviceManager = new BleManager();

const store = createStore(combineReducers, applyMiddleware(thunk.withExtraArgument(DeviceManager)));
export default store;
