import {currencyList} from '../../constant/currencyList';
import {
  CHARTS_DATA,
  CHARTS_START_DATE,
  CHARTS_END_DATE,
  CHARTS_FROM,
  CHARTS_TO,
} from '../actions/actionsType';

const InitialState = {
  currencyFrom: currencyList[1],
  currencyTo: currencyList[0],
  chartsStartDate: new Date(),
  chartsEndDate: new Date(),
  response: null,
};

const chartsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CHARTS_START_DATE:
      return {...state, chartsStartDate: action.payload};
    case CHARTS_END_DATE:
      return {...state, chartsEndDate: action.payload};
    case CHARTS_FROM:
      return {...state, currencyFrom: action.payload};
    case CHARTS_TO:
      return {...state, currencyTo: action.payload};
    case CHARTS_DATA:
      return {...state, response: action.payload};

    default:
      return state;
  }
};

export default chartsReducer;
