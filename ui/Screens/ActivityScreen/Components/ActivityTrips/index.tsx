import React, { FC } from 'react';
import Neumorphic from '../../../../Components/Neumorphic';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import STYLES from '../../../../styles';
import * as COLORS from '../../../../Constants/colors';

import LightRailIcon from "./lightrail.svg";

interface TripProps {
  pinned?: boolean
};

const TripData = [
  { date: "Friday, 17th of July, 2020", trips: [ 
    { date: "", method: "LR", origin: "Dulwich Hill" , destination: "Central", tripStart: "6:14pm", tripEnd: "7:11pm", duration: "57 minutes", cost: 2.35 },
    { date: "", method: "LR", origin: "Dulwich Hill" , destination: "Central", tripStart: "6:14pm", tripEnd: "7:11pm", duration: "57 minutes", cost: 2.35 },
    { date: "", method: "LR", origin: "Dulwich Hill" , destination: "Central", tripStart: "6:14pm", tripEnd: "7:11pm", duration: "57 minutes", cost: 2.35 }
  ]},
  
  { date: "Wednesday, 15th of July, 2020", trips: [ 
    { date: "", method: "LR", origin: "Dulwich Hill" , destination: "Central", tripStart: "6:14pm", tripEnd: "7:11pm", duration: "57 minutes", cost: 2.35 },
    { date: "", method: "LR", origin: "Dulwich Hill" , destination: "Central", tripStart: "6:14pm", tripEnd: "7:11pm", duration: "57 minutes", cost: 2.35 }
  ]}
];

const L1Logo = () => {
  return (
    <View style={[S.logo, {alignItems: "center", justifyContent: "center"}]}>
      <Text style={S.logoText}> L1 </Text>
    </View>
  );
}

const ActivityTrips: FC<TripProps> = ({ pinned }) => {
  
  return (
    <View>
      {TripData.map(TripGroup =>
        <View>
          <Text style={[S.title, {marginBottom: 15}]}>{TripGroup.date}</Text>
          <View style={{alignItems: "center"}}>
            {TripGroup.trips.map(trip =>
              <Neumorphic
                width={335}
                height={60}
                background={COLORS.PRIMARY}
                radius={10}
                style={{marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* Trip Service Logo*/}
                  <View style={{alignItems: 'center',justifyContent:'center', width: 64, height: 64}}>
                    <LightRailIcon width={42} height={42} />
                  </View>
                              
                  {/* Trip details */}
                  <View style={{width: 195}}>
                    <Text style={[STYLES.subtitle, {color: 'black', marginBottom: 1}]}>{trip.origin} to {trip.destination}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <L1Logo />
                      <Text style={[S.text, S.tripTimes]}>  {trip.tripStart} to {trip.tripEnd}, {trip.duration}</Text>
                    </View>
                  </View>

                  {/* Trip Cost */}
                  <View style={{alignItems: 'center', width: 56}}>
                    <Text style={[S.text, S.priceText]}>${trip.cost}</Text>
                  </View>
                </View>
              </Neumorphic>
            )}
          </View>
        </View>
      )}
    </View>

  // <View>
    //   { TripData.map(item => 
    //     {
    //       trip = (
    //         <TouchableOpacity key={item.id} onPress={() => console.log("Loading trip: " + item.id)} style={{alignItems: "center"}}>
    //           <Neumorphic key={item.id} width={335} height={60} background={COLORS.PRIMARY} radius={10} style={{marginTop: 15}}>
    //             <View style={{flexDirection: 'row', alignItems: 'center'}}>

    //               {/* Trip Service Logo*/}
    //               <View style={{alignItems: 'center',justifyContent:'center', width: 64, height: 64}}>
    //                 <Image source={require('./lightrail.png')} />
    //               </View>
                                
    //               {/* Trip details */}
    //               <View style={{width: 195}}>
    //                 <Text style={[STYLES.subtitle, {color: 'black', marginBottom: 1}]}> {item.origin} to {item.destination} </Text>
    //                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //                   <L1Logo />
    //                   <Text>  </Text>
    //                   <Text style={[S.text,S.tripTimes]}>{item.startTime} to {item.endTime}, {item.duration}</Text>
    //                 </View>
    //               </View>

    //               {/* Trip Cost */}
    //               <View style={{alignItems: 'center', width: 56}}>
    //                 {/* <Image source={require('./chevron-forward.png')} /> */}
    //                 <Text style={[S.text,S.priceText]}>${item.cost}</Text>
    //               </View>
    //             </View>
    //           </Neumorphic>  
    //         </TouchableOpacity>
    //       )
    //       if (item.order == 0){
    //         title = (<View>
    //                   <Text style={S.sectionText}>
    //                     {item.date}
    //                   </Text> 
    //                 </View>)
    //       } else {
    //         title = (
    //           <View> 
    //             <Text> </Text> 
    //           </View>
    //         )
    //       }
    //       return(
    //         <View key={item.id}>
    //           {title}
    //           <View style={{alignItems: 'flex-start'}}>
    //             {trip}
    //           </View>
    //         </View>
    //       )
    //     }
    //   )}

    //   <View>
    //     <Text style={S.sectionText}>
    //       There are no more trips to display...
    //     </Text>
    //   </View>
    // </View>
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
  sectionText: {
    color: '#456078',
    marginLeft:5,
    fontSize: 10,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
  },
  tripTimes: {
    fontSize: 13,
    color: COLORS.GRAY2
  },
  logoText: {
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.SLATE_GRAY
  },

});