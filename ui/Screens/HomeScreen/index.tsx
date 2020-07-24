import React, { FC } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { Header, OpalCardSelector, Trips, News } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import STYLES from '../../styles';

interface HomeScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>
        
        <Text style={STYLES.title}> Home </Text>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Your cards </Text>
        <OpalCardSelector />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Pinned trips </Text>
        <Trips navigation={navigation} pinned />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> News </Text>
        <News preview />

      </ScrollView>
   
    </SafeAreaView>
  );
}

export default HomeScreen;

const S = StyleSheet.create({
});