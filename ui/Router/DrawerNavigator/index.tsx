import React, { FC, useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import {
  DashboardScreen, AccountScreen, AccessibilityEmergencyScreen,
  TalkToUsScreen, SettingsSecurityScreen, LoginScreen, SignupScreen
} from '../../Screens';

interface DrawerNavigatorProps {
  navigation: any
}

const Drawer = createDrawerNavigator();
const DrawerNavigator: FC<DrawerNavigatorProps> = ({ navigation }) => {

  return (
    <Drawer.Navigator initialRouteName="Dashboard">
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;