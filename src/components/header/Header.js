import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}
