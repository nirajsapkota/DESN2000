import React, { FC, useState, useEffect } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ChatHeader from '../ChatHeader';

import STYLES from '../../../../styles';
import * as COLORS from '../../../../Constants/colors';

import SendIcon from "./send.svg";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

interface ChatProps {
  navigation: any,
  route: any
}

interface MessageProps {
  message: string,
  mine?: boolean
}

const Message: FC<MessageProps> = ({ message, mine }) => {
  
  if (mine) {

    return (
      <View style={{maxWidth: "60%", padding: 10, backgroundColor: COLORS.SLATER_GRAY, borderRadius: 10}}>
        <Text style={{color: "white", fontFamily: "Arial Rounded MT Bold"}}>{message}</Text>
      </View>
    );


  } else {

    return (
      <View style={{maxWidth: "60%", padding: 10, backgroundColor: COLORS.SLATER_GRAY, borderRadius: 10}}>
        <Text style={{color: "white", fontFamily: "Arial Rounded MT Bold"}}>{message}</Text>
      </View>
    );

  }

}

const ViewChat: FC<ChatProps> = ({ navigation,
  route }) => {
  
  const { icon, id } = route.params;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(HelpMessages);

  useEffect(() => {
    if (id === 1) setMessages(BugReportMessages);
    else if (id === 2) setMessages(FeedbackMessages);
    else if (id === 3) setMessages(HelpMessages);
    else setMessages(DefaultMessages);
  }, messages)

  function SendMessage() {
    if (message.length <= 0) return;
    const r = [...messages];
    r.push({id: MyID, message: message});
    setMessages(r);
    setMessage("");
  }

  return (
    <View style={{flex: 1}}>
      <ChatHeader icon={icon} />

      <KeyboardAvoidingView
        style={{position: "absolute", left: 0, right: 0, bottom: 0}}
        keyboardVerticalOffset={91}
        behavior="position">
        
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {messages.map((message, index) =>
            { 
              if (message.id === MyID)
                return ( 
                  <View style={{alignItems: "flex-end", marginBottom: 10, marginRight: 10}}> 
                    <Message message={message.message} mine /> 
                  </View>
                );
              else
                console.log(index);
                  return (
                    <View style={{
                      marginBottom: 10, marginLeft: 10}}> 
                      <Message message={message.message} />
                    </View>
                  );
            }
          )}
        </ScrollView>

        <View style={S.container}>
          <TextInput
            style={S.TextInputStyle}
            placeholder="Aa"
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholderTextColor={COLORS.GRAY2}
            autoFocus
            />

          <TouchableOpacity
            onPress={() => SendMessage()}>
            <SendIcon width={32} height={32} fill={COLORS.ACCENT} />
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </View>
  );

}

export default ViewChat;

const MyID = 1234;

const DefaultMessages = [
  { id: -1, message: "Hi, leave us a message and we'll respond as soon as possible." }
];


const HelpMessages = [
  { id: -1, message: "Hi, leave us a message and we'll respond as soon as possible." },
  { id: 1234, message: "My opal card was stolen, how can I lock it and recover my balance?" },
  { id: -1, message: "Oh no! That's awful, not to worry though, I can help you with that! Can you please provide me the Opal Card Number? It should still be viewable from your online Opal account." }
];

const FeedbackMessages = [
  { id: -1, message: "Hi, leave us a message and we'll respond as soon as possible." },
  { id: 1234, message: "You guys should add support for locking and unlocking opal cards on demand." },
  { id: -1, message: "That's a great idea Roger! I'll pass it on to our development team!" },
];

const BugReportMessages = [
  { id: -1, message: "Hi, leave us a message and we'll respond as soon as possible." },
  { id: 1234, message: "You guys should add support for locking and unlocking opal cards on demand." },
  { id: -1, message: "That's strange -- can you provide us with more details e.g. which device you are using, the specific issue and when it occurs. Thanks!" },
];

const S = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SLATER_GRAY,
    flexDirection: "row",
    alignItems: "center"
  },
  TextInputStyle: {
    backgroundColor: COLORS.SLATER_GRAY,
    width: "87.5%",
    height: 55,
    bottom: 0,
    padding: 15,
    color: "white",
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 18,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  }
})