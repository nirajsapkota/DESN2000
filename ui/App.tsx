import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Router';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <DrawerNavigator />
    </NavigationContainer>
  );
}
