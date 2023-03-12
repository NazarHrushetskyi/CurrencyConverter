import React from 'react';
import {ImageBackground, Text, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import moment from 'moment';

import styles from './style';
import gstyles from '../../styles/global';

import MyCalendar from '../../components/calendar/Calendar';
import Chart from '../../components/chart/Chart';
import List from '../../components/currencyList/List';
import CustomBtn from '../../components/customButton/CustomBtn';

import {
  fetchCharts,
  setCurrencyFrom,
  setCurrencyTo,
  setStartDate,
  setEndDate,
} from '../../redux/actions/Charts';

export default function Charts() {
  const dispatch = useDispatch();

  const {currencyFrom, currencyTo, response} = useSelector(
    state => state.chartsReducer,
  );

  return (
    <SafeAreaView style={gstyles.container}>
      <ImageBackground
        style={gstyles.img}
        source={require('../../assets/img/back.png')}>
        <View>
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
              dispatch(fetchCharts());
            }}
          />

          {response && (
            <View style={styles.chart}>
              <Chart
                curCode={response.currency}
                dates={response.result.map(item =>
                  moment(item[0]).format(' DD/MM'),
                )}
                resChart={response.result.map(item =>
                  Number(item[1].toFixed(5)),
                )}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
