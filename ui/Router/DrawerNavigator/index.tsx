import React, { FC, useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import {
  DashboardScreen, AccountScreen, AccessibilityEmergencyScreen,
  TalkToUsScreen, SettingsSecurityScreen, LoginScreen, SignupScreen, OnboardingScreen
} from '../../Screens';

interface DrawerNavigatorProps {
  initialRouteName: string,
}

const Drawer = createDrawerNavigator();
const DrawerNavigator: FC<DrawerNavigatorProps> = ({ initialRouteName }) => {

  return (
    <Drawer.Navigator initialRouteName={initialRouteName}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen} />

      <Drawer.Screen
        name="My account"
        component={AccountScreen} />

      <Drawer.Screen
        name="Accessibility and emergency"
        component={AccessibilityEmergencyScreen} />

      <Drawer.Screen
        name="Talk to us"
        component={TalkToUsScreen} />

      <Drawer.Screen
        name="Settings and security"
        component={SettingsSecurityScreen} /> 

      <Drawer.Screen
        name="Login"
        component={LoginScreen} />

      <Drawer.Screen
        name="Signup"
        component={SignupScreen} />

      <Drawer.Screen
        name="Onboarding"
        component={OnboardingScreen}
        />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;