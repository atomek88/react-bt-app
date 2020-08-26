import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity,  Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container2}>
      <Text>Home button here</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.fabButton}>
        <Icon name='rocket' color='#fff' size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Modal')}
        style={styles.fabButton}>
        <Icon name='binoculars' color='#fff' size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BTScreen')}
        style={styles.fabButton}>
        <Icon name='bluetooth' color='#fff' size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
        style={styles.fabButton}>
        <Icon name='list' color='#fff' size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BTStatus')}
        style={styles.fabButton}>
        <Icon name='bluetooth-b' color='#fff' size={25} />
      </TouchableOpacity>
    </View>
  );
}


export default HomeScreen;
