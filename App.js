import React from 'react';
import TabNavigation from './src/router/TabNavigation';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}
