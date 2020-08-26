import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/rootReducer';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
//onChangeText={(text) => this.setState({input: text})}
function ModalScreen({ navigation }) {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSaveNote = (value) => {
    dispatch(addItem(value))
    navigation.navigate('List')
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={ () => navigation.goBack() }>
            <Icon name='close' color='#101010' size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Text style={{ color: '#444', fontSize: 20 }}>What do you want to do ?</Text>
          <TextInput
            style={{
              height: 50,
              width: 200,
              padding: 5,
              borderColor: 'gray',
              borderBottomWidth: 1
            }}
            placeholder="Enter item"
            numberOfLines={1}
            onChangeText={value => setValue(value)}
            value={value}
            clearButtonMode='while-editing'
          />
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: 'blue',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5
            }}
            onPress={() => onSaveNote(value)}>
            <Icon name='plus-square-o' size={25} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ModalScreen;
