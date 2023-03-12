import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import styles from './style';

export default function Swap({onClick}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}>
      <View style={styles.btn}>
        <Image
          style={styles.img}
          source={require('../../assets/img/swap.png')}
        />
      </View>
    </TouchableOpacity>
  );
}
