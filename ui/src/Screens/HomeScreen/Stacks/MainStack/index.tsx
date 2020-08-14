import React, { FC } from "react";

import { 
  SafeAreaView,
  ScrollView,
  Text
} from "react-native";

import { 
  OpalCardSelector,
  Header,
  Trips,
  News
} from "_common_components";

import {
  STYLES
} from '_constants';

interface MainStackProps {
  navigation: any
};

const MainStack: FC<MainStackProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={[STYLES.container, {flexGrow: 1}]}>
        
        <Text style={STYLES.title}> Home </Text>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Your cards </Text>
        <OpalCardSelector navigation={navigation} />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Pinned trips </Text>
        <Trips navigation={navigation} pinned />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> News </Text>
        <News navigation={navigation} preview />

      </ScrollView>
    </SafeAreaView>
  );
}

export default MainStack;