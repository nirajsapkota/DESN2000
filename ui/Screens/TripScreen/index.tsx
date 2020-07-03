import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripScreen = () => {
  return (
    <View style={S.container}>
      <Text style={S.text}> Trip Screen! </Text>
    </View>
  );
};

export default TripScreen;

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