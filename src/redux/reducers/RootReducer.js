import {combineReducers} from 'redux';
import convertReducer from './ConvertReducer';
import historicalReducer from './HistoricalReducer';
import comparisonReducer from './ComparisonReducer';
import chartsReducer from './ChartReducer';

const RootReducer = combineReducers({
  convertReducer,
  historicalReducer,
  comparisonReducer,
  chartsReducer,
});

export default RootReducer;
