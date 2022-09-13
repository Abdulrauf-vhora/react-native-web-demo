import {Platform} from 'react-native';
import {size} from 'thene';
import {GetDeviceWidth} from './utils/getSize';

let isWeb = Platform.OS == 'web' ? true : false;
console.log('GetDeviceWidth =>', GetDeviceWidth());

export const container = val => ({
  flex: 1,
  backgroundColor: 'yellow',
});

export const flatlistCard = () => ({
  backgroundColor: 'red',
  borderRadius: 5,
  marginTop: size.moderateScale(12),
  marginLeft: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(5),
  paddingVertical: size.moderateScale(10),
  width: size.moderateScale(150),
  height: size.moderateScale(100),
  alignItems: 'center',
  justifyContent: 'center',
});
export const inputView = () => ({
  borderWidth: 0,
  paddingTop: 10,
  backgroundColor: 'red',
  // alignSelf: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
});
export const TextInput = () => ({
  backgroundColor: '#FFC0CB',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: size.moderateScale(10),
  outline: 'none',
  borderWidth: 1,
  marginBottom: size.moderateScale(10),
  paddingVertical: size.moderateScale(14),
  borderRadius: size.moderateScale(8),
  marginLeft: size.moderateScale(10),
  width: size.moderateScale(240),
});
export const forgot_button = () => ({
  height: 30,
  marginBottom: 30,
});
export const loginBtn = () => ({
  width: size.deviceWidth / 3,
  // width: isWeb ? size.deviceWidth * 0.3 : size.deviceWidth * 0.7,
  borderRadius: 25,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40,
  backgroundColor: '#FF1493',
});
