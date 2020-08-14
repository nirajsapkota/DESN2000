import React from "react";

import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
  ActivityScreen,
  PaymentScreen,
  HomeScreen,
  TripScreen
} from "../../Screens";

import {
  AntDesign,
  Ionicons,
  Feather
} from "@expo/vector-icons";

import { 
  Neumorphic
} from "_common_components";

import {
  COLORS
} from "_constants";


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator

      /* Customise the look of each navigation tab */
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {         

          let iconColor = focused ? COLORS.BLUE : COLORS.GRAY;
          
          if (route.name === "Home") {
            return (
              <Neumorphic
                width={60}
                height={60}
                radius={15}
                background={COLORS.PRIMARY}
                centered>
                
                <Ionicons
                  name="ios-home"
                  size={32}
                  color={iconColor} />
              
              </Neumorphic>
            );
          }
          
          else if (route.name === "Trips") {
            return (
              <Neumorphic
                width={60}
                height={60}
                radius={15}
                background={COLORS.PRIMARY}
                centered>
              
                <Feather
                  name="map"
                  size={32}
                  color={iconColor} />
              
              </Neumorphic>
            );
          }
          
          else if (route.name === "Activity") {
            return (
              <Neumorphic
                width={60}
                height={60}
                radius={15}
                background={COLORS.PRIMARY}
                centered>
                
                <AntDesign
                  name="barschart"
                  size={32}
                  color={iconColor} />
              
              </Neumorphic>
            );
          }
          
          else {
            return (
              <Neumorphic
                width={60}
                height={60}
                radius={15}
                background={COLORS.PRIMARY}
                centered>
                
                <AntDesign 
                  name="creditcard"
                  size={32}
                  color={iconColor} />
              
              </Neumorphic>
            );
          }
          
        }
      })}

      tabBarOptions={{
        /* Set the background color and increase chin size */
        style: {
          paddingTop: 15,
          backgroundColor: COLORS.PRIMARY,
          height: 100
        },
        
        /* Hide Labels */
        showLabel: false,
      }} >

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Payments" component={PaymentScreen} />

    </Tab.Navigator>
  );
}

export default TabNavigator;
