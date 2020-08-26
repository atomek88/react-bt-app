import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, FlatList, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/rootReducer';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Header from '../components/Header';
//import ListView from '../components/ListView';

function ListView() {
  const listItems = useSelector(state => state.itemList)
  console.log({ listItems })
  const dispatch = useDispatch()

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 100,
        paddingVertical: 70
      }}>
      {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          keyExtractor={ item => item.id.toString() }
          renderItem={ ({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeItem(item.id))}
                style={styles.button}>
                <Icon name='trash' color='#fff' size={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={{ fontSize: 30 }}>You list is empty :'(</Text>
      )}
    </View>
  )
}
function ListScreen({ navigation }) {
  return (
    <>
    <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <Text>List Screen</Text>
        <Header title={'List'} />
        <ListView />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Modal')}
            style={styles.fabButton}>
            <Icon name='rocket' color='#fff' size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}


export default ListScreen;
