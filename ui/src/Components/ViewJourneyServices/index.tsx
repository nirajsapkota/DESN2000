import React, { FC } from "react";

import { 
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import {
  Neumorphic,
  Header
} from "_common_components";

import {
  COLORS,
  STYLES
} from "_constants"

import Map from "_icons/map.svg";
import Wheelchair from "_icons/wheelchair.svg";

interface ViewJourneyServicesProps {
  navigation: any,
  route: any
};

const ViewJourneyServices: FC<ViewJourneyServicesProps> = 
  ({ navigation, route }) => {

  const { origin, destination, journey } = route.params;
  
  const Trips = [
    { id: 0, trips: [ { line: "L1", origin: journey.boarding, destination: "Moore Park Platform 2", price: 1.21 }, { line: "L2", origin: "Moore Park Platform 2", destination: journey.alighting, price: 1.22 } ] },
    { id: 1, trips: [ { line: "L1", origin: journey.boarding, destination: "Moore Park Platform 2", price: 1.21 }, { line: "L2", origin: "Moore Park Platform 2", destination: journey.alighting, price: 1.22 } ] },
    { id: 2, trips: [ { line: "L1", origin: journey.boarding, destination: "Moore Park Platform 2", price: 1.46 }, { line: "L2", origin: "Moore Park Platform 2", destination: journey.alighting, price: 1.99 } ] },
    { id: 3, trips: [ { line: "L1", origin: journey.boarding, destination: journey.alighting, price: 5.21 }] },
    { id: 4, trips: [ { line: "L1", origin: journey.boarding, destination: "Moore Park Platform 2", price: 1.59 }, { line: "L2", origin: "Moore Park Platform 2", destination: journey.alighting, price: 1.52 } ] },
    { id: 5, trips: [ { line: "L1", origin: journey.boarding, destination: "Moore Park Platform 2", price: 1.11 }, { line: "L2", origin: "Moore Park Platform 2", destination: journey.alighting, price: 1.32 } ] },
    { id: 6, trips: [ { line: "L1", origin: journey.boarding, destination: journey.alighting, price: 3.52 } ] },
    { id: 7, trips: [ { line: "L1", origin: journey.boarding, destination: journey.alighting, price: 3.41 } ] },
    { id: 8, trips: [ { line: "L1", origin: journey.boarding, destination: "Moore Park Platform 2", price: 1.15 }, { line: "L2", origin: "Moore Park Platform 2", destination: journey.alighting, price: 1.21 } ] }, 
    { id: 9, trips: [ { line: "L1", origin: journey.boarding, destination: journey.alighting, price: 2.98 } ] }
  ];

  const stops = (Trips[journey.id].trips.length === 2) ? [origin, "Moore Park", destination] : [origin, destination];
  console.log(Trips[journey.id].trips.length);

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>

        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View>
            <Text style={S.title}>{origin} to {destination}</Text>
            <Text style={S.subtitle}>Trip Breakdown</Text>
          </View>
          <View>


            <TouchableOpacity onPress={() => navigation.navigate("Accessibility Information", { stops: stops })}>
            <Neumorphic
              width={72}
              height={36}
              background={COLORS.ACCENT}
              radius={24}
              centered>
                <Wheelchair fill="white" />
            </Neumorphic>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
        {Trips[journey.id].trips.map((trip, index) => 
          <Neumorphic
          width={335}
          height={200}
          background={COLORS.PRIMARY}
          radius={10}
          style={{marginBottom: 15}}>

            <Map 
              width={335}
              height={130} />

            <View style={{justifyContent: "center", padding: 10, height: 70}}>
              <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 2}}>
                <View><Text style={S.card_title}>Trip {index+1}</Text></View>
                <Text style={S.card_title}>${trip.price}</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 2}}>
                <Text style={S.card_text}>{trip.origin}</Text>
                <Text style={S.card_text}>{trip.destination}</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={S.card_title_gray}>Departs: <Text style={S.timeText}>2:40pm</Text></Text>
                <Text style={S.card_title_gray}>Arrives: <Text style={S.timeText}>2:55pm</Text></Text>
              </View>
            </View>

          </Neumorphic>  
        )}

      </View>
      </ScrollView>
      

    </View>
  );

}

export default ViewJourneyServices;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 24,
    color: COLORS.SLATE_GRAY,
    marginBottom: 5
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 16,
    color: COLORS.SLATE_GRAY,
    marginBottom: 15
  },
  card_title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black"
  },
  card_text: {
    fontFamily: "Arial",
    fontSize: 12
  },
  card_title_gray: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.GRAY2
  },
  timeText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.ACCENT
  }
});