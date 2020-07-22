import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DashboardScreen,
  AccountScreen,
  AccessibilityEmergencyScreen,
  TalkToUsScreen,
  SettingsSecurityScreen
} from '../../Screens';

const Drawer = createDrawerNavigator();
const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="My account" component={AccountScreen} />
      <Drawer.Screen name="Accessibility and emergency" component={AccessibilityEmergencyScreen} />
      <Drawer.Screen name="Talk to us" component={TalkToUsScreen} />
      <Drawer.Screen name="Settings and security" component={SettingsSecurityScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;