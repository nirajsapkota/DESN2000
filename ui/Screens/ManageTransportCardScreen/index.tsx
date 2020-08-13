import React, { FC, useState } from "react";

import { Header } from "../../Components";
import { View, Text, Switch, Platform, StyleSheet } from "react-native";

import ApplePayIcon from "./apple-pay.svg";
import GooglePayIcon from "./google-pay.svg";
import * as COLORS from "../../Constants/colors";

interface ManageTransportCardScreenProps {
  navigation: any
};

const ManageTranpsortCardScreen: FC<ManageTransportCardScreenProps> =
  ({ navigation }) => {

  const [AutoTopUp, setAutoTopUp] = useState(false);
  const [BlockCard, setBlockCard] = useState(false);

  return (
    <View>
      <Header navigation={navigation} />

      <View style={{marginTop: 20, alignItems: "center"}}>
        <View style={{width: "90%"}}>
          <View style={S.row}>
            <Text style={S.text}>Auto top up</Text>
            <Switch
              value={AutoTopUp}
              onValueChange={() => setAutoTopUp(!AutoTopUp)}
              trackColor={{true: COLORS.ACCENT, false: "grey"}} />
          </View>
          <View style={S.row}>
            <Text style={S.text}>Block card</Text>
            <Switch
              value={BlockCard}
              onValueChange={() => setBlockCard(!BlockCard)}
              trackColor={{true: COLORS.ACCENT, false: "grey"}} />
          </View>
          <View style={S.row}>
            <Text style={S.text}>Export to digital wallet</Text>
            { Platform.OS === "ios" ?
              <ApplePayIcon width="128" height="64" fill="black" /> :
              <GooglePayIcon width="128" height="64" fill="black" /> }
          </View>
        </View>
      </View>

    </View>
  );
}

export default ManageTranpsortCardScreen;

const S = StyleSheet.create({ 
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5
  },
  text: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 16,
    color: "black"
  }
});