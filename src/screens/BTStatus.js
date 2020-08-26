import React from 'react';
import { Text, View } from 'react-native';
import { useBluetoothStatus } from 'react-native-bluetooth-status';
import styles from './styles';

function BTStatus() {
  return (
    <View style={styles.container2}>
      <Text>Bluetooth Status</Text>
    </View>
  );
}



export default BTStatus;
