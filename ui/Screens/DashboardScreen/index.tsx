import React, { FC, useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { TabNavigator } from '../../Router';

import { 
  LoginScreen,
  SignupScreen
} from '../../Screens';
import { NavigationContainer } from '@react-navigation/native';

interface DashboardScreenProps {
  navigation: any,
  route: any
}

const DashboardScreen: FC<DashboardScreenProps> =
  ({ navigation, route }) => {
  
  if (route.params) {
    return (
      <>
        <SignupScreen
          navigation={navigation}
          visibility={route.params.signupModal}
          setVisibility={route.params.showSignupModal} />
  
        <TabNavigator />
      </>
    );
  }

  return <TabNavigator />;

}

export default DashboardScreen;