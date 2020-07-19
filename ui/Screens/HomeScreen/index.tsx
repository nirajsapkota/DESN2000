import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import STYLES from '../../styles';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />

      <Text style={STYLES.title}> Home </Text>
    </SafeAreaView>
  );
}

export default HomeScreen;

const S = StyleSheet.create({
});