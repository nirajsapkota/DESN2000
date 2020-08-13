import React, { FC, useState, useEffect } from 'react';
import Neumorphic from '../Neumorphic';
import AsyncStorage from "@react-native-community/async-storage";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DisabilityRating } from './Components';

import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';

import DeleteIcon from "./delete.svg";
import LightRailIcon from "./lightrail.svg";
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface Props {
  navigation: any,
  pinned?: boolean
};

const pinnedTripData = [
  { id: 0, method: "LR", disabilityRating: "GOOD", origin: "Dulwich Hull", destination: "Central" },
  { id: 1, method: "LR", disabilityRating: "GOOD", origin: "Wentworth Park", destination: "Moore Park" },
  { id: 2, method: "LR", disabilityRating: "POOR", origin: "UNSW Anzac Parade", destination: "Haymarket" }
];


const StoreData = async (key: string, value: Array<any>) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log(err);
  }
}

const GetData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(err);
  }
}

const Trips: FC<Props> = ({ navigation, pinned }) => {

  const [TripData, setTripData] = useState([]);

  if (pinned) {
    GetData("@pinned_trips")
      .then(response => {
        setTripData(response);
      })
  } else {
    GetData("@unpinned_trips")
      .then(response => {
        setTripData(response);
      })
  }

  const DeleteItem = (id: number) => {
    const newTripData = TripData.filter((trip: any) => trip.id != id);
    if (pinned)
      StoreData("@pinned_trips", newTripData);
    else
      StoreData("@unpinned_trips", newTripData);

    setTripData(newTripData);
  }

  const renderRightActions = (item_id: number) => {
    return (
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.PRIMARY }}>
        <TouchableOpacity onPress={() => DeleteItem(item_id)}>
          <DeleteIcon width="32" height="32" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 5, backgroundColor: COLORS.PRIMARY, flex: 1 }}>
      {TripData.map((item: any) =>
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('View Trip Journeys', {
            origin: item.origin, destination: item.destination
          })}
          onLongPress={() => console.log("Test")}
          style={{ backgroundColor: COLORS.PRIMARY, flexGrow: 1 }}
        >

          <Swipeable leftThreshold={50} overshootRight={false} renderRightActions={() => renderRightActions(item.id)} containerStyle={{ height: 85, justifyContent: "center", width: 370, alignItems: "center" }}>
            <Neumorphic
              width={335}
              height={60}
              background={COLORS.PRIMARY}
              radius={10}
            >

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ alignItems: 'center', width: 64 }}>
                  <LightRailIcon width={42} height={42} />
                </View>

                <View style={{ width: 215 }}>
                  <Text
                    style={[STYLES.subtitle, { color: 'black', marginBottom: 1 }]}
                  >
                    {item.origin} to {item.destination}
                  </Text>
                  <DisabilityRating rating={item.disabilityRating} />
                </View>

                <View style={{ alignItems: 'center', width: 56 }}>
                  <Image source={require('./chevron-forward.png')} />
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