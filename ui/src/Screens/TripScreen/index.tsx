import React, { FC } from "react";

import {
  createStackNavigator
} from "@react-navigation/stack";

import {
  AddNewTripConfirm,
  AddNewTripFrom,
  AddNewTripTo,
  MyTrips
} from "./Components";

import {
  AccessibilityInformation,
  ViewTripJourneys,
  ViewJourneyServices
} from "_common_components";

const Stack = createStackNavigator();
const TripScreen: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Trips"
        component={MyTrips} />

      <Stack.Screen
        name="Add New Trip From"
        component={AddNewTripFrom} />

      <Stack.Screen
        name="Add New Trip To"
        component={AddNewTripTo} />

      <Stack.Screen
        name="Add New Trip Confirm"
        component={AddNewTripConfirm} />

      <Stack.Screen
        name="View Trip Journeys"
        component={ViewTripJourneys} />

      <Stack.Screen
        name="View Journey Services"
        component={ViewJourneyServices} />

      <Stack.Screen
        name="Accessibility Information"
        component={AccessibilityInformation} />
    </Stack.Navigator>
  );
}

export default TripScreen;