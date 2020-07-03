import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={S.container}>
      <Text style={S.text}> Home Screen! </Text>
    </View>
  );
};

export default HomeScreen;

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1F29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});