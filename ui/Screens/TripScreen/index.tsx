import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import STYLES from '../../styles';

const TripScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />
      
      <Text style={STYLES.title}> Trips </Text>
    </SafeAreaView>
  );
}

export default TripScreen;

const S = StyleSheet.create({
});