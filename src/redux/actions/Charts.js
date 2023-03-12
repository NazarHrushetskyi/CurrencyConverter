import axios from 'axios';
import {store} from '../store';
import moment from 'moment/moment';

import {
  CHARTS_DATA,
  CHARTS_START_DATE,
  CHARTS_END_DATE,
  CHARTS_FROM,
  CHARTS_TO,
} from './actionsType';

export const setStartDate = payload => ({
  type: CHARTS_START_DATE,
  payload,
});
export const setEndDate = payload => ({
  type: CHARTS_END_DATE,
  payload,
});
export const setCurrencyFrom = payload => ({
  type: CHARTS_FROM,
  payload,
});
export const setCurrencyTo = payload => ({
  type: CHARTS_TO,
  payload,
});

export const fetchCharts = () => {
  return async dispatch => {
    const {chartsStartDate, chartsEndDate, currencyFrom, currencyTo} =
      store.getState().chartsReducer;
    try {
      const {data} = await axios.get(
        `https://api.exchangerate.host/timeseries?start_date=${moment(
          chartsStartDate,
        ).format('YYYY-MM-DD')}&end_date=${moment(chartsEndDate).format(
          'YYYY-MM-DD',
        )}&base=${currencyFrom.code}&symbols=${currencyTo.code}`,
      );

      const result = Object.keys(data.rates).map(key => [
        key,
        Object.values(data.rates[key])[0],
      ]);

      dispatch({
        type: CHARTS_DATA,
        payload: {result, currency: currencyTo.code},
      });
    } catch (error) {
      console.log('API error: ', error);
    }
  };
};
