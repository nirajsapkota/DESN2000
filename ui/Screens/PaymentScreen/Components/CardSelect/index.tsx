import React from 'react';
import { View } from 'react-native';
import { Neumorphic } from '../../../../Components';

const CardSelect: React.FC = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Neumorphic width={350} height={200} style={{marginTop: 10}} />
    </View>
  );
};

export default CardSelect;