import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Header, BlueButton } from '../../Components';
import styles from '../../styles';

import {
  CardSelect,
  TopUpAmountSelect,
  PaymentMethodSelect
} from './Components';

const PaymentScreen: React.FC = () => {
  return (
    <SafeAreaView>

      <Header />
      <Text style={styles.screenTitle}> Top Up </Text>
      
      <Text style={styles.header}> SELECT CARD TO TOP UP </Text>
      <CardSelect />
      
      <Text style={styles.header}> SELECT TOP UP AMOUNT </Text>
      <TopUpAmountSelect />
      
      <Text style={styles.header}> SELECT PAYMENT METHOD </Text>

      <View style={S.center}>
        <PaymentMethodSelect />
        <BlueButton width={320} height={70} borderRadius={500} text="Pay with Card **** 0172" />
      </View>
      
    </SafeAreaView>
  );
}

export default PaymentScreen;

const S = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});