import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  useDeviceSize,
} from 'rn-responsive-styles';

import * as demoStyle from './demoStyle';
import {store, persistor} from './src/redux';
// import {userData} from './src/redux/actions/UserDataAction';
// import {useDispatch, useSelector} from 'react-redux';
import {DemoScreen} from './src/screens/demoScreen';
// import {TextInput} from 'react-native-web';

import {MainStackNavigation} from './src/navigation/mainStackNavigation';
const App = () => {
  // const navigation = useNavigation();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* // <View style={demoStyle.container()}> */}
        <View style={{flex: 1}}>
          <MainStackNavigation />
          {/* <DemoScreen /> */}
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
