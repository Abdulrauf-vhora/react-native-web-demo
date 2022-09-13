import {useWindowDimensions} from 'react-native';

export const GetDeviceWidth = async val => {
  //   console.log('UTILS');
  const {height, width} = useWindowDimensions();
  //   console.log('UTILS width', width);
  //   const medium = width <= 992;
  return width;
};
