import React, { FC } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
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
    <SafeAreaView>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container} style={{flex:1}}>
        <Text style={STYLES.title}> Activity </Text>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Travel frequency and spending </Text>
        <ActivityGraph />
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Travel history </Text>
        <ActivityTrips />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ActivityScreen;

const S = StyleSheet.create({
});