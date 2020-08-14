import React, { FC } from "react";

import { 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  Text
} from "react-native";

import {
  Neumorphic,
  Header,
  Trips
} from "_common_components";

import {
  COLORS,
  STYLES
} from "_constants";

import {
  Ionicons
} from "@expo/vector-icons"; 

interface MyTripsProps {
  navigation: any
}

const viewableIphone5Width = 310;
const defaultWidth = 355;

const MyTrips: FC<MyTripsProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      
      <ScrollView contentContainerStyle={STYLES.container}>

        <View style={[STYLES.row, {alignItems: "center", justifyContent: "space-between", width: viewableIphone5Width}]}>
          
          <Text style={STYLES.title}> Trips </Text>
          
          <TouchableOpacity onPress={() => navigation.navigate("Add New Trip From")}>
            <Neumorphic width={48} height={48} background={COLORS.ACCENT} radius={24} centered>
              <Ionicons name="ios-add" size={32} color="white" />
            </Neumorphic>
          </TouchableOpacity>

        </View>

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Pinned Trips </Text>
        <Trips navigation={navigation} pinned />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Trips </Text>
        <Trips navigation={navigation} />

      </ScrollView>
    </SafeAreaView>
  );
}

export default MyTrips;