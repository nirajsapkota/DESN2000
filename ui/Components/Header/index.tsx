import React from 'react';

import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import Neumorphic from '../Neumorphic';
import * as COLORS from '../../Constants/colors';

const Header: React.FC = () => {
  return (
    <View style={S.container}>

      <View style={S.button}>
        <Neumorphic width={60} height={60} background={COLORS.PRIMARY} radius={15}>
          <Ionicons name="md-menu" size={32} color={COLORS.GRAY} />
        </Neumorphic>
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
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginRight: 15
  }
});