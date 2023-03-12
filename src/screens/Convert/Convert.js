import React from 'react';
import {SafeAreaView, ImageBackground, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  setAmount,
  setFrom,
  setTo,
  swapCurrency,
  fetchCurrency,
} from '../../redux/actions/Convert';

import styles from './style';
import gstyles from '../../styles/global';

import Title from '../../components/title/Title';
import Amount from '../../components/amount/Amount';
import List from '../../components/currencyList/List';
import Swap from '../../components/swapButton/Swap';
import CustomBtn from '../../components/customButton/CustomBtn';

export default function Convert() {
  const dispatch = useDispatch();
  const {fromCur, toCur, amount, result} = useSelector(
    state => state.convertReducer,
  );

  return (
    <SafeAreaView style={gstyles.container}>
      <ImageBackground
        style={gstyles.img}
        source={require('../../assets/img/back.png')}>
        <View style={styles.block}>
          <Title title="Amount" />
          <Amount
            symbol={fromCur.symbol}
            value={amount}
            onChangeText={v => {
              dispatch(setAmount(v));
            }}
          />
          <View style={styles.convert}>
            <List
              value={fromCur}
              onChangeValue={v => dispatch(setFrom(v))}
              title="From"
            />
            <View style={styles.btn}>
              <Swap onClick={() => dispatch(swapCurrency())} />
            </View>
            <List
              value={toCur}
              onChangeValue={v => dispatch(setTo(v))}
              title="To"
            />
          </View>
        </View>
        <CustomBtn
          title="Convert"
          onClick={() => {
            dispatch(fetchCurrency());
          }}
        />

        <View style={styles.result}>
          {result && (
            <View style={styles.resInfo}>
              <View>
                <Text
                  style={
                    styles.resText
                  }>{`${result.fromCur.value} ${result.fromCur.label}=`}</Text>
                <Text style={styles.resText}>{`${result.toCur.value.toFixed(
                  4,
                )} ${result.toCur.label}`}</Text>
              </View>
              <View style={styles.resView}>
                <Text style={styles.resText}>{`1 ${
                  result.fromCur.code
                } = ${result.rate.toFixed(4)} ${result.toCur.code} `}</Text>
                <Text style={styles.resText}>{`1 ${result.toCur.code} = ${(
                  1 / result.rate
                ).toFixed(4)} ${result.fromCur.code}`}</Text>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
