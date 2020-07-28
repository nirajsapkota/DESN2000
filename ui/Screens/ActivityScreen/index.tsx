import React, { FC } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
// import {WebView} from 'react-native-webview'
import { Header } from '../../Components';
import STYLES from '../../styles';
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
        {/* <ScrollView style={{flex:1}}> */}


        <Text style={STYLES.title}> Activity </Text>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Travel frequency and spending </Text>
        <ActivityGraph graphType="frequency"/>
        <ActivityGraph graphType="spendings"/>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Travel history </Text>
        <ActivityTrips />
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default ActivityScreen;

const S = StyleSheet.create({
});