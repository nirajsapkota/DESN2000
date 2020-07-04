import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import styles from '../../styles';

const TripScreen: React.FC = () => {
  return (
    <SafeAreaView style={S.container}>
      <Header />
      <Text style={styles.screenTitle}> Trips </Text>  
    </SafeAreaView>
  );
}

export default TripScreen;

const S = StyleSheet.create({
  container: {
    flex: 1,
  }
});