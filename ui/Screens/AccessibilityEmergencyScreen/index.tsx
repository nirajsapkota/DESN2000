import React, { FC, useState } from 'react';

import {
  TouchableOpacity, SafeAreaView, StyleSheet, Image,
  View, Text
} from 'react-native';

import {
  Neumorphic, Header
} from '../../Components';

import {
  DrawerNavigationProp
} from '@react-navigation/drawer';

import * as COLORS from '../../Constants/colors';
import STYLES from '../../styles';

import Dialog from "react-native-dialog";
import Snackbar from 'react-native-snackbar-component';

interface NeumorphicAlertProps {
  children: any,
  width?: number,
  height?: number,
  radius?: number,
  color?: string
}

interface NeumorphicImageButtonProps {
  src: string,
  size?: number,
  radius?: number,
  color?: string,
  requestHandler: Function,
  message: string,
  title: string
}

interface AccessiblityEmergencyScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const NeumorphicAlert: FC<NeumorphicAlertProps> = 
  ({children, width, height, radius, color}) => {

  return (
    <Neumorphic
      width={width || 335}
      height={height || 60}
      radius={radius || 10}
      background={color || COLORS.ACCENT}
    >
      <Text> {children} </Text>
    </Neumorphic>
  );

}

const NeumorphicImageButton: FC<NeumorphicImageButtonProps> =
  ({src, size, radius, color, requestHandler, message, title}) => {

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
      <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => {requestHandler(message)}}>
  
        <Neumorphic
          width={size || 64}
          height={size || 64}
          radius={radius || 10}
          background={color || COLORS.PRIMARY}
          centered>
          
          <Image source={require('./boarding.png')} />
        </Neumorphic>
      
      </TouchableOpacity>
      <Text> {title} </Text>
    </View>
  );
}

const AccessiblityEmergencyScreen: FC<AccessiblityEmergencyScreenProps> = ({
  navigation }) => {

  const [helpRequested, setHelpRequested] = useState(false);
  const [helpMessage, setHelpMessage] = useState("");
  const [visible, setVisible] = useState(false);
  

  function HandleRequest(message: string): void {
    setHelpRequested(false);
    setHelpMessage(message);
    setVisible(true);
  }

  function confirmHelp(): void {
    setHelpRequested(true);
    setVisible(false);
    setHelpMessage("You've requested " + helpMessage + ", help is on the way!");
  }

  function doneHelp(): void {
    setHelpRequested(false);
    setVisible(false);
  }

  function quitDialog(): void {
    setVisible(false);
  }




  return (
    <SafeAreaView>
      <Header navigation={navigation} />

      <View style={STYLES.container}>
        
        <Text style={STYLES.title}> Accessibility and emergency </Text>
        
        <NeumorphicAlert color={COLORS.LIGHT_RED}>
          Note: improper use can result in a fine upwards of $250.
        </NeumorphicAlert>
        
        <View>

          <NeumorphicImageButton
            src={'./boarding.png'}
            requestHandler={HandleRequest}
            message={'boarding assistance'}
            title={'Boarding assistance'}
          />
          
          <NeumorphicImageButton
            src={'./alighting.png'}
            requestHandler={HandleRequest}
            message={'alighting assistance'}
            title={'Alighting assistance'}
          />
          
          <NeumorphicImageButton
            src={'./ambulance.png'}
            requestHandler={HandleRequest}
            message={'emergency assistance'}
            title={'Injury or emergency'}
          />
          
          <NeumorphicImageButton
            src={'./police.png'}
            requestHandler={HandleRequest}
            message={'Duress assistance'}
            title={'Duress'}
          />
        
          <NeumorphicImageButton
            src={'./other.png'}
            requestHandler={HandleRequest}
            message={'assistance'}
            title={'Other'}
          />


          <View>
            <Dialog.Container visible={visible}>
              <Dialog.Title>Confirm Assistance</Dialog.Title>
              <Dialog.Description>
                Are you sure?
              </Dialog.Description>
              <Dialog.Button label="No" onPress={quitDialog}/>
              <Dialog.Button label="Yes" onPress={confirmHelp}/>
            </Dialog.Container>
          </View>


          {/* { 
            helpRequested ? 
              <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
                <Text style={S.helpText}>
                  You've requested
                  <Text style={S.coloredHelpText}>
                    {" " + helpMessage}
                  </Text>
                  , help is on the way! </Text>
              </View>
            :
              null
          } */}

          <Snackbar 
            visible={helpRequested}
            textMessage={helpMessage}
            actionHandler={() => {
              {doneHelp};
              setHelpRequested(false);
            }}
            actionText="x"
          />

        </View>

      </View>
    </SafeAreaView>
  );
}

export default AccessiblityEmergencyScreen;

const S = StyleSheet.create({
  warningText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'white',
    width: 280
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: '#797C8D'
  },
  helpText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'black',
  },
  coloredHelpText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.ACCENT,
  },
});