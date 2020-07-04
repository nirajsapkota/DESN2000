import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header } from '../../Components';
import styles from '../../styles';

const ActivityScreen: React.FC = () => {
  return (
    <SafeAreaView style={S.container}>
      <Header />
      <Text style={styles.screenTitle}> Activity </Text>  
    </SafeAreaView>
  );
}

export default ActivityScreen;

const S = StyleSheet.create({
  container: {
    flex: 1,
  }
});