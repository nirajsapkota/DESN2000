import React, { FC } from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import * as COLORS from '../../../../Constants/colors';
import { Neumorphic } from '../../../../Components';

interface PaymentErrorProps {
  visibility: boolean,
  setVisibility: Function,
};

const PaymentError: FC<PaymentErrorProps> = 
  ({ visibility, setVisibility }) => {
  
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
          <Image source={require('./error.png')} />
          <Text style={S.title}> Payment Error </Text>
        </View>

        <View style={{width: 330, marginBottom: 30}}>
          <Text style={S.subtitle}>
            Failed to process the transaction. Please check your details, and
            try again later.
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "66%"}}>
          <TouchableOpacity
            onPress={() => setVisibility(false)}>
            <Neumorphic
              width={130}
              height={50}
              radius={5}
              background={COLORS.GRAY}
              centered>
                <Text style={S.btnText}> Take Me Home </Text>
            </Neumorphic>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setVisibility(false)}>
            <Neumorphic
              width={130}
              height={50}
              radius={5}
              background={COLORS.ACCENT}
              centered>
                <Text style={S.btnText}> Try Again </Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>

      </ScrollView>
      
      </View>    
      </View>
      </View>
  
    </Modal>
  );
}

export default PaymentError;

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
    color: COLORS.RED,
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