import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import styles from '../../styles';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={S.container}>
      <Header />
      <Text style={styles.screenTitle}> Home </Text>   
    </SafeAreaView>
  );
}

export default HomeScreen;

const S = StyleSheet.create({
  container: {
    flex: 1,
  }
});