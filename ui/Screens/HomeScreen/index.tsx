import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Header, Neumorphic } from '../../Components';
import styles from '../../styles';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />
      <Text style={styles.screenTitle}> Home </Text>

      <Text style={styles.header}> YOUR CARDS </Text>
      <Neumorphic width={350} height={200} style={{marginTop: 10}} />

      <Text style={styles.header}> PINNED TRIPS </Text>
      <Neumorphic width={350} height={60} style={{marginTop: 10}} />
      <Neumorphic width={350} height={60} style={{marginTop: 10}} />
      <Neumorphic width={350} height={60} style={{marginTop: 10}} />
      
      <Text style={styles.header}> NEWS </Text>
       
    </SafeAreaView>
  );
}

export default HomeScreen;

const S = StyleSheet.create({
});