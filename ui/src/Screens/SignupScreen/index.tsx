import React, { FC, useState } from "react";

import {
  KeyboardAvoidingView,
  TouchableOpacity,
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

import TransportLogo from "_icons/logo.svg";
import CloseIcon from "_icons/close.svg";

interface SignupScreenProps {
  navigation: any,
}

const SignupScreen: FC<SignupScreenProps> =
  ({ navigation }) => {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [valid, setValid] = useState(true);

  // Check signup form
  function HandleRequest(): void {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Check for invalid email or passwords don"t match
    if ((regex.test(email) === false)) {
        setValid(false);
       
    } else {
      setValid(true);
    }
    
  }

  return (
      <View style={[S.darkOverlay, {flex: 1}]}>
      <View style={[S.positioningContainer,  {flexGrow: 1}]}>
      <KeyboardAvoidingView keyboardVerticalOffset= {-100}
        behavior="position">
      <View style={S.centeredModal}>
      
          <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20}}>
            <TransportLogo width={220} height={60} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CloseIcon style={{marginTop: 12.5}} />
            </TouchableOpacity>
          </View>
          
          <View style={{marginTop: 15, marginBottom: 15}}>
            <View style={{width: 270, marginBottom: 25}}>
              <Text style={S.title}>Welcome aboard.</Text>
            </View>

            <Text style={S.subtitle}> Email </Text>
            <TextInput
              style={S.textbox}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="e.g. janecitizen@goodcitizen.com" />

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

            <Text style={S.subtitle}> Confirm password </Text>
            <TextInput
              secureTextEntry={true}
              style={S.textbox}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              textContentType="password"
              placeholder="*************" />

            <Text style={S.subtitle}> Location </Text>
            <TextInput
              style={S.textbox}
              value={location}
              onChangeText={(text) => setLocation(text)}
              placeholder="e.g. Sydney, NSW" />
          </View>

          <View style={{alignItems: "center"}}>
            <TouchableOpacity
              onPress={() => {HandleRequest;
                             valid ? navigation.goBack() : null;}}>
              <Neumorphic
                width={280}
                height={50}
                radius={500}
                background={COLORS.ACCENT}
                centered>
                <Text style={S.btnText}>Join</Text>
              </Neumorphic>          
            </TouchableOpacity>
        </View>
        
      </View>
      </KeyboardAvoidingView>
      </View>
      </View>
  );

}

export default SignupScreen;

const S = StyleSheet.create({
  darkOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  positioningContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  centeredModal: {
    backgroundColor: COLORS.PRIMARY,
    width: 365,
    height: 665,
    borderRadius: 30,
    padding: 20
  },
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 28,
    color: COLORS.ACCENT
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 18,
    color: COLORS.ACCENT,
  },
  placeholderText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "rgba(0,0,0,0.5)"
  },
  btnText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 16,
    color: "white"
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