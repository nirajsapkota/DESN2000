import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  TalkToUs, CreateChat, ViewChat
} from './Components';

const Stack = createStackNavigator();
const TalkToUsScreen: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Talk To Us"
        component={TalkToUs} />

      <Stack.Screen
        name="Create Chat"
        component={CreateChat} />

      <Stack.Screen
        name="View Chat"
        component={ViewChat} />
    </Stack.Navigator>
  );
}

export default TalkToUsScreen;