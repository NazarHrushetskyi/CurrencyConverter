import React, {useState} from 'react';

import styles from './style';
import {Text, TextInput, View} from 'react-native';

const Amount = ({symbol, onChangeText}) => {
  const [num, setNum] = useState('1');
  const onChangeInput = event => {
    setNum(event);
    onChangeText(event);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.symbol}>{symbol}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={num}
        onChangeText={onChangeInput}
      />
    </View>
  );
};

export default Amount;
