import React, { FC, useState } from 'react';
import { View, TextInput, Modal, Text, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';

import * as COLORS from '../../../../Constants/colors';
import { Neumorphic } from '../../../../Components';

import MastercardIcon from "./mastercard.svg";
import VisaIcon from "./visa.svg";

interface AddPaymentMethodProps {
  visibility: boolean,
  setVisibility: Function
};

const AddPaymentMethod: FC<AddPaymentMethodProps> = 
  ({ visibility, setVisibility }) => {
  
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cardName, setCardName] = useState("");
    const [CVVNumber, setCVVNumber] = useState("");

    return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visibility}>
      
        
      <View style={[S.darkOverlay, {flex: 1}]}>
      <View style={[S.positioningContainer, {flexGrow: 1}]}>
      <KeyboardAvoidingView
        behavior="padding">
      <View style={S.bottomModal}>

      <ScrollView contentContainerStyle={{alignItems: "center"}}>

        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center', width: 110}}>
            <MastercardIcon style={{marginRight: 15}} />
            <VisaIcon style={{marginRight: 100}} />
            <TouchableOpacity
              onPress={() => setVisibility(false)}>
              <Image source={require('./close.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 25}}>
          <Text style={S.title}> Card Number </Text>
          <TextInput
            style={[S.textbox, S.subtitle]}
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
            keyboardType="number-pad"
            placeholder="e.g. 5592 2047 5714 6304"
            />
        </View>

        <View style={{marginTop: 15}}>
          <Text style={S.title}> Expiry Date </Text>
          <TextInput
            style={[S.textbox, S.subtitle]}
            value={expiryDate}
            onChangeText={text => setExpiryDate(text)}
            keyboardType="number-pad"
            placeholder="e.g. 12/22"
            />
        </View>

        <View style={{marginTop: 15}}>
          <Text style={S.title}> Name on Card </Text>
          <TextInput
            style={[S.textbox, S.subtitle]}
            value={cardName}
            onChangeText={text => setCardName(text)}
            placeholder="e.g. Jane Citizen"
            />
        </View>

        <View style={{marginTop: 15}}>
          <Text style={S.title}> CVV Number </Text>
          <TextInput 
            style={[S.textbox, S.subtitle]}
            value={CVVNumber}
            onChangeText={text => setCVVNumber(text)}
            keyboardType="number-pad"
            placeholder="e.g. 413"
            />
        </View>

        <TouchableOpacity
          onPress={() => setVisibility(false)}
          style={{marginTop: 25}}>
          <Neumorphic
            width={280}
            height={50}
            radius={500}
            background={COLORS.ACCENT}
            centered>
              <Text style={S.btnText}> Save </Text>
          </Neumorphic>
        </TouchableOpacity>
      </ScrollView>

      </View>    
      </KeyboardAvoidingView>
      </View>
      </View>
  
    </Modal>
  );
}

export default AddPaymentMethod;

const S = StyleSheet.create({
  darkOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  positioningContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomModal: {
    backgroundColor: COLORS.PRIMARY,
    width: 413,
    height: 525,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 16,
    color: 'black'
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  btnText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: 'white'
  },
  textbox: {
    width: 370,
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 10,
    paddingLeft: 10
  },
});