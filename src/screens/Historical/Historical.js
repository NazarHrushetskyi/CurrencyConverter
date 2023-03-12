import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './style';
import gstyles from '../../styles/global';

import MyCalendar from '../../components/calendar/Calendar';
import List from '../../components/currencyList/List';
import Title from '../../components/title/Title';
import CustomBtn from '../../components/customButton/CustomBtn';

import {setDate, setCurrency, fetchData} from '../../redux/actions/Historical';

export default function Historical() {
  const dispatch = useDispatch();
  const {currency, result} = useSelector(state => state.historicalReducer);

  return (
    <SafeAreaView style={gstyles.container}>
      <ImageBackground
        style={gstyles.img}
        source={require('../../assets/img/back.png')}>
        <View style={styles.top}>
          <Text style={styles.timetxt}>Date of History</Text>
          <MyCalendar
            range={false}
            onPress={v => {
              dispatch(setDate(v));
            }}
          />
          <Title title="Base Currency" />
          <List
            value={currency}
            onChangeValue={v => {
              dispatch(setCurrency(v));
            }}
          />
        </View>
        <CustomBtn
          title="Check"
          onClick={() => {
            dispatch(fetchData());
          }}
        />
        {result && (
          <View style={styles.result}>
            <FlatList
              style={styles.list}
              numColumns={3}
              data={result.rates}
              renderItem={({item}) => (
                <View style={styles.box}>
                  <Text style={styles.res_text}>{`${item[0]}: `}</Text>
                  <Text style={styles.res_text}>{item[1].toFixed(4)}</Text>
                </View>
              )}
            />
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
