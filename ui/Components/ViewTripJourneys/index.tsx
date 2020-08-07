import React, { FC } from 'react';
import { Text, SafeAreaView, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

import Header from '../Header';
import Neumorphic from '../Neumorphic';

import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';

import Train from "./train.svg";
import ChevronRight from "./chevron-right.svg";

const L1Pill: FC = () => {
  return (
    <View style={{width: 20, height: 12, backgroundColor: "#AD1926", alignItems: "center", justifyContent: "center", borderRadius: 5}}>
      <Text style={{fontFamily: "Arial Rounded MT Bold", color: "white", fontSize: 8}}>L1</Text>
    </View>
  )
}

const L2Pill: FC = () => {
  return (
    <View style={{width: 20, height:12, backgroundColor: "#DF1E25", alignItems: "center", justifyContent: "center", borderRadius: 5}}>
      <Text style={{fontFamily: "Arial Rounded MT Bold", color: "white", fontSize: 8}}>L2</Text>
    </View>
  )
}

interface Props {
  navigation: any,
  route: any
}

const ViewTripJourneys: FC<Props> = ({ navigation, route }) => {

  const { origin, destination } = route.params;


  const currentDate = new Date();
  const Journeys = [
    { id: 0, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 74, price: 2.43, delay: 0,  departTime: new Date(currentDate.getTime() - (41 * 60 * 1000)), travelTime: 50, tripChanges: ["L1", "L2"], arrivalTime: "2:12"},
    { id: 1, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 74, price: 2.43, delay: 0,  departTime: new Date(currentDate.getTime() + (5 * 60 * 1000)), travelTime: 50, tripChanges: ["L1", "L2"], arrivalTime: "2:55"},
    { id: 2, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 21, price: 3.45, delay: 7,  departTime: new Date(currentDate.getTime() + (23 * 60 * 1000)), travelTime: 30, tripChanges: ["L1", "L2"], arrivalTime: "3:41"},
    { id: 3, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 34, price: 5.21, delay: 2,  departTime: new Date(currentDate.getTime() + (34 * 60 * 1000)), travelTime: 54, tripChanges: ["L1"], arrivalTime: "4:22"},
    { id: 4, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 25, price: 3.11, delay: 0,  departTime: new Date(currentDate.getTime() + (52 * 60 * 1000)), travelTime: 54, tripChanges: ["L1", "L2"], arrivalTime: "5:10"},
    { id: 5, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 90, price: 2.43, delay: 0,  departTime: new Date(currentDate.getTime() + (61 * 60 * 1000)), travelTime: 50, tripChanges: ["L1", "L2"], arrivalTime: "6:43"},
    { id: 6, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 51, price: 3.52, delay: 3,  departTime: new Date(currentDate.getTime() + (77 * 60 * 1000)), travelTime: 30, tripChanges: ["L1"], arrivalTime: "7:12"},
    { id: 7, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 76, price: 3.41, delay: 1,  departTime: new Date(currentDate.getTime() + (89 * 60 * 1000)), travelTime: 54, tripChanges: ["L1"], arrivalTime: "7:46"},
    { id: 8, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 82, price: 2.36, delay: 0,  departTime: new Date(currentDate.getTime() + (94 * 60 * 1000)), travelTime: 50, tripChanges: ["L1", "L2"], arrivalTime: "8:32"}, 
    { id: 9, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 11, price: 2.98, delay: 10, departTime: new Date(currentDate.getTime() + (121 * 60 * 1000)), travelTime: 30, tripChanges: ["L1"], arrivalTime: "9:11"}
  ];

  return (
    <SafeAreaView style={{flex: 1}}>

      <Header navigation={navigation} />

      <View style={STYLES.container}>
        <Text style={STYLES.title}>{origin} to {destination}</Text>
      </View>

      <ScrollView 
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 25 }}
      >

        {Journeys.map(journey => {
          
          const time = Math.floor(((journey.departTime.getTime() - currentDate.getTime())/1000)/60);
          const departTime = (
            time > 0 ?
            Math.floor(((journey.departTime.getTime() - currentDate.getTime())/1000)/60)
              :
            Math.floor((Math.abs((journey.departTime.getTime() - currentDate.getTime()))/1000)/60)
          );
          
          const neumorphiccardcolor = (time > 0 ? COLORS.PRIMARY : '#D1D1D1');
          const textStyle = (time > 0 ? S.grayText : S.blackText);
          let delaycolor, capacitycolor;

          if (journey.delay >= 6) delaycolor = COLORS.RED;
          else if (journey.delay > 2) delaycolor = COLORS.YELLOW;
          else delaycolor = COLORS.GREEN;
          
          if (journey.capacity >= 85) capacitycolor = COLORS.RED;
          else if (journey.capacity >= 65) capacitycolor = COLORS.YELLOW;
          else capacitycolor = COLORS.GREEN;

          return (
          <TouchableOpacity
            key={journey.id}
            onPress={() => navigation.navigate("View Journey Services", {
              origin: origin,
              destination: destination,
              journey: journey
            })}>
            <Neumorphic
              width={375}
              height={75}
              background={neumorphiccardcolor}
              radius={10}
              style={{marginTop: 15}}>
              
              <View style={{padding: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5}}>
                  <Text style={S.platformText}>{journey.boarding}</Text>
                  <Text style={S.platformText}>{journey.alighting}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5, paddingTop: 2}}>
                  <View>
                    <Text style={textStyle}>Departs in:</Text>
                  </View>
                  <View> 
                    <Text style={textStyle}>Travel time:<Text style={S.slateGrayText}> {journey.travelTime} min </Text> </Text>
                  </View>
                  <View>
                    <Text style={S.purpleText}>{journey.arrivalTime}pm</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5, paddingTop: 2}}>
                  <View>
                    {time > 0 ?
                      <Text style={S.timeText}>{departTime}<Text style={S.timeText2}>min</Text></Text>
                      :
                      <Text style={S.timeText}>{departTime}<Text style={S.timeText2}>min ago</Text></Text>
                    }
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5, paddingTop: 2}}>

                    {journey.tripChanges.length === 2 ?
                    
                    <>
                      <Train width={16} height={16} />
                      <L1Pill />
                      <ChevronRight width={16} height={16} />
                      <Train width={16} height={16} />
                      <L2Pill />
                    </>

                    :

                    <>
                      <Train width={16} height={16} />
                      <L1Pill />
                    </>

                    }                    


                    <Text style={{fontFamily: "Arial Rounded MT Bold", color: "black"}}>  ${journey.price}</Text>
                  </View>
                  <View style={{alignItems: "flex-end"}}>
                    <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                      {
                        journey.delay === 0 ? 
                        <Text style={S.smartInfoText}>on time </Text>
                          :
                        <Text style={S.smartInfoText}>{journey.delay} min delay </Text>
                      }
                      <View style={{width: 8, height: 8, backgroundColor: delaycolor, borderRadius: 2}}></View>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 2}}>  
                      <Text style={S.smartInfoText}>{journey.capacity}% capacity </Text>
                      <View style={{width: 8, height: 8, backgroundColor: capacitycolor, borderRadius: 2, marginTop: 2}}></View>
                    </View>
                  </View>
                </View>
              </View>
            </Neumorphic>
          </TouchableOpacity>
          );

      })}

      </ScrollView>

    </SafeAreaView>
  );

}

export default ViewTripJourneys;

const S = StyleSheet.create({
  platformText: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: "#000000"
  },
  grayText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.GRAY2
  },
  purpleText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.ACCENT
  },
  slateGrayText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.SLATER_GRAY
  },
  blackText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: "#000000"
  },
  timeText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 24,
    color: COLORS.SLATER_GRAY
  },
  timeText2: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.SLATER_GRAY
  },
  smartInfoText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: COLORS.SLATER_GRAY
  }
})