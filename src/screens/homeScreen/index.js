import React from 'react';
import {Text, View, SafeAreaView, Pressable} from 'react-native';
import {Loader} from '../../components/loader';
import {useNavigation} from '@react-navigation/native';

import {CreateResponsiveStyle, DEVICE_SIZES} from 'rn-responsive-styles';
import {size} from '../../theme/Size';

// import {TextInput} from 'react-native-web';
export const HomeScreen = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Text style={styles.title}>HomeScreen</Text>
      <View style={styles.container}>
        {/* </View> */}

        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('demoScreen');
            }}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>GO NEXT</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const useStyles = CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },

    fixToText: {
      backgroundColor: 'yellow',
    },
    title: {
      textAlign: 'center',
      fontSize: size.moderateScale(20),
      color: 'red',
      fontWeight: '600',
    },
    loginBtn: {
      margin: 10,
      backgroundColor: '#FF1493',
      paddingVertical: size.moderateScale(5),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: size.moderateScale(10),
      borderWidth: size.moderateScale(1),
      borderRadius: size.moderateScale(10),
      borderColor: 'white',
      // backgroundColor: 'green',
    },
  },
  {
    [DEVICE_SIZES.XS]: {
      container: {
        backgroundColor: 'white',
      },
      inputView: {
        flexDirection: 'column',
        flex: 1,
      },
    },
    [DEVICE_SIZES.SM]: {
      container: {
        backgroundColor: 'yellow',
      },

      inputView: {
        // flex: 1,
        flexDirection: 'column',
      },
      loginBtn: {
        flex: 1,
      },
      fixToText: {
        flexDirection: 'row',
      },
      text: {
        fontSize: 20,
        color: 'red',
      },
    },
    [DEVICE_SIZES.MD]: {
      container: {
        backgroundColor: 'maroon',
      },
      textInput: {
        paddingVertical: size.moderateScale(10),
      },
      fixToText: {
        flexDirection: 'row',
      },
      loginBtn: {
        flex: 1,
      },
      inputView: {
        // alignItems: 'center',
        flexDirection: 'row',
      },
    },
    [DEVICE_SIZES.LG]: {
      container: {
        backgroundColor: 'blue',
      },
      fixToText: {
        flexDirection: 'row',
      },
      loginBtn: {
        flex: 1,
      },
      inputView: {
        flexDirection: 'row',
      },
    },
    [DEVICE_SIZES.XL]: {
      container: {
        backgroundColor: 'pink',
      },
      fixToText: {
        flexDirection: 'row',
        flex: 1,
      },
      loginBtn: {
        flex: 1,
      },
      text: {
        fontSize: 20,
        color: 'black',
      },
      inputView: {
        flexDirection: 'row',
      },
    },
  },
);
