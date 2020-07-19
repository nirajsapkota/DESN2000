import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import STYLES from '../../styles';

const ActivityScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />

      <Text style={STYLES.title}> Activity </Text>
    </SafeAreaView>
  );
}

export default ActivityScreen;

const S = StyleSheet.create({
});