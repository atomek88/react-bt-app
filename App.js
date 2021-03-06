/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as StateProvider } from 'react-redux';
import { BleManager, BleError } from 'react-native-ble-plx';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MainStackNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const DeviceManager = new BleManager();

export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  )
}
