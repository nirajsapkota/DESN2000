import React, { FC } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as COLORS from '../../../../Constants/colors';

interface DisabilityRatingProps {
  rating: string
}

const DisabilityRating: FC<DisabilityRatingProps> = ({rating}) => {

  var color;
  
  if        (rating === "GOOD")   color = COLORS.LIGHT_GREEN;
  else if   (rating === "OK"  )   color = COLORS.YELLOW;
  else if   (rating === "POOR")   color = COLORS.RED;
  else                            return null;

  return (
    <View style={[S.pill, S.align, {backgroundColor: color}]}>
      <Image source={require('./wheelchair.png')} />
      <Text style={S.text}> {rating} </Text>
    </View>
  );

}

export default DisabilityRating;

const S = StyleSheet.create({
  pill: {
    width: 75,
    height: 18,
    borderRadius: 500,
    marginTop: 1
  },
  text: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: 'white'
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  }
});