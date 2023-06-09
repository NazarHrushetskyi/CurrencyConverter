import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../store';
import {
  CONVERT_AMOUNT,
  CONVERT_FROM,
  CONVERT_TO,
  CONVERT_SWAP,
  DATA_CONVERT,
} from './actionsType';

export const setAmount = payload => ({
  type: CONVERT_AMOUNT,
  payload,
});
export const setFrom = payload => ({
  type: CONVERT_FROM,
  payload,
});
export const setTo = payload => ({
  type: CONVERT_TO,
  payload,
});
export const swapCurrency = () => ({
  type: CONVERT_SWAP,
});

export const fetchCurrency = () => {
  return async dispatch => {
    const {fromCur, toCur, amount} = store.getState().convertReducer;

    let datas = await AsyncStorage.getItem('history');

    datas = datas ? JSON.parse(datas) : [];

    try {
      const {data} = await axios.get(
        `https://api.exchangerate.host/convert?from=${fromCur.code}&to=${toCur.code}&amount=${amount}`,
      );

      await AsyncStorage.setItem(
        'history',
        JSON.stringify([
          ...datas,
          {
            fromCur: {...fromCur, value: amount},
            toCur: {...toCur, value: data.result},
            dates: new Date(),
          },
        ]),
      );
      dispatch({
        type: DATA_CONVERT,
        payload: {
          fromCur: {...fromCur, value: amount},
          toCur: {...toCur, value: data.result},
          rate: data.info.rate,
        },
      });
    } catch (error) {
      console.log('API error:', error);
      alert('Error retrieving currency');
    }
  };
};
