import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import STYLES from '../../styles';

const PaymentScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />

      <Text style={STYLES.title}> Top up </Text>
    </SafeAreaView>
  );
}

export default PaymentScreen;

const S = StyleSheet.create({
});