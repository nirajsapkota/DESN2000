import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Neumorphic from '../Neumorphic';
import * as COLORS from '../../Constants/colors';

interface NewsProps {
  preview?: boolean
}

const NewsPreview: FC = () => {

  const article = [
    { id: 0, img: "covid.png", title: "Novel coronavirus (COVID-19)", subtitle: "Find out more information and advice" },
  ];

  return (
    <TouchableOpacity>
      <Neumorphic width={335} height={180} background={COLORS.PRIMARY} radius={10}>
        <View style={{ width: 335, height: 125}}>
          <Image source={require('./covid.png')} style={{flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10}} resizeMode='cover' />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', height: 55 }}>
          <View style={{ width: 300, left: 15 }}>
            <Text style={S.title}> {article[0].title} </Text>
            <Text style={S.subtitle}> {article[0].subtitle} </Text>
          </View>
          <View style={{ width: 35 }}>
            <Image source={require("./chevron-forward.png")} />
          </View>
        </View>
      </Neumorphic>
    </TouchableOpacity>
  );

}

const NewsList: FC = () => {

  const articles = [
    { id: 0, img: "covid.png", title: "Novel coronavirus (COVID-19)", subtitle: "Find out more information and advice" },
    { id: 1, img: "maintenence.png", title: "L2 and L3 light rail overnight maintenence works", subtitle: "Tuesday, 14th of July, 2020" },
    { id: 2, img: "fares.png", title: "Fare changes from 6 July", subtitle: "Learn more about the changes" }
  ];

  return (
    <View>
      {articles.map(article =>
        <Neumorphic key={article.id} width={335} height={180} background={COLORS.PRIMARY} radius={10}>
          {/* <Image source={require("./".concat(article.img))} /> */}
        </Neumorphic>
      )}
    </View>
  );

}

const News: FC<NewsProps> = ({ preview }) => {
  return (
    <View style={{ marginTop: 15, alignItems: "center" }}>
      {preview ? <NewsPreview /> : <NewsList />}
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