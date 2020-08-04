import React, { FC } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
// import {WebView} from 'react-native-webview'
import { Header } from '../../Components';
import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import ActivityTrips from './Components/ActivityTrips';
import ActivityGraph from './Components/ActivityGraph';

interface ActivityScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const ActivityScreen: FC<ActivityScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header navigation={navigation} />
      {/* padding of 20 */}
      <ScrollView contentContainerStyle={STYLES.container} style={{flex:1}}>

        <Text style={STYLES.title}> Activity </Text>
        
        <Text style={[S.title, {marginTop: 5}]}>Travel frequency and spending</Text>
        <ActivityGraph graphType="frequency"/>
        <ActivityGraph graphType="spendings"/>
        
        <Text style={[S.title, {marginTop: 15, marginBottom: 5}]}>Travel history</Text>
        <ActivityTrips />
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default ActivityScreen;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 18,
    color: COLORS.SLATE_GRAY
  }
});