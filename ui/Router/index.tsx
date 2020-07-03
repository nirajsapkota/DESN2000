import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';

import {
  HomeScreen,
  TripScreen,
  ActivityScreen,
  PaymentScreen
} from '../Screens';

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator 
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {         

          let iconColor = focused ? '#FF8533' : '#8C94A4';
          
          if (route.name === "Home") {
            return (
              <View style={ focused ? S.active : S.inactive }>
                <Ionicons name="ios-home" size={32} color={iconColor} />
                <Text style={S.text}> Home </Text>
              </View>
            );
          }
          
          else if (route.name === "Trips") {
            return (
              <View style={ focused ? S.active : S.inactive }>
                <Feather name="map" size={32} color={iconColor} />
                <Text style={S.text}> Trips </Text>
              </View>
            );
          }
          
          else if (route.name === "Activity") {
            return (
              <View style={ focused ? S.active : S.inactive }>
                <AntDesign name="barschart" size={32} color={iconColor} />
                <Text style={S.text}> Activity </Text>
              </View>
            );
          }
          
          else {
            return (
              <View style={ focused ? S.active : S.inactive }>
                <AntDesign name="creditcard" size={32} color={iconColor} />
                <Text style={S.text}> Top Up </Text>
              </View>
            );
          }
          
        }
      })}

      tabBarOptions={{
        style: {
          backgroundColor: '#1D1F29',
          borderTopColor: 'transparent',
          paddingBottom: 60,
        },
        activeTintColor: '#8C94A4',
        inactiveTintColor: '#8C94A4',
        showLabel: false,
      }}
    
    >

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Payments" component={PaymentScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;

const S = StyleSheet.create({
  active: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    backgroundColor: '#292E41',
    borderRadius: 36,
    marginHorizontal: 15,
  },
  inactive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    marginHorizontal: 15,
  },
  text: {
    color: '#8C94A4',
    fontSize: 12,
  },
});
