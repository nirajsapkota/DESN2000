import React, { FC } from 'react';
import Neumorphic from '../../../../Components/Neumorphic';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import {  } from './Components';

import STYLES from '../../../../styles';
import * as COLORS from '../../../../Constants/colors';

interface TripProps {
  pinned?: boolean
};

const activityTripsData = [
        { id: 0, date:"Friday, 17th of July, 2020", order: 0, method: "LR", origin: "Dulwich Hull", destination: "Central" , startTime: "6:14pm", endTime: "7:11pm", duration: "57 minutes", cost: 2.35},
        { id: 1, date:"Friday, 17th of July, 2020", order: 1, method: "LR", origin: "Dulwich Hull", destination: "Central" , startTime: "6:14pm", endTime: "7:11pm", duration: "57 minutes", cost: 2.35},
        { id: 2, date:"Friday, 17th of July, 2020", order: 2, method: "LR", origin: "Dulwich Hull", destination: "Central" , startTime: "6:14pm", endTime: "7:11pm", duration: "57 minutes", cost: 2.35},
        { id: 3, date:"Wednesday, 15th of July, 2020", order: 0, method: "LR", origin: "Dulwich Hull", destination: "Central" , startTime: "6:14pm", endTime: "7:11pm", duration: "57 minutes", cost: 2.35},
        { id: 4, date:"Wednesday, 15th of July, 2020", order: 1, method: "LR", origin: "Dulwich Hull", destination: "Central" , startTime: "6:14pm", endTime: "7:11pm", duration: "57 minutes", cost: 2.35},

        // { id: 1, method: "LR", disabilityRating: "GOOD", origin: "Wentworth Park", destination: "Moore Park" },
        // { id: 2, method: "LR", disabilityRating: "POOR", origin: "UNSW Anzac Parade", destination: "Haymarket" }
];

const L1Logo = () => {
    return (
        <View style={S.logo}>
            <Text style={S.logoText}> L1 </Text>
        </View>
    );
}

const ActivityTrips: FC<TripProps> = ({ pinned }) => {
  
  var TripData = [... activityTripsData];
//   pinned ? TripData = [...pinnedTripData] : TripData = [...unpinnedTripData];
  var title;
  var trip;
  return (
    <View style={{alignItems: 'center'}}>
        { TripData.map(item => 
            {
                trip = (
                    <TouchableOpacity key={item.id} onPress={() => console.log("Loading trip: " + item.id)}>
                    <Neumorphic key={item.id} width={335} height={60} background={COLORS.PRIMARY} radius={10} style={{marginTop: 15}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>

                            {/* Trip Service Logo*/}
                            <View style={{alignItems: 'center', width: 64, height: 64}}>
                                <Image source={require('./lightrail.png')} />
                            </View>
                            
                            {/* Trip details */}
                            <View style={{width: 215}}>
                                <Text style={[STYLES.subtitle, {color: 'black', marginBottom: 1}]}> {item.origin} to {item.destination} </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <L1Logo />
                                    <Text>  </Text>
                                    <Text style={[S.text,S.tripTimes]}>{item.startTime} to {item.endTime}, {item.duration}</Text>
                                </View>
                            </View>
                            
                            {/* Trip Cost */}
                            <View style={{alignItems: 'center', width: 56}}>
                                {/* <Image source={require('./chevron-forward.png')} /> */}
                                <Text style={[S.text,S.priceText]}>${item.cost}</Text>
                            </View>
                        
                        </View>
                    </Neumorphic>  
                    </TouchableOpacity>
                )
                if (item.order == 0){
                    title = (<View>
                                <Text>
                                    {item.date}
                                </Text> 
                            </View>)
                } else {
                    title = (
                        <View> 
                            <Text> </Text> 
                        </View>
                    )
                }
                return(
                    <View> 
                        {title}
                        {trip}
                    </View>
                )
            }
        )}

        <View>
            <Text>
                There are no more trips to display...
            </Text>
        </View>
    </View>
  );

}

export default ActivityTrips;

const S = StyleSheet.create({
    logo: {
        width: 18,
        height: 18,
        borderRadius: 5,
        backgroundColor: '#AD1926',
    },
    text: {
        fontFamily: 'Arial Rounded MT Bold',
    },
    priceText: {
        fontSize: 12,
    },
    tripTimes: {
        fontSize: 8,
    },
    logoText: {
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
    },
});