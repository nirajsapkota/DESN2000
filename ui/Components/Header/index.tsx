import React, { FC } from 'react';

import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import Neumorphic from '../Neumorphic';
import * as COLORS from '../../Constants/colors';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface HeaderProps {
  navigation: DrawerNavigationProp<any, any>;
}

const Header: FC<HeaderProps> = ({ navigation }) => {
  return (
    <View style={S.container}>

      <View style={S.button}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Neumorphic width={60} height={60} background={COLORS.PRIMARY} radius={15} centered>
            <Ionicons name="md-menu" size={32} color={COLORS.GRAY} />
          </Neumorphic>
        </TouchableOpacity>
      </View>

      <View>
        <Image source={require('./logo.png')} />
      </View>

    </View>
  );
};

export default Header;

const S = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginRight: 15
  }
});