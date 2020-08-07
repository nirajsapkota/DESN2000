import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Neumorphic from '../Neumorphic';
import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';

import COVID from "./covid.svg";
import Fares from "./fares.svg";
import Maintenence from "./maintenence.svg";

const Images = [
  <COVID width={335} height={125} />,
  <Fares width={335} height={125} />,
  <Maintenence width={335} height={125} />
]

interface NewsProps {
  navigation: any,
  preview?: boolean
}

interface NewsListProps {
  navigation: any
}

interface NewsPreviewProps {
  navigation: any
}

const NewsPreview: FC<NewsPreviewProps> = ({ navigation }) => {

  const article = [
    { id: 0, img: "covid.png", title: "Novel coronavirus (COVID-19)", subtitle: "Find out more information and advice" },
  ];

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("News Article", {
          id: 0
        })}>
        <Neumorphic
          width={335}
          height={180}
          background={COLORS.PRIMARY}
          radius={10}>

          <View style={{ width: 335, height: 125}}>
            {Images[0]}
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', height: 55}}>
            <View style={{width: 300, left: 15}}>
              <Text style={S.title}>{article[0].title}</Text>
              <Text style={S.subtitle}>{article[0].subtitle}</Text>
            </View>
            <View style={{width: 35}}>
              <Image source={require("./chevron-forward.png")} />
            </View>
          </View>

        </Neumorphic>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate("Latest News")}>
        <Text style={[STYLES.subtitle, {marginTop: 15, width: 335}]}> See all news stories... </Text>
      </TouchableOpacity>
    </View>
  );

}

const NewsList: FC<NewsListProps> = ({ navigation }) => {

  const articles = [
    { id: 0, img: "covid", title: "Novel coronavirus (COVID-19)", subtitle: "Find out more information and advice" },
    { id: 1, img: "maintenence", title: "L2 and L3 light rail overnight maintenence works", subtitle: "Tuesday, 14th of July, 2020" },
    { id: 2, img: "fares", title: "Fare changes from 6 July", subtitle: "Learn more about the changes" },
  ];

  return (
    <View style={{marginBottom: 50}}>
      {articles.map(article =>
        <TouchableOpacity
        style={{marginBottom: 15}}
        onPress={() => navigation.navigate("News Article", {
          id: article.id
        })}>
        <Neumorphic
          width={335}
          height={180}
          background={COLORS.PRIMARY}
          radius={10}>

          <View style={{ width: 335, height: 125}}>
            {Images[article.id]}
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', height: 55}}>
            <View style={{width: 300, left: 15}}>
              <Text style={S.title}>{article.title}</Text>
              <Text style={S.subtitle}>{article.subtitle}</Text>
            </View>
            <View style={{width: 35}}>
              <Image source={require("./chevron-forward.png")} />
            </View>
          </View>

        </Neumorphic>
      </TouchableOpacity>
      )}
    </View>
  );

}

const News: FC<NewsProps> = ({ navigation, preview }) => {
  return (
    <View style={{marginTop: 15, alignItems: "center"}}>
      {preview ? <NewsPreview navigation={navigation} /> : <NewsList navigation={navigation} />}
    </View>
  );
}

export default News;

const S = StyleSheet.create({
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'black'
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.GRAY
  }
})