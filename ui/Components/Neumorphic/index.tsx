import * as React from 'react';
import color from 'color';
import { View, StyleSheet } from 'react-native';

const BACKGROUND = '#F2F3F7';
const SHADOW = '#BECDE2';
const RADIUS = 10;

interface NeumorphicProps {
  width: number,
  height: number,
  style?: Object,
  children?: Object
}

const Neumorphic: React.FC<NeumorphicProps> = ({ width, height, style, children }) => {
  
  const M = StyleSheet.create({
    default: {
      width: width,
      height: height,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 15,
      borderWidth: 0
    }
  });

  const topStyles = StyleSheet.flatten([
    S.morphTop,
    M.default,
    style,
  ]);

  const bottomStyles = StyleSheet.flatten([
    S.morphBottom,
    M.default
  ]);

  const morphStyles = StyleSheet.flatten([
    S.morph,
    M.default,
  ]);

  return (
    <View style={topStyles}>
      <View style={bottomStyles}>
        <View style={morphStyles}>{children}</View>
      </View>
    </View>
  );

};

export default Neumorphic;

const S = StyleSheet.create({
  morph: {
    borderRadius: RADIUS,
    borderWidth: 1,
    backgroundColor: BACKGROUND,
    borderColor: color(BACKGROUND)
      .lighten(0.5)
      .alpha(0.2).toString(),
  },
  morphTop: {
    borderRadius: RADIUS,
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: color(SHADOW)
      .lighten(0.15)
      .alpha(1).toString(),
  },
  morphBottom: {
    borderRadius: RADIUS,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: color(SHADOW)
      .darken(0.3)
      .alpha(0.5).toString(),
  },
});