import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BlueButtonProps {
  width: number,
  height: number,
  borderRadius: number,
  text: String
}

const BlueButton: React.FC<BlueButtonProps> = ({ width, height, borderRadius, text }) => {

  const S = StyleSheet.create({
    default: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      backgroundColor: '#4070F4',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
    }, 
    text: {
      color: '#EDF0F4',
      fontWeight: '500',
      fontSize: 14
    }
  })

  return (
    <View style={S.default}>
      <Text style={S.text}> {text} </Text>
    </View>
  );
};

export default BlueButton;