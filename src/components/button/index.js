import {View, Pressable, Text} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {} from '../';

export const Button = props => {
  const {buttonStyle, onPress, name, leftIcon, buttonText} = props;
  return (
    <Pressable
      style={[styles.container(), buttonStyle]}
      onPress={onPress}
      disabled={props.disabled}>
      {leftIcon && <View style={styles.svgView()}>{leftIcon}</View>}
      <Text style={[styles.btnTxt(), buttonText]} text={name} />
    </Pressable>
  );
};
