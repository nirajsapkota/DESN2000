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
import Dialog from "react-native-dialog";

interface SignupScreenProps {
  navigation: any,
}

const SignupScreen: FC<SignupScreenProps> =
  ({ navigation }) => {

    const [errorDialog, setErrorDialog] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");

    const CheckEmailError = () => {
      const regex = RegExp(/^[a-zA-Z0-9_\.]+@[a-zA-Z\.]*/);
      const match = regex.test(email);
      if (!match) setEmailError("Invalid email.");
      else setEmailError("");
    }

    const CheckPasswordError = () => {
      const regex = RegExp(/[A-Z]/);
      const containsUppercase = regex.test(password);
      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match.");
      } else if (password.length < 10) {
        setPasswordError("Password must be at least 10 characters long.");
      } else if (!containsUppercase) {
        setPasswordError("Password must contain an uppercase letter.");
      } else {
        setPasswordError("");
      }
    }

    const CheckUsernameError = () => {
      const regex = RegExp(/^\w+$/);
      const match = regex.test(username);
      if (!match) setUsernameError("Invalid username.");
      else setUsernameError("");
    }

    const CheckLocationError = () => {
      const regex = RegExp(/^\w+$/);
      const match = regex.test(location);
      if (!match) setLocationError("Invalid location.");
      else setLocationError("");
    }

    const HandleSignUp = () => {
      if (emailError != "" || usernameError != "" || passwordError != "" || locationError != "") {
        setErrorDialog(true);
        return;
      }

      navigation.navigate("Dashboard");
    }

    return (
      <View style={[S.darkOverlay, { flex: 1 }]}>
        <View style={[S.positioningContainer, { flexGrow: 1 }]}>
          <KeyboardAvoidingView keyboardVerticalOffset={-100}
            behavior="position">
            <View style={S.centeredModal}>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20
              }}>
                <TransportLogo width={220} height={60} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <CloseIcon style={{ marginTop: 12.5 }} />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 15, marginBottom: 15 }}>
                <View style={{ width: 270, marginBottom: 25 }}>
                  <Text style={S.title}>Welcome aboard.</Text>
                </View>

                <Text style={S.subtitle}> Email </Text>
                <TextInput
                  style={S.textbox}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder="e.g. janecitizen@goodcitizen.com"
                  onBlur={CheckEmailError} />
                {emailError != "" ? <Text style={{ color: "red" }}>{emailError}</Text> : null}

                <Text style={S.subtitle}> Username </Text>
                <TextInput
                  style={S.textbox}
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                  placeholder="e.g. janecitizen"
                  onBlur={CheckUsernameError}
                  maxLength={15} />
                {usernameError != "" ? <Text style={{ color: "red" }}>{usernameError}</Text> : null}

                <Text style={S.subtitle}> Password </Text>
                <TextInput
                  secureTextEntry={true}
                  style={S.textbox}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  textContentType="password"
                  placeholder="*************" 
                  maxLength={25} />

                <Text style={S.subtitle}> Confirm password </Text>
                <TextInput
                  secureTextEntry={true}
                  style={S.textbox}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  textContentType="password"
                  placeholder="*************"
                  onBlur={CheckPasswordError}
                  maxLength={25} />
                {passwordError != "" ? <Text style={{ color: "red" }}>{passwordError}</Text> : null}

                <Text style={S.subtitle}> Location </Text>
                <TextInput
                  style={S.textbox}
                  value={location}
                  onChangeText={(text) => setLocation(text)}
                  placeholder="e.g. Sydney, NSW"
                  onBlur={CheckLocationError}
                  maxLength={25} />
                {locationError != "" ? <Text style={{ color: "red" }}>{locationError}</Text> : null}
              </View>

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => HandleSignUp()}>
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

              <View>
                <Dialog.Container visible={errorDialog}>
                  <Dialog.Title>Ensure Correct Input</Dialog.Title>
                  <Dialog.Description>Please check your input.</Dialog.Description>
                  <Dialog.Button label="okay" onPress={() => setErrorDialog(false)} />
                </Dialog.Container>
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