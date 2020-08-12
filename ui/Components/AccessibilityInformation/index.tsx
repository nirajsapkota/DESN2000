import React, { FC, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../Header";

import STYLES from "../../styles";
import * as COLORS from "../../Constants/colors";
import Neumorphic from "../Neumorphic";

interface NavItemProps {
  title: string,
  value: number,
  active: boolean,
  setActiveStop: Function
};

const NavItem: FC<NavItemProps> = 
  ({ title, value, active, setActiveStop}) => {
  return (
    <TouchableOpacity onPress={() => setActiveStop(value)}>
      <View>
        <Text style={S.title}>{title}</Text>
        {active && 
        <View style={{height: 2, backgroundColor: COLORS.ACCENT, width: "100%"}}></View>}
      </View>
    </TouchableOpacity>
  );
}

interface AccessibilityInformationInformationProps {
  navigation: any,
  route: any
};

const AccessibilityInformation: FC<AccessibilityInformationInformationProps> =
  ({ navigation, route }) => {

  const [activeStop, setActiveStop] = useState(0);
  const { stops } = route.params;

  return (
    <View style={{flex: 1}}>

      <Header navigation={navigation} />

      <View style={{padding: 20, marginTop: 10, flex: 1, width: "100%"}}>

        <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>

          {stops.map((stop: string, index: number) =>
            <NavItem
            title={stop}
            value={index}
            active={activeStop === index}
            setActiveStop={setActiveStop} />
            )}

        </View>
        
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Baby change table</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.LIGHT_GREEN}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>Functioning as normal.</Text>
            </View>
        </Neumorphic>
        </View>

        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Elevators</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.YELLOW}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>Ongoing escalator outage for platforms 16 and 17.</Text>
            </View>
        </Neumorphic>
        </View>

        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Emergency help point</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.YELLOW}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>The emergency help point on platform 17 is down for maintenence.</Text>
            </View>
        </Neumorphic>
        </View>

        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Escalators</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.LIGHT_GREEN}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>Functioning as normal.</Text>
            </View>
        </Neumorphic>
        </View>

        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Opal top up or single trip ticket machine</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.LIGHT_GREEN}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>Functioning as normal.</Text>
            </View>
        </Neumorphic>
        </View>

        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Toilets</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.LIGHT_GREEN}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>Functioning as normal.</Text>
            </View>
        </Neumorphic>
        </View>

        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Wheelchair accessible car space</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.LIGHT_GREEN}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>Functioning as normal.</Text>
            </View>
        </Neumorphic>
        </View>
        
        <View style={{marginBottom: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={S.subtitle}>Wheelchair accessible toilet (MLAK)</Text>
          <Text style={S.key_text}>Locations: <Text style={S.value_text}>Grand Concourse, XXX, XXX, XXX</Text></Text>
        </View>
        <Neumorphic
          width={"100%"}
          height={60}
          background={COLORS.RED}
          radius={10}>
            <View style={{padding: 10}}>
              <Text style={S.text}>All wheelchair accessible toilets are currently unoperational.</Text>
            </View>
        </Neumorphic>
        </View>

      </ScrollView>

      </View>
    </View>
  );

}

export default AccessibilityInformation;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 24,
    color: COLORS.SLATER_GRAY
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 18,
    color: COLORS.SLATER_GRAY
  },
  key_text: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.ACCENT
  },
  value_text: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black"
  },
  text: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black"
  }
});