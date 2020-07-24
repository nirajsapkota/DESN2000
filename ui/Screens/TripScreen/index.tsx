import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import {
  MyTrips,
  AddNewTripFrom,
  AddNewTripTo,
  AddNewTripConfirm
} from './Components';

import {
  ViewTripJourneys
} from '../../Components';

const Stack = createStackNavigator();
const TripScreen: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Trips" component={MyTrips} />
      <Stack.Screen name="Add New Trip From" component={AddNewTripFrom} />
      <Stack.Screen name="Add New Trip To" component={AddNewTripTo} />
      <Stack.Screen name="Add New Trip Confirm" component={AddNewTripConfirm} />
      <Stack.Screen name="View Trip Journeys" component={ViewTripJourneys} />
    </Stack.Navigator>
  );
}

export default TripScreen;