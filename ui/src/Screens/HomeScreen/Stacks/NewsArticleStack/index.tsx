import React, { FC } from "react";

import {
  ScrollView,
  StyleSheet,
  Text
} from "react-native";

import {
  COLORS,
  STYLES
} from "_constants";

interface NewsArticleStackProps {
  route: any
};

const NewsArticleStack: FC<NewsArticleStackProps> =
  ({ route }) => {
  
  const { id } = route.params;

  return (
    <ScrollView contentContainerStyle={STYLES.container}>
      <Text style={S.title}>{ArticleData[id].title}</Text>
      <Text style={S.subtitle_slate}>{ArticleData[id].subtitle}</Text>
      <Text style={S.subtitle_black}>Last updated - {ArticleData[id].lastUpdated}</Text>
    </ScrollView>
  );

}

export default NewsArticleStack;

const ArticleData = [
  { title: "Novel coronavirus (COVID-19)", subtitle: "Latest information", lastUpdated: "15th of July, 2020 at 10:15am", body: "" },
  { title: "L2 and L3 light rail overnight maintenence works", subtitle: "Maintenence coverage", lastUpdated: "12th of July, 2020 at 8:03am", body: "" },
  { title: "Fare changes from 6 July", subtitle: "New pricing", lastUpdated: "1st of July, 2020 at 11:51am", body: "" }
];

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    color: COLORS.SLATE_GRAY,
    fontSize: 24,
    marginBottom: 10
  },
  subtitle_slate: {
    fontFamily: "Arial Rounded MT Bold",
    color: COLORS.SLATE_GRAY,
    fontSize: 16
  },
  subtitle_black: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 16,
    color: "black"
  },
  main: {
    fontFamily: "Arial",
    fontSize: 16,
  }
});