import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Neumorphic } from '..';

const Header: React.FC = () => {
  return (
    <View style={{marginTop: 30, marginLeft: -13}}>
      <Neumorphic width={60} height={60}>
        <Ionicons name="md-menu" size={32} color="#8C94A4" />
      </Neumorphic>
    </View>
  );
};

export default Header;