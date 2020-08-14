import React, { FC } from "react";

import {
  StyleSheet,
  View,
  Text
} from "react-native";

import {
  COLORS
} from "_constants";

interface DisabilityRatingProps {
  rating: string
};

import WheelchairIcon from "_icons/wheelchair.svg";

const DisabilityRating: FC<DisabilityRatingProps> = ({rating}) => {

  var color;
  
  if        (rating === "GOOD")   color = COLORS.LIGHT_GREEN;
  else if   (rating === "OK"  )   color = COLORS.YELLOW;
  else if   (rating === "POOR")   color = COLORS.RED;
  else                            return null;

  return (
    <View style={[S.pill, S.align, {backgroundColor: color}]}>
      <WheelchairIcon width="12" height="12" fill="white" />
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
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 12,
    color: "white"
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10
  }
});