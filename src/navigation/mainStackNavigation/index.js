import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DemoScreen, HomeScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  // const {login, userData} = useSelector(state => ({
  //   login: state.userDataReducer.userDataResponse.login,
  //   userData: state.userDataReducer.userDataResponse.userData,
  // }));
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="splashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="demoScreen" component={DemoScreen} />
        {/* <Stack.Screen
          name="authStackNavigation"
          component={AuthStackNavigation}
        />
        <Stack.Screen
          name="bottomStackNavigation"
          component={BottomStackNavigation}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
