import React from 'react';
import { View, StyleSheet } from 'react-native';
import color from 'color';

interface NeumorphicProps {
  width: number,
  height: number,
  background: string,
  radius: number,
  pressed?: boolean,
  style?: Object,
  children?: Object
}

const Neumorphic: React.FC<NeumorphicProps> = ({ width, height, background,
  radius, pressed, style, children }) => {
  
  const S = StyleSheet.create({
    morph: {
      borderRadius: radius,
      borderWidth: 1,
      backgroundColor: background,
      borderColor: color(background)
        .lighten(0.5)
        .alpha(0.2).toString(),
    },
    morphTop: {
      borderRadius: radius,
      shadowOffset: {
        width: -6,
        height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: color("#FFFFFF")
        .lighten(0.15)
        .alpha(1).toString(),
    },
    morphBottom: {
      borderRadius: radius,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: color(background)
        .darken(0.3)
        .alpha(0.5).toString(),
    },
  });

  const M = StyleSheet.create({
    default: {
      width: width,
      height: height,
      borderRadius: radius,
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