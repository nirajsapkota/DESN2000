import React, { FC, useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Neumorphic, Header } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import * as COLORS from '../../Constants/colors';
import STYLES from '../../styles';

interface AccessiblityEmergencyScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const AccessiblityEmergencyScreen: FC<AccessiblityEmergencyScreenProps> = ({ navigation }) => {
  const [helpRequested, setHelpRequested] = useState(false);
  const [helpMessage, setHelpMessage] = useState("");

  return (
    <SafeAreaView>
      <Header navigation={navigation} />

      <View style={STYLES.container}>
        <Text style={STYLES.title}> Accessibility and emergency </Text>

        <View style={{alignItems: 'center'}}>
          <Neumorphic width={335} height={60} radius={10} background={COLORS.LIGHT_RED} style={{marginTop: 20, marginBottom: 20}} centered>
            <Text style={S.warningText}>
              Note: improper use can result in a fine upwards of $250.
            </Text>
          </Neumorphic>
        </View>
          
        <View>

          <View style={[STYLES.row, {alignItems: 'center'}]}>
            <TouchableOpacity style={{ marginRight: 10}} onPress={() => {setHelpRequested(true); setHelpMessage("boarding assistance")}}>
              <Neumorphic width={64} height={64} radius={15} background={COLORS.PRIMARY} centered>
                <Image source={require('./boarding.png')} />
              </Neumorphic>
            </TouchableOpacity>
            <Text style={S.subtitle}> boarding assistance </Text>
          </View>
          
          <View style={[STYLES.row, {alignItems: 'center', marginTop: 20}]}>
            <TouchableOpacity style={{ marginRight: 10}} onPress={() => {setHelpRequested(true); setHelpMessage("alighting assistance")}}>
              <Neumorphic width={64} height={64} radius={15} background={COLORS.PRIMARY} centered>
                <Image source={require('./alighting.png')} />
              </Neumorphic>
            </TouchableOpacity>
            <Text style={S.subtitle}> alighting assistance </Text>
          </View>
          
          <View style={[STYLES.row, {alignItems: 'center', marginTop: 20}]}>
            <TouchableOpacity style={{ marginRight: 10}} onPress={() => {setHelpRequested(true); setHelpMessage("emergency assistance")}}>
              <Neumorphic width={64} height={64} radius={15} background={COLORS.PRIMARY} centered>
                <Image source={require('./ambulance.png')} />
              </Neumorphic>
            </TouchableOpacity>
            <Text style={S.subtitle}> injury or emergency </Text>
          </View>
          
          <View style={[STYLES.row, {alignItems: 'center', marginTop: 20}]}>
            <TouchableOpacity style={{ marginRight: 10}} onPress={() => {setHelpRequested(true); setHelpMessage("duress assistance")}}>
              <Neumorphic width={64} height={64} radius={15} background={COLORS.PRIMARY} centered>
                <Image source={require('./police.png')} />
              </Neumorphic>
            </TouchableOpacity>
            <Text style={S.subtitle}> duress </Text>
          </View>
          
          <View style={[STYLES.row, {alignItems: 'center', marginTop: 20}]}>
            <TouchableOpacity style={{ marginRight: 10}} onPress={() => {setHelpRequested(true); setHelpMessage("assistance")}}>
              <Neumorphic width={64} height={64} radius={15} background={COLORS.PRIMARY} centered>
                <Image source={require('./other.png')} />
              </Neumorphic>
            </TouchableOpacity>
            <Text style={S.subtitle}> other </Text>
          </View>
        
          { 
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
          }

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
  }
});