import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  FlatList,
} from 'react-native';

import styles from './style';
import gstyles from '../../styles/global';

import {useSelector, useDispatch} from 'react-redux';

import List from '../../components/currencyList/List';
import MyCalendar from '../../components/calendar/Calendar';
import CustomBtn from '../../components/customButton/CustomBtn';

import {
  fetchDataComp,
  setStartDate,
  setEndDate,
  setCurrencyFrom,
  setCurrencyTo,
} from '../../redux/actions/Comparison';

export default function Comparison() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const {currencyFrom, currencyTo, result} = useSelector(
    state => state.comparisonReducer,
  );

  return (
    <SafeAreaView style={gstyles.container}>
      <ImageBackground
        style={gstyles.img}
        source={require('../../assets/img/back.png')}>
        <View style={styles.block}>
          <View style={styles.subblock}>
            <Text style={styles.timetxt}> Starting Date</Text>
            <MyCalendar
              onPress={v => {
                dispatch(setStartDate(v));
              }}
            />
          </View>
          <View style={styles.subblock}>
            <Text style={styles.timetxt}> Ending Date</Text>
            <MyCalendar
              onPress={v => {
                dispatch(setEndDate(v));
              }}
            />
          </View>
        </View>
        <View style={styles.block2}>
          <List
            value={currencyFrom}
            onChangeValue={v => dispatch(setCurrencyFrom(v))}
            title="From"
          />
          <List
            value={currencyTo}
            onChangeValue={v => dispatch(setCurrencyTo(v))}
            title="To"
          />
        </View>
        <CustomBtn
          title="Send"
          onClick={() => {
            dispatch(fetchDataComp());
            setOpen(true);
          }}
        />

        {!!result && open && (
          <View style={styles.result}>
            <FlatList
              style={styles.list}
              data={result.res}
              renderItem={({item}) => (
                <View style={styles.box}>
                  <Text style={styles.res_text}>{`${item[0]}: `}</Text>
                  <Text style={styles.res_text}>{item[1].toFixed(5)}</Text>
                </View>
              )}
            />
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
