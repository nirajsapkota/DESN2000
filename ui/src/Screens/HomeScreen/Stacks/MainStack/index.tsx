import React, { FC, useState } from "react";

import { 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";

import { 
  OpalCardSelector,
  Neumorphic,
  Header,
  Trips,
  News
} from "_common_components";

import {
  COLORS,
  STYLES
} from '_constants';

import {
  Ionicons
} from "@expo/vector-icons";

import AddTransportCardModal from "./AddTransportCardModal";

interface MainStackProps {
  navigation: any
};

const MainStack: FC<MainStackProps> = ({ navigation }) => {
  
  const [AddTransportCardModalVisibility, setAddTransportCardModalVisibility] = useState(false);
  
  return (
    <SafeAreaView style={{flex: 1}}>

      <AddTransportCardModal
        visibility={AddTransportCardModalVisibility}
        setVisibility={setAddTransportCardModalVisibility} />

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={[STYLES.container, {flexGrow: 1}]}>
        
        <Text style={STYLES.title}> Home </Text>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
          <Text style={STYLES.subtitle}> Your cards </Text>
          <TouchableOpacity
            onPress={() => setAddTransportCardModalVisibility(!AddTransportCardModalVisibility)}>
            <Neumorphic
              width={32}
              height={32}
              radius={16}
              background={COLORS.ACCENT}
              centered>
              <Ionicons name="ios-add" size={24} color="white" />
            </Neumorphic>
          </TouchableOpacity>
        </View>
        <OpalCardSelector navigation={navigation} />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> Pinned trips </Text>
        <Trips navigation={navigation} pinned />

        <Text style={[STYLES.subtitle, {marginTop: 15}]}> News </Text>
        <News navigation={navigation} preview />

      </ScrollView>
    </SafeAreaView>
  );
}

export default MainStack;