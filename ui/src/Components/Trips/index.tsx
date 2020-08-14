import React, { FC, useState } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from "react-native";

import {
  Neumorphic
} from "_common_components";

import {
  StoreData,
  GetData
} from "_utils";

import {
  COLORS,
  STYLES
} from "_constants";

import { 
  DisabilityRating
} from "./Components";

import Swipeable from "react-native-gesture-handler/Swipeable";

import ChevronForwardIcon from "_icons/chevron-forward.svg";
import DeleteIcon from "_icons/delete.svg";
import LightRailIcon from "_icons/light-rail.svg";

interface Props {
  navigation: any,
  pinned?: boolean
};

const Trips: FC<Props> = ({ navigation, pinned }) => {

  const [TripData, setTripData] = useState([]);
  pinned ?
    GetData("@pinned_trips").then((res: any) => setTripData(res)) :
    GetData("@unpinned_trips").then((res: any) => setTripData(res));

  const DeleteTrip = (id: number) => {
    const NewTripData = TripData.filter((trip: any) => trip.id != id);
    pinned ?
      StoreData("@pinned_trips", NewTripData) :
      StoreData("@unpinned_trips", NewTripData);
    setTripData(NewTripData);
  }

  const renderRightActions = (id: number) => {
    return (
      <View style={S.rightActionsContainer}>
        <TouchableOpacity onPress={() => DeleteTrip(id)}>
          <DeleteIcon width="32" height="32" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={S.tripsContainer}>

      {TripData.map((item: any) =>
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("View Trip Journeys", {
            origin: item.origin, destination: item.destination
          })}>

          <Swipeable
            leftThreshold={50}
            overshootRight={false}
            renderRightActions={() => renderRightActions(item.id)}
            containerStyle={S.swipeableContainer}>
            
            <Neumorphic
              width={335}
              height={60}
              background={COLORS.PRIMARY}
              radius={10}>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ alignItems: "center", width: 64 }}>
                  <LightRailIcon width={42} height={42} />
                </View>

                <View style={{ width: 215 }}>
                  <Text style={[STYLES.subtitle, { color: "black", marginBottom: 1 }]}>
                    {item.origin} to {item.destination}
                  </Text>
                  <DisabilityRating rating={item.disabilityRating} />
                </View>

                <View style={{ alignItems: "center", width: 56 }}>
                  <ChevronForwardIcon />
                </View>
              </View>
            </Neumorphic>

          </Swipeable>
        </TouchableOpacity>
      )}
    </View>
  );

}

export default Trips;

const S = StyleSheet.create({
  rightActionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY
  },
  swipeableContainer: {
    height: 85,
    justifyContent: "center",
    width: 370,
    alignItems: "center"
  },
  tripsContainer: {
    alignItems: "center",
    marginTop: 5,
    backgroundColor: COLORS.PRIMARY,
    flex: 1
  }
});