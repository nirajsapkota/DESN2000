import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import styles from '../../styles';

const PaymentScreen: React.FC = () => {
  return (
    <SafeAreaView style={S.container}>
      <Header />
      <Text style={styles.screenTitle}> Top Up </Text>  
    </SafeAreaView>
  );
}

export default PaymentScreen;

const S = StyleSheet.create({
  container: {
    flex: 1,
  }
});