import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles'

function Header(props) {
  const { title } = props
  const listItems = useSelector(state => state.itemList)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>Left: {listItems.length}</Text>
    </View>
  )
}

export default Header;
