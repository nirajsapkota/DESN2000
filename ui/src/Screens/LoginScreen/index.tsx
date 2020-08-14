import React, { FC, useState } from 'react';

import { 
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text
} from "react-native";

import { 
  Neumorphic
} from "_common_components";

import {
  COLORS
} from "_constants";

import CloseIcon from "_icons/close.svg";
import TransportLogo from "_icons/logo.svg";

interface LoginScreenProps {
  navigation: any,
  visibility: boolean,
  setVisibility: Function,
};

const LoginScreen: FC<LoginScreenProps> = 
  ({ navigation }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
      <ScrollView contentContainerStyle={[S.darkOverlay, {flexGrow: 1}]}>
      <View style={[S.positioningContainer,  {flexGrow: 1}]}>
      <KeyboardAvoidingView
        behavior="position">
      <View style={S.centeredModal}>
          
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
            <TransportLogo width={220} height={60} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CloseIcon style={{marginTop: 12.5}} />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 15, marginBottom: 15}}>
            <View style={{width: 270, marginBottom: 20}}>
              <Text style={S.title}>Hello, how have you been? </Text>
            </View>

            <Text style={S.subtitle}> Username </Text>
            <TextInput
              style={S.textbox}
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="e.g. janecitizen" />

            <Text style={S.subtitle}> Password </Text>
            <TextInput
              secureTextEntry={true}
              style={S.textbox}
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="*************" />
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Dashboard")}>
              <Neumorphic
                width={280}
                height={50}
                radius={500}
                background={COLORS.ACCENT}
                centered>
                <Text style={S.btnText}>Log in</Text>
              </Neumorphic>          
            </TouchableOpacity>
          </View>
      
      </View>
      </KeyboardAvoidingView>    
      </View>
      </ScrollView>
  );

}

export default LoginScreen;


const S = StyleSheet.create({
  darkOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  positioningContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredModal: {
    backgroundColor: COLORS.PRIMARY,
    width: 365,
    height: 455,
    borderRadius: 30,
    padding: 20
  },
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 28,
    color: COLORS.ACCENT
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 18,
    color: COLORS.ACCENT,
  },
  placeholderText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)'
  },
  btnText: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 16,
    color: 'white'
  },
  textbox: {
    width: "100%",
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 10,
    paddingLeft: 10,
    marginBottom: 15
  }
});