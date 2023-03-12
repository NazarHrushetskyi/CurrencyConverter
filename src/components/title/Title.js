import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';

export default function Title({title}) {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
