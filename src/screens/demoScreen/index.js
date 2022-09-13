import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Loader} from '../../components/loader';

import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  useDeviceSize,
} from 'rn-responsive-styles';
import {size} from '../../theme/Size';
import {Button} from '../../components/button';
import {userData} from '../../redux/actions/UserDataAction';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// import {TextInput} from 'react-native-web';
export const DemoScreen = props => {
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = useStyles();
  const deviceSize = useDeviceSize();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {userDetail} = useSelector(state => ({
    userDetail: state.userDataReducer.userDataResponse,
  }));
  useEffect(() => {
    // console.log('userDetail', userDetail);
    // console.log('userDetail name', userDetail.name);
    setName(userDetail.name);
    setAddress(userDetail.address);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Text style={styles.title}>DemoScreen</Text>

      <View style={styles.container}>
        {loading && <Loader />}
        <Text style={styles.text}>Device Size: {deviceSize}</Text>
        <View>
          <Text style={styles.textStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
        {/* </View> */}
        <View style={styles.inputView}>
          <TextInput
            value={name}
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            // secureTextEntry={true}
            onChangeText={val => {
              setName(val);
              // dispatch(userData({name: val}));
            }}
          />
          <TextInput
            value={address}
            style={styles.textInput}
            placeholder="Address"
            placeholderTextColor="#003f5c"
            // secureTextEntry={true}
            onChangeText={val => {
              setAddress(val);
              // dispatch(
              //   userData({
              //     name: userDetail.name,
              //     address: val,
              //   }),
              // );
            }}
          />
        </View>
        <View>
          <Pressable
            onPress={() => {
              setLoading(true);
              // alert('LOGIN press');
              dispatch(
                userData({
                  name: name,
                  address: address,
                }),
              );
              setTimeout(() => {
                setLoading(false);
              }, 300);
            }}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              // navigation.goBack();
              navigation.navigate('homeScreen');
            }}
            // style={styles.loginBtn}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>GO BACK</Text>
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
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: size.moderateScale(20),
      color: 'black',
      fontWeight: '600',
    },
    fixToText: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      backgroundColor: 'yellow',
      // paddingVertical: 10,
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
    demoInput: {
      flex: 1,
      // fontFamily: fonts.latoRegular,
      fontSize: 20,
      padding: 0,
      margin: 0,
      color: 'black',
    },
    text: {
      fontSize: 30,
      color: 'white',
      // paddingBottom: size.moderateScale(10),
    },
    textStyle: {
      fontSize: size.moderateScale(17),
      color: 'white',
      paddingHorizontal: size.moderateScale(10),
    },
    textInput: {
      backgroundColor: '#FFC0CB',
      paddingLeft: size.moderateScale(15),
      borderWidth: 1,
      borderColor: 'red',
      marginVertical: size.moderateScale(8),
      paddingVertical: size.moderateScale(15),
      borderRadius: size.moderateScale(5),
      // flex: 1,
      marginHorizontal: size.moderateScale(10),
      color: 'red',
    },
    inputView: {
      flexDirection: 'row',
      // flex: 1,
    },
  },
  {
    [DEVICE_SIZES.XS]: {
      container: {
        backgroundColor: 'red',
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
