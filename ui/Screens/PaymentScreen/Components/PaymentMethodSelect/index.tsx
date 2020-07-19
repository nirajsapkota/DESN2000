import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Neumorphic } from '../../../../Components';

const PaymentMethodSelect: React.FC = () => {
  return (
    <View>
      <Neumorphic width={350} height={60} style={{marginTop: 15}} >
        <View style={S.container}>
          <FontAwesome name="cc-mastercard" size={48} color="#D50000" />
          <Text style={S.boldText}> Mastercard </Text>
          <Text> **** 0172 </Text>
        </View>
      </Neumorphic>
      <Neumorphic width={350} height={60} style={{marginTop: 10}} >
        <View style={S.container}>
          <FontAwesome name="cc-visa" size={48} color="#1565C0" />
          <Text style={S.boldText}> Visa </Text>
          <Text> **** 6942 </Text>
        </View>
      </Neumorphic>
    </View>
  );
};

export default PaymentMethodSelect;

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 14,
    fontWeight: '700'
  }
});