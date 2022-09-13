import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux';

import {MainStackNavigation} from './src/navigation/mainStackNavigation';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <MainStackNavigation />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
