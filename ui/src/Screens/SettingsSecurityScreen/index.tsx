import React, { FC, useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Switch,
  View,
  Text
} from "react-native";

import {
  Header
} from "_common_components";

import {
  STYLES
} from "_constants"

interface SettingsSecurityScreenProp {
  navigation: any
}

const SettingsSecurityScreen: FC<SettingsSecurityScreenProp> =
  ({ navigation }) => {
  
  const [faceID, setfaceID] = useState(false);
  const [accesibilityIndicators, setAccessibilityIndicators] = useState(false);
  const [rtl, setRTL] = useState(false);
  const [rtc, setRTC] = useState(false);
  const [rtfp, setRTFP] = useState(false);
  const [rtdr, setRTDR] = useState(false);

  return (
    <SafeAreaView>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>
        <Text style={S.title}>Settings and Security</Text>

        <Text style={S.subtitle}>Security</Text>
        <View style={S.row}>
          <Text style={S.subsubtitle}>Enable Face ID</Text>
          <Switch
            value={faceID}
            onValueChange={() => setfaceID(!faceID)}
            />
        </View>
        
        <Text style={S.subtitle}>Accessiblity</Text>
        <View style={S.row}>
          <Text style={S.subsubtitle}>Show accessibility indicators</Text>
          <Switch
            value={accesibilityIndicators}
            onValueChange={() => setAccessibilityIndicators(!accesibilityIndicators)}
            />
        </View>

        <Text style={S.subtitle}>Real-time Data</Text>
        <View style={S.row}>
          <Text style={S.subsubtitle}>Real-time location</Text>
          <Switch
            value={rtl}
            onValueChange={() => setRTL(!rtl)}
            />
        </View>
        <View style={S.row}>
          <Text style={S.subsubtitle}>Real-time capacity</Text>
          <Switch
            value={rtc}
            onValueChange={() => setRTC(!rtc)}
            />
        </View>
        <View style={S.row}>
          <Text style={S.subsubtitle}>Real-time fare price</Text>
          <Switch
            value={rtfp}
            onValueChange={() => setRTFP(!rtfp)}
            />
        </View>
        <View style={S.row}>
          <Text style={S.subsubtitle}>Real-time disability rating</Text>
          <Switch
            value={rtdr}
            onValueChange={() => setRTDR(!rtdr)}
            />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default SettingsSecurityScreen;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold", 
    fontSize: 30,
    color: "#456078",
    marginBottom: 15
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold", 
    fontSize: 18,
    color: "black",
    marginBottom: 10
  },
  subsubtitle: {
    fontFamily: "Arial Rounded MT Bold", 
    fontSize: 14,
    color: "#797C8D",
    marginBottom: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
});