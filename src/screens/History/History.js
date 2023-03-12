import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';

import CustomBtn from '../../components/customButton/CustomBtn';

import gstyles from '../../styles/global';
import styles from './style';

export default function History() {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState('');

  const fetchHistoryData = async () => {
    const data = await AsyncStorage.getItem('history');
    setDatas(JSON.parse(data));
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchHistoryData();
    }, []),
  );
  useEffect(() => {
    fetchHistoryData();
  }, [datas]);

  const clearStorage = async () => {
    await AsyncStorage.clear();
  };

  return (
    <SafeAreaView style={gstyles.container}>
      <ImageBackground
        style={gstyles.img}
        source={require('../../assets/img/back.png')}>
        {!datas ? (
          <View>
            <Text style={styles.text}>History is empty</Text>
            <View style={styles.pack}>
              <Image
                style={styles.img}
                source={require('../../assets/img/boxs.png')}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.result}>
              <FlatList
                style={styles.list}
                data={datas}
                renderItem={({item}) => (
                  <View style={styles.box}>
                    <Text style={styles.time}>
                      {moment(item.dates).format('MMMM Do YYYY h:mm:ss ')}
                    </Text>
                    <Text style={styles.code}>
                      {`${item.fromCur.code} to ${item.toCur.code} `}
                    </Text>
                    <Text style={styles.val}>
                      {`${item.fromCur.symbol} ${item.fromCur.value} = ${
                        item.toCur.symbol
                      } ${item.toCur.value.toFixed(4)}`}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View className={styles.btn}>
              <CustomBtn
                title="Clear"
                onClick={() => {
                  dispatch(clearStorage);
                }}
              />
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
