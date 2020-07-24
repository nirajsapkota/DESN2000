import React, { FC } from 'react';
import { Text, SafeAreaView, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

import Header from '../Header';
import Neumorphic from '../Neumorphic';

import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';

interface Props {
  navigation: any,
  route: any
}

const ViewTripJourneys: FC<Props> = ({ navigation, route }) => {

  const { origin, destination } = route.params;


  const currentDate = new Date();
  const Journeys = [
    { id: 0, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 74, price: 2.43, delay: 0,  departTime: new Date(currentDate.getTime() - (41 * 60 * 1000)), travelTime: 50},
    { id: 1, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 74, price: 2.43, delay: 0,  departTime: new Date(currentDate.getTime() + (5 * 60 * 1000)), travelTime: 50},
    { id: 2, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 21, price: 3.45, delay: 7,  departTime: new Date(currentDate.getTime() + (23 * 60 * 1000)), travelTime: 30},
    { id: 3, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 34, price: 5.21, delay: 2,  departTime: new Date(currentDate.getTime() + (34 * 60 * 1000)), travelTime: 54},
    { id: 4, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 25, price: 3.11, delay: 0,  departTime: new Date(currentDate.getTime() + (52 * 60 * 1000)), travelTime: 54},
    { id: 5, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 90, price: 2.43, delay: 0,  departTime: new Date(currentDate.getTime() + (61 * 60 * 1000)), travelTime: 50},
    { id: 6, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 51, price: 4.41, delay: 3,  departTime: new Date(currentDate.getTime() + (77 * 60 * 1000)), travelTime: 30},
    { id: 7, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 76, price: 2.21, delay: 1,  departTime: new Date(currentDate.getTime() + (89 * 60 * 1000)), travelTime: 54},
    { id: 8, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 82, price: 2.14, delay: 0,  departTime: new Date(currentDate.getTime() + (94 * 60 * 1000)), travelTime: 50}, 
    { id: 9, boarding: origin + " Platform 1", alighting: destination + " Platform 2", capacity: 11, price: 1.54, delay: 10, departTime: new Date(currentDate.getTime() + (121 * 60 * 1000)), travelTime: 30}
  ];

  return (
    <SafeAreaView style={{flex: 1}}>

      <Header navigation={navigation} />

      <View style={STYLES.container}>      
        <Text style={STYLES.title}>
          {origin} to {destination}
        </Text>
      </View>

      <ScrollView 
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 25 }}
      >

        {Journeys.map(journey =>
        <TouchableOpacity key={journey.id}>
          <Neumorphic
            width={375}
            height={75}
            background={COLORS.PRIMARY}
            radius={10}
            style={{marginTop: 15}}
          >

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5}}>
              <Text style={S.platformText}> {journey.boarding} </Text>
              <Text style={S.platformText}> {journey.alighting} </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5, paddingTop: 2}}>
              <View>
                <Text style={S.grayText}> Departs in: </Text>
              </View>
              <View> 
                <Text style={S.grayText}> Travel time: <Text style={S.slateGrayText}> {journey.travelTime} min </Text> </Text>
              </View>
              <View>
                <Text style={S.purpleText}> 2:55pm </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4.5, paddingTop: 2}}>
              {Math.floor(((journey.departTime.getTime() - currentDate.getTime())/1000)/60) > 0 ?
                <Text style={S.timeText}> {Math.floor(((journey.departTime.getTime() - currentDate.getTime())/1000)/60)}<Text style={S.timeText2}>min</Text></Text>
                :
                <Text style={S.timeText}> {Math.floor((Math.abs((journey.departTime.getTime() - currentDate.getTime()))/1000)/60)}<Text style={S.timeText2}>min ago</Text></Text>
              }
            </View>

          </Neumorphic>

        </TouchableOpacity>
        )}

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
    fontSize: 12,
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
  }
})