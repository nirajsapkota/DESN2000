import React, { FC } from "react";

import { 
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  View,
  Text
} from "react-native";

import {
  Neumorphic
} from "_common_components";

import {
  COLORS
} from "_constants";

import Success from "_icons/success.svg";

interface PaymentSuccessProps {
  visibility: boolean,
  amountToppedUp: number,
  cardNickname: string,
  setVisibility: Function
};

const PaymentSuccess: FC<PaymentSuccessProps> = 
  ({ visibility, setVisibility, amountToppedUp, cardNickname }) => {
  
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visibility}>

      <View style={S.darkOverlay}>
      <View style={S.positioningContainer}>
      <View style={S.bottomModal}>
      
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 25}}>
          <Success />
          <Text style={S.title}> Payment Success </Text>
        </View>

        <View style={{width: 330, marginBottom: 30}}>
          <Text style={S.subtitle}>
            Successfully added ${amountToppedUp} to {cardNickname}’s account.
            Thank you for your payment.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setVisibility(false)}>
          <Neumorphic
            width={130}
            height={50}
            radius={5}
            background={COLORS.ACCENT}
            centered>
              <Text style={S.btnText}> Take Me Home </Text>
          </Neumorphic>
        </TouchableOpacity>

      </ScrollView>

      </View>    
      </View>
      </View>
  
    </Modal>
  );
}

export default PaymentSuccess;

const S = StyleSheet.create({
  darkOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  positioningContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bottomModal: {
    backgroundColor: COLORS.PRIMARY,
    width: "100%",
    height: 350,
    borderRadius: 30
  },
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 24,
    color: COLORS.GREEN,
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  btnText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 16,
    color: 'white'
  }
});