import {size} from '../../theme/Size';
export const container = () => ({
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  flexDirection: 'row',
  borderRadius: size.moderateScale(10),
  borderColor: 'white',
  backgroundColor: 'green',
});

export const btnTxt = () => ({
  fontSize: size.moderateScale(15),
  color: 'black',
  // fontFamily: fonts.latoRegular,
});

export const svgView = () => ({
  paddingRight: size.moderateScale(5),
});
