import React from 'react';
import { Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View } from 'react-native';
import { Container, Header, Content, Footer } from 'native-base';
import BLE from '../components/BLE';
import {connect} from 'react-redux';
import {connectDevice,startScan} from '../actions';
import styles from './styles';

function BTScreen() {
  return (
    <View style={styles.container2}>
      <Text>Bluetooth Screen</Text>
    </View>
  );
}



export default BTScreen;
