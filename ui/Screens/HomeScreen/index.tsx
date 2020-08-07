import React, { FC } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import {
  ViewTripJourneys,
  ViewJourneyServices,
  AccessibilityInformation
} from "../../Components";

import {
  MainStack,
  NewsListStack,
  NewsArticleStack
} from "./Stacks";

const Stack = createStackNavigator();
const HomeScreen: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainStack} />

      <Stack.Screen
        name="Latest News"
        component={NewsListStack} />

      <Stack.Screen
        name="News Article"
        component={NewsArticleStack} />

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

export default HomeScreen;