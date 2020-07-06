/* React and 3rd Party Imports */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';

/* Component Imports */
import { 
  Neumorphic
} from '../Components';

/* Screen Imports */
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

      /* Customise the look of each navigation tab */
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {         

          let iconColor = focused ? '#00A7E7' : '#8C94A4';
          
          if (route.name === "Home") {
            return (
              <Neumorphic width={60} height={60}>
                <Ionicons name="ios-home" size={32} color={iconColor} />
              </Neumorphic>
            );
          }
          
          else if (route.name === "Trips") {
            return (
              <Neumorphic width={60} height={60}>
                <Feather name="map" size={32} color={iconColor} />
              </Neumorphic>
            );
          }
          
          else if (route.name === "Activity") {
            return (
              <Neumorphic width={60} height={60}>
                <AntDesign name="barschart" size={32} color={iconColor} />
              </Neumorphic>
            );
          }
          
          else {
            return (
              <Neumorphic width={60} height={60}>
               <AntDesign name="creditcard" size={32} color={iconColor} />
              </Neumorphic>
            );
          }
          
        }
      })}

      tabBarOptions={{
        /* Set the background color and increase chin size */
        style: {
          backgroundColor: '#F2F3F7',
          height: 120
        },
        
        /* Hide Labels */
        showLabel: false,
      }} >

      { /* Navigation Tabs */ }
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Payments" component={PaymentScreen} />

    </Tab.Navigator>
  );
}

export default Navigation;
