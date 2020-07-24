import React, { FC } from 'react';

import { 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

import { 
  Header, Neumorphic
} from '../../Components';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import STYLES from '../../styles';
import * as COLORS from '../../Constants/colors';

interface MessageIconProps {
  type: string
}

interface TalkToUsScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const MessageIcon: FC<MessageIconProps> = ({ type }) => {
  if (type === "help") return <Image source={require('./help.png')} />
  if (type === "idea") return <Image source={require('./idea.png')} />
  if (type === "bug") return <Image source={require('./bug.png')} />
  return null;
}

const TalkToUsScreen: FC<TalkToUsScreenProps> = ({ navigation }) => {

  const messages = [
    { id: 3, title: "My opal card was stolen, how can I lock it and recover my balance?", type: "help", date: "Saturday, 18 July, 2020" },
    { id: 2, title: "You guys should add support for locking and unlocking opal cards on demand.", type: "idea", date: "Friday, 19 June, 2020" },
    { id: 1, title: "Cross platform cloud saves aren't working as expected.", type: "bug", date: "Tuesday, 15 October, 2019" }  
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Header navigation={navigation} />
    
      <View style={STYLES.container}>
        <Text style={STYLES.title}> We're here </Text>
        <Text style={STYLES.subtitle}> until four am (AEST) tonight </Text>
      </View>

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>

        {messages.map(message =>
          <TouchableOpacity
            key={message.id}
            onPress={() => console.log("Loading")}
          >

              <Neumorphic
                width={350}
                height={60}
                background={COLORS.PRIMARY}
                radius={10}
                style={{marginTop: 15}}
              >

              <View style={{flexDirection: 'row'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 50}}>
                  <MessageIcon type={message.type} />
                </View>
                <View style={{justifyContent: 'center', width: 250}}>
                  <Text style={S.title} numberOfLines={1}> {message.title} </Text>
                  <Text style={S.subtitle}> {message.date} </Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 35}}>
                  <Image source={require('./chevron-forward.png')} />
                </View>
              </View>

              </Neumorphic>
          
          </TouchableOpacity>
        )}

      </ScrollView>
    
      <View style={{alignItems: 'flex-end', width: "100%", right: 35, bottom: 25}}>
        <TouchableOpacity
          onPress={() => console.log("new report")}
        >
          <Neumorphic
            width={48}
            height={48}
            background={COLORS.ACCENT}
            radius={24}
            centered
          >
            <Ionicons name="ios-add" size={32} color="white" />
          </Neumorphic>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

export default TalkToUsScreen;

const S = StyleSheet.create({
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'black'
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: COLORS.GRAY
  }
});