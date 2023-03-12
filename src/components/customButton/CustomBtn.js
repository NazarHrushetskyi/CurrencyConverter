import React from 'react';

import {TouchableOpacity, View, Text} from 'react-native';

import styles from './style';

export default function CustomBtn({title, onClick}) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
