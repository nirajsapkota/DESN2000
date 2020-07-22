import React, { FC } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import STYLES from '../../styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface ActivityScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const ActivityScreen: FC<ActivityScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>
        <Text style={STYLES.title}> Activity </Text>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Travel frequency and spending </Text>

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Travel history </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ActivityScreen;

const S = StyleSheet.create({
});