import React, {useState} from 'react';
import {FlatList, Text, Image, TouchableOpacity, View} from 'react-native';

import styles from './style';

import {currencyList} from '../../constant/currencyList';
import {Modal} from 'react-native';

export default function List({value, onChangeValue, title}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}>
          <View style={styles.item}>
            <View>
              <Image style={styles.flag} source={value.img} />
            </View>
            <Text style={styles.item_text}>{value.code}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        visible={open}
        style={styles.modal}
        transparent={true}>
        <FlatList
          style={styles.list}
          data={currencyList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                onChangeValue(item);
                setOpen(false);
              }}>
              <View style={styles.info}>
                <View style={styles.ileft}>
                  <Image source={item.img} />
                  <Text style={styles.textList}>{item.label}</Text>
                </View>
                <Text style={styles.textList}>{item.code}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
}
