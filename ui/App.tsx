import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Router';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;