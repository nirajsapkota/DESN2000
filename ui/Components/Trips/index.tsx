import React, { FC } from 'react';
import Neumorphic from '../Neumorphic';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DisabilityRating } from './Components';

import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';

interface TripProps {
  pinned?: boolean
};

const pinnedTripData = [
  { id: 0, method: "LR", disabilityRating: "GOOD", origin: "Dulwich Hull", destination: "Central" },
  { id: 1, method: "LR", disabilityRating: "GOOD", origin: "Wentworth Park", destination: "Moore Park" },
  { id: 2, method: "LR", disabilityRating: "POOR", origin: "UNSW Anzac Parade", destination: "Haymarket" }
];

const unpinnedTripData = [
  { id: 3, method: "LR", disabilityRating: "OK", origin: "Wynyard", destination: "Marion"},
  { id: 4, method: "LR", disabilityRating: "GOOD", origin: "Rozelle Bay", destination: "Exhibition Centre"}
];

const Trips: FC<TripProps> = ({ pinned }) => {
  
  var TripData;
  pinned ? TripData = [...pinnedTripData] : TripData = [...unpinnedTripData];
  
  return (
    <View style={{alignItems: 'center'}}>
    { TripData.map(item =>
      <TouchableOpacity key={item.id} onPress={() => console.log("Loading trip: " + item.id)}>
        <Neumorphic key={item.id} width={335} height={60} background={COLORS.PRIMARY} radius={10} style={{marginTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

            <View style={{alignItems: 'center', width: 64}}>
              <Image source={require('./lightrail.png')} />
            </View>
            
            <View style={{width: 215}}>
              <Text style={[STYLES.subtitle, {color: 'black', marginBottom: 1}]}> {item.origin} to {item.destination} </Text>
              <DisabilityRating rating={item.disabilityRating} />
            </View>
            
            <View style={{alignItems: 'center', width: 56}}>
              <Image source={require('./chevron-forward.png')} />
            </View>
          
          </View>
        </Neumorphic>  
      </TouchableOpacity>
    )}
  </View>
  );

}

export default Trips;