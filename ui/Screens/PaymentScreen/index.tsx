import React, { FC, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { 
  PaymentMethodSelect,
  TopUpAmountSelect
} from './Components';

import {
  Header,
  Neumorphic,
  OpalCardSelector
} from '../../Components';

import { Ionicons } from '@expo/vector-icons'; 
import * as COLORS from '../../Constants/colors';
import STYLES from '../../styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface PaymentScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const PaymentScreen: FC<PaymentScreenProps> = ({ navigation }) => {
  const [currentBalance, setCurrentBalance] = useState(5.32);
  const [topUpAmount, setTopUpAmount] = useState(5);

  return (
    <SafeAreaView>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>
      
        <Text style={[STYLES.title]}> Top up </Text>

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Select card to top up </Text>
        <OpalCardSelector />
      
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Top up amount </Text>
        <TopUpAmountSelect topUpAmount={topUpAmount} setTopUpAmount={setTopUpAmount} />
        <View style={[STYLES.row, STYLES.spaceBetween, {width: 360}]}>
          <Text style={[STYLES.subtitle, {color: 'black'}]}> Balance after top up </Text>
          <Text style={[STYLES.subtitle, {color: 'black'}]}> ${currentBalance + topUpAmount} </Text>
        </View>

        <View style={[STYLES.row, STYLES.spaceBetween, {width: 360, alignItems: 'center'}]}>
          <Text style={[STYLES.subtitle, {marginTop: 15}]}> Payment method </Text>
          {/* <Neumorphic width={32} height={32} radius={16} background={COLORS.ACCENT} centered>
            <Ionicons name="ios-add" size={24} color="white" />
          </Neumorphic> */}
        </View>
        <PaymentMethodSelect />

        <View style={{marginBottom: 100, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => console.log('Paying!')}>    
            <Neumorphic width={280} height={60} radius={500} background={COLORS.ACCENT} centered>
              <Text style={[STYLES.subtitle, {color: 'white'}]}> Pay with Card **** 0172 </Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

export default PaymentScreen;

const S = StyleSheet.create({
});