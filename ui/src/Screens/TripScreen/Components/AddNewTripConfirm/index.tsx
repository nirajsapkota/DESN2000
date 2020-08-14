import React, { FC, useState } from "react";

import {
  TouchableOpacity,
  SafeAreaView,
  AsyncStorage,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Switch
} from "react-native";

import {
  Neumorphic,
  Header
} from "../../../../Components";

import {
  COLORS,
  STYLES
} from "_constants";

import {
  StoreData,
  GetData
} from "_utils";

import ChevronForwardIcon from "_icons/chevron-forward.svg";
import { exp } from "react-native-reanimated";

interface AddNewTripConfirmProps {
  route: any,
  navigation: any
};

const AddNewTripConfirm: FC<AddNewTripConfirmProps> = ({ navigation, route }) => {

  const { origin, destination } = route.params;

  const [pinTrip, setPinTrip] = useState(false);
  const [tripNotifications, setTripNotifications] = useState(false);
  const [temporaryTrip, setTemporaryTrip] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>

        {/* Origin Station */}
        <Text style={STYLES.title}> Add a New Trip </Text>

        <Text style={[STYLES.subtitle, { marginTop: 15 }]}> From </Text>
        <TouchableOpacity
          onPress={() => console.log("nothing yet")}>

          <Neumorphic
            width={375}
            height={55}
            background={COLORS.PRIMARY}
            radius={10}
            style={{ marginTop: 15 }} >

            <View style={[STYLES.row, { alignItems: "center" }]}>
              <View style={{ left: 20, width: 345 }}>
                <Text style={S.title}> {origin.name} </Text>
                <Text style={S.subtitle}> {origin.suburb} </Text>
              </View>

              <View>
                <ChevronForwardIcon />
              </View>
            </View>
          </Neumorphic>
        </TouchableOpacity>

        {/* Destination Station */}
        <Text style={[STYLES.subtitle, { marginTop: 15 }]}> To </Text>
        <TouchableOpacity
          onPress={() => console.log("nothing yet")}>

          <Neumorphic
            width={375}
            height={55}
            background={COLORS.PRIMARY}
            radius={10}
            style={{ marginTop: 15 }}>

            <View style={[STYLES.row, { alignItems: "center" }]}>
              <View style={{ left: 20, width: 345 }}>
                <Text style={S.title}> {destination.name} </Text>
                <Text style={S.subtitle}> {destination.suburb} </Text>
              </View>

              <View>
                <ChevronForwardIcon />
              </View>
            </View>
          </Neumorphic>
        </TouchableOpacity>

        {/* Options */}
        <View style={{ marginTop: 25 }}>
          <View style={S.row}>
            <Text style={[STYLES.subtitle, { color: "black" }]}> Pin trip </Text>
            <Switch
              onValueChange={() => setPinTrip(!pinTrip)}
              value={pinTrip} />
          </View>
          <View style={S.row}>
            <Text style={[STYLES.subtitle, { color: "black" }]}> Notifications for delays and cancellations </Text>
            <Switch
              onValueChange={() => setTripNotifications(!tripNotifications)}
              value={tripNotifications} />
          </View>
          <View style={S.row}>
            <Text style={[STYLES.subtitle, { color: "black" }]}> Temporary </Text>
            <Switch
              onValueChange={() => setTemporaryTrip(!temporaryTrip)}
              value={temporaryTrip} />
          </View>
        </View>

        {/* Finish */}
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <TouchableOpacity onPress={() => {
            if (temporaryTrip) {
              navigation.navigate("View Trip Journeys", {
                origin: origin.name.replace(" Light Rail", ""), destination: destination.name.replace(" Light Rail", "")
              })
            } else {
              if (pinTrip) {
                GetData("@pinned_trips")
                  .then((res: any) => {
                    var NewPinnedTrips = [...res];
                    NewPinnedTrips.push({id: NewPinnedTrips.length, method: "LR", disabilityRating: "GOOD", origin: origin.name, destination: destination.name});
                    StoreData("@pinned_trips", NewPinnedTrips);
                    navigation.navigate("View Trip Journeys", {
                      origin: origin.name.replace(" Light Rail", ""), destination: destination.name.replace(" Light Rail", "")
                    })
                  })
              } else {
                GetData("@unpinned_trips")
                  .then((res: any) => {
                    var NewUnpinnedTrips = [...res];
                    NewUnpinnedTrips.push({id: NewUnpinnedTrips.length, method: "LR", disabilityRating: "GOOD", origin: origin.name, destination: destination.name});
                    StoreData("@unpinned_trips", NewUnpinnedTrips);
                    navigation.navigate("View Trip Journeys", {
                      origin: origin.name.replace(" Light Rail", ""), destination: destination.name.replace(" Light Rail", "")
                    })
                  })
              }
            }
          }}>
            <Neumorphic width={280} height={50} background={COLORS.ACCENT}
              radius={500} centered >
              <Text style={[STYLES.subtitle, { color: "white" }]}> Finish </Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );

}

export default AddNewTripConfirm;

const S = StyleSheet.create({
  textbox: {
    width: 370,
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 10,
    paddingLeft: 10
  },
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black"
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.GRAY
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15
  }
});

const stops = [
  { id: 0, name: "Dulwich Hill Light Rail", suburb: "Dulwich Hill" },
  { id: 1, name: "Dulwich Grove Light Rail", suburb: "Dulwich Hill" },
  { id: 2, name: "Arlington Light Rail", suburb: "Dulwich Hill" },
  { id: 3, name: "Waratah Mills Light Rail", suburb: "Dulwich Hill" },
  { id: 4, name: "Lewisham West Light Rail", suburb: "Lewisham" },
  { id: 5, name: "Taverners Hill Light Rail", suburb: "Leichhardt" },
  { id: 6, name: "Marion Light Rail", suburb: "Leichhardt" },
  { id: 7, name: "Hawthorne Light Rail", suburb: "Leichhardt" },
  { id: 8, name: "Leichhardt North Light Rail", suburb: "Leichhardt" },
  { id: 9, name: "Lilyfield Light Rail", suburb: "Lilyfield" },
  { id: 10, name: "Rozelle Bay Light Rail", suburb: "Annandale" },
  { id: 11, name: "Jubilee Park Light Rail", suburb: "Glebe" },
  { id: 12, name: "Glebe Light Rail", suburb: "Glebe" },
  { id: 13, name: "Wentworth Park Light Rail", suburb: "Pyrmont" },
  { id: 14, name: "Fish Market Light Rail", suburb: "Pyrmont" },
  { id: 15, name: "John Street Square Light Rail", suburb: "Pyrmont" },
  { id: 16, name: "The Star Light Rail", suburb: "Pyrmont" },
  { id: 17, name: "Pyrmont Bay Light Rail", suburb: "Pyrmont" },
  { id: 18, name: "Convention Light Rail", suburb: "Sydney" },
  { id: 19, name: "Exhibition Centre Light Rail", suburb: "Sydney" },
  { id: 20, name: "Paddy's Market Light Rail", suburb: "Haymarket" },
  { id: 21, name: "Bridge Street Light Rail", suburb: "Sydney" },
  { id: 22, name: "Wynyard Light Rail", suburb: "Sydney" },
  { id: 23, name: "QVB Light Rail", suburb: "Sydney" },
  { id: 24, name: "Town Hall Light Rail", suburb: "Sydney" },
  { id: 25, name: "Chinatown Light Rail", suburb: "Sydney" },
  { id: 26, name: "Capitol Square Light Rail", suburb: "Haymarket" },
  { id: 27, name: "Haymarket Light Rail", suburb: "Haymarket" },
  { id: 28, name: "Central Grand Course Light Rail", suburb: "Sydney" },
  { id: 29, name: "Central Chalmers Street Light Rail", suburb: "Sydney" },
  { id: 30, name: "Surry Hills Light Rail", suburb: "Surry Hills" },
  { id: 31, name: "Moore Park Light Rail", suburb: "Moore Park" },
  { id: 32, name: "Royal Randwick Light Rail", suburb: "Centennial Park" },
  { id: 33, name: "Wansey Road Light Rail", suburb: "Randwick" },
  { id: 34, name: "UNSW High Street Light Rail", suburb: "Randwick" },
  { id: 35, name: "Randwick Light Rail", suburb: "Randwick" },
  { id: 36, name: "ES Marks Light Rail", suburb: "Kensignton" },
  { id: 37, name: "Kensington Light Rail", suburb: "Kensignton" },
  { id: 38, name: "UNSW Anzac Parade Light Rail", suburb: "Kensignton" },
  { id: 39, name: "Kingsford Light Rail", suburb: "Kingsford" },
  { id: 40, name: "Juniors Kingsford Light Rail", suburb: "Kingsford" }
];

///TRIPS data
// Array [
//   Object {
//     "destination": "Marion",
//     "disabilityRating": "OK",
//     "id": 3,
//     "method": "LR",
//     "origin": "Wynyard",
//   },
//   Object {
//     "destination": "Exhibition Centre",
//     "disabilityRating": "GOOD",
//     "id": 4,
//     "method": "LR",
//     "origin": "Rozelle Bay",
//   },
// ]
// Array [
//   Object {
//     "destination": "Marion",
//     "disabilityRating": "OK",
//     "id": 3,
//     "method": "LR",
//     "origin": "Wynyard",
//   },
//   Object {
//     "destination": "Exhibition Centre",
//     "disabilityRating": "GOOD",
//     "id": 4,
//     "method": "LR",
//     "origin": "Rozelle Bay",
//   },
//   Object {
//     "destination": Object {
//       "id": 21,
//       "name": "Bridge Street Light Rail",
//       "suburb": "Sydney",
//     },
//     "disabilityRating": "OK",
//     "id": 2,
//     "method": "LR",
//     "origin": Object {
//       "id": 2,
//       "name": "Arlington Light Rail",
//       "suburb": "Dulwich Hill",
//     },
//   },
// ]