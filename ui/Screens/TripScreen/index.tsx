import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import {
  MyTrips,
  AddNewTripFrom,
  AddNewTripTo,
  AddNewTripConfirm
} from './Components';

interface TripScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const Stack = createStackNavigator();
const TripScreen: FC<TripScreenProps> = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Trips" component={MyTrips} />
      <Stack.Screen name="Add New Trip From" component={AddNewTripFrom} />
      <Stack.Screen name="Add New Trip To" component={AddNewTripTo} />
      <Stack.Screen name="Add New Trip Confirm" component={AddNewTripConfirm} />
    </Stack.Navigator>
  );
}

export default TripScreen;