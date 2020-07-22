import React, { FC } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { Header, Trips } from '../../Components';
import STYLES from '../../styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface TripScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const TripScreen: FC<TripScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      
      <ScrollView contentContainerStyle={STYLES.container}>
        <Text style={STYLES.title}> Trips </Text>

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Pinned Trips </Text>
        <Trips pinned />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Trips </Text>
        <Trips />

      </ScrollView>
    </SafeAreaView>
  );
}

export default TripScreen;

const S = StyleSheet.create({
});