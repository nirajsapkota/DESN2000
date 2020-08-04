import React, { FC, useState } from 'react';

import { 
  TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, ScrollView,
  StyleSheet, Image, View, Text, Modal
} from 'react-native';

import { 
  Header, Neumorphic
} from '../../../../Components';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import STYLES from '../../../../styles';
import * as COLORS from '../../../../Constants/colors';

import HelpIcon from "./help.svg";
import IdeaIcon from "./idea.svg";
import BugIcon from "./bug.svg";

interface MessageIconProps {
  type: string
}

interface TalkToUsScreenProps {
  navigation: any
};

interface NewRequestModalProps {
  navigation: any,
  visibility: boolean,
  setVisibility: Function
}

const NewRequestModal: FC<NewRequestModalProps> = 
  ({ navigation, visibility, setVisibility }) => {
  
  return (
    <Modal
      visible={visibility}
      onRequestClose={() => setVisibility(false)}
      animationType="slide"
      transparent={true}>


      <TouchableOpacity style={S.darkOverlay} onPress={() => setVisibility(false)}>
        <View style={{position: 'absolute', bottom: 50, right: 20, alignItems: 'flex-end'}}>
        
          <Neumorphic
            width={125}
            height={35}
            radius={500}
            background={COLORS.ACCENT}
            centered
            style={{marginBottom: 15, shadowOpacity: 0}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("View Chat", {icon: "help"}); 
                setVisibility(false);
              }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}> 
              <HelpIcon width={24} height={24} style={{marginRight: 10}} />
              <Text style={S.btnText}>I need help</Text>
            </View>
            </TouchableOpacity>
          </Neumorphic>
        
          <Neumorphic
            width={210}
            height={35}
            radius={500}
            background={COLORS.ACCENT}
            centered
            style={{marginBottom: 15, shadowOpacity: 0}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("View Chat", {icon: "idea"}); 
                setVisibility(false);
              }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}> 
              <IdeaIcon width={24} height={24} style={{marginRight: 10}} />
              <Text style={S.btnText}>I have an idea/feedback</Text>
            </View>
            </TouchableOpacity>
          </Neumorphic>
        
          <Neumorphic
            width={145}
            height={35}
            radius={500}
            background={COLORS.ACCENT}
            centered
            style={{marginBottom: 15, shadowOpacity: 0}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("View Chat", {icon: "bug"}); 
                setVisibility(false);
              }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}> 
              <BugIcon width={24} height={24} style={{marginRight: 10}} />
              <Text style={S.btnText}>I found a bug</Text>
            </View>
            </TouchableOpacity>
          </Neumorphic>

        </View>
      </TouchableOpacity>

    </Modal>
  );

}

const MessageIcon: FC<MessageIconProps> = ({ type }) => {
  if (type === "help") return <HelpIcon width={32} height={32} />
  if (type === "idea") return <IdeaIcon width={32} height={32} />
  if (type === "bug") return <BugIcon width={32} height={32} />
  return null;
}

const TalkToUs: FC<TalkToUsScreenProps> =
  ({ navigation }) => {

  const [showNewRequestModal, setShowNewRequestModal] = useState(false);

  const messages = [
    { id: 3, title: "My opal card was stolen, how can I lock it and recover my balance?", type: "help", date: "Saturday, 18 July, 2020" },
    { id: 2, title: "You guys should add support for locking and unlocking opal cards on demand.", type: "idea", date: "Friday, 19 June, 2020" },
    { id: 1, title: "Cross platform cloud saves aren't working as expected.", type: "bug", date: "Tuesday, 15 October, 2019" }  
  ];

  return (
    <SafeAreaView style={{flex: 1}}> 

      <NewRequestModal
        navigation={navigation}
        visibility={showNewRequestModal}
        setVisibility={setShowNewRequestModal} />

      <Header navigation={navigation} />
    
      <View style={STYLES.container}>
        <Text style={STYLES.title}> We're here </Text>
        <Text style={STYLES.subtitle}> until four am (AEST) tonight </Text>
      </View>

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>

        {messages.map(message =>
          <TouchableOpacity
            key={message.id}
            onPress={() => navigation.navigate('View Chat', {
              icon: message.type,
              id: message.id
            })}
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
                  <Image source={require('../chevron-forward.png')} />
                </View>
              </View>

              </Neumorphic>
          
          </TouchableOpacity>
        )}

      </ScrollView>
    
      <View style={{alignItems: 'flex-end', width: "100%", right: 35, bottom: 25}}>
        <TouchableOpacity
          onPress={() => setShowNewRequestModal(true)}
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

export default TalkToUs;

const S = StyleSheet.create({
  darkOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'black'
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: COLORS.GRAY
  },
  btnText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 16,
    color: 'white'
  },
});