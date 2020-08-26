import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ModalScreen from '../screens/ModalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BTScreen from '../screens/BTScreen';
import BTStatus from '../screens/BTStatus';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
        header='none'
        screenOptions={{
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp'
              })
            }
          })
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="BTScreen" component={BTScreen} />
        <Stack.Screen name="BTStatus" component={BTStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
