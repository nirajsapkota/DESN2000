import React, { FC } from "react";

import { 
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

import {
  Header,
  News
} from "_common_components";

import {
  COLORS,
  STYLES
} from "_constants";

interface NewsListStackProps {
  navigation: any
}

const NewsListStack: FC<NewsListStackProps> =
  ({ navigation }) => {

  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={[STYLES.container, {flexGrow: 1}]}>
        <Text style={S.title}>News</Text>
        <News navigation={navigation} />
      </ScrollView>
    </View>
  );

}

export default NewsListStack;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 30,
    color: COLORS.SLATE_GRAY
  }
})