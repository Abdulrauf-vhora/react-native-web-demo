import {size, color} from '../../theme/Size';

export const container = () => ({
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: size.deviceHeight,
  width: size.deviceWidth,
  position: 'absolute',
  transform: [{scale: 2}],
});
