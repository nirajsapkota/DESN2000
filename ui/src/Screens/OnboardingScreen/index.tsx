import React, { FC } from "react";

import {
  TouchableOpacity,
  AsyncStorage,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";

import {
  Neumorphic
} from "_common_components";

import {
  COLORS
} from "_constants";

import Swiper from "react-native-swiper";

import LogoIcon from "_icons/logo.svg";

import OpalCardsImage from "_images/opal-cards.svg";
import PaymentsImage from "_images/payments.svg";
import TripsImage from "_images/trips.svg";
import AccessibilityImage1 from "_images/accessibility-1.svg";
import AccessibilityImage2 from "_images/accessibility-2.svg";

interface OnboardingScreenProps {
  navigation: any
};

const OnboardingScreen: FC<OnboardingScreenProps> = ({ navigation }) => {

  const completeOnboarding = async () => {
    await AsyncStorage.setItem("hasOnboarded", JSON.stringify({ hasOnboarded: true }));
    navigation.navigate("Dashboard");
  }

  return (
    <Swiper style={S.container} index={0} loop={false}>
      <SafeAreaView style={S.slide}>
        <LogoIcon style={S.logo} width={220} height={60} />

        <OpalCardsImage />
        <Text style={S.title}>Welcome to the NSW Transport App</Text>
        <Text style={S.subtitle}>Log in to your Opal Account to manage and pay with Opal cards on your account.</Text>

        <View style={S.signupButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Neumorphic style={S.signupButton} width={"100%"} height={50} radius={15} background={COLORS.BLUE2} centered>
              <Text style={S.signupText}>Login</Text>
            </Neumorphic>
          </TouchableOpacity>

          <Text style={S.whisperText}>or alternatively,</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Neumorphic style={S.signupButton} width={"100%"} height={50} radius={15} background={COLORS.BLUE2} centered>
              <Text style={S.signupText}>Signup</Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>

        <View style={S.skipContainer}>
          <TouchableOpacity style={S.skipButton} onPress={() => completeOnboarding()}>
            <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
              <Text>Skip</Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={S.slide}>
        <LogoIcon style={S.logo} width={220} height={60} />

        <PaymentsImage />
        <Text style={S.title}>Pay with your phone</Text>
        <Text style={S.subtitle}>Tap-on and off, top-up and manage cards you’ve scanned to your phone or attached to your account.</Text>

        <View style={S.skipContainer}>
          <TouchableOpacity style={S.skipButton} onPress={() => completeOnboarding()}>
            <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
              <Text>Skip</Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={S.slide}>
        <LogoIcon style={S.logo} width={220} height={60} />

        <TripsImage />
        <Text style={S.title}>Plan your trip</Text>
        <Text style={S.subtitle}>Get a guided tour from one address to another using the NSW transport network. </Text>
        <View style={S.skipContainer}>
          <TouchableOpacity style={S.skipButton} onPress={() => completeOnboarding()}>
            <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
              <Text>Skip</Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={S.slide}>
        <LogoIcon style={S.logo} width={220} height={60} />

        <AccessibilityImage1 />
        <Text style={S.title}>Get accessibility info</Text>
        <Text style={S.subtitle}>Tap on any trip’s or stop’s accessibility icon to get detailed, real-time information on accessibility services available.</Text>

        <View style={S.skipContainer}>
          <TouchableOpacity style={S.skipButton} onPress={() => completeOnboarding()}>
            <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
              <Text>Skip</Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={S.slide}>
        <LogoIcon style={S.logo} width={220} height={60} />

        <AccessibilityImage2 />
        <Text style={S.title}>Get help!</Text>
        <Text style={S.subtitle}>Submit a request for assistance, and station staff will be there to help you with boarding, alighting and other emergencies.</Text>

        <View style={S.skipContainer}>
          <TouchableOpacity style={S.skipButton} onPress={() => completeOnboarding()}>
            <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
              <Text>Finish</Text>
            </Neumorphic>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Swiper>
  );
}
export default OnboardingScreen;

const S = StyleSheet.create({
  container: {
    // alignContent: "center"
  },
  slide: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    marginLeft: -5,
    marginBottom: 10,
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 20,
    color: "#4070F4"
  },
  subtitle: {
    padding: 5,
    fontFamily: "Arial",
    fontSize: 18,
    textAlign: "center",
    color: "#4070F4",
    marginBottom: 30
  },
  whisperText: {
    alignSelf: "center",
    color: "#000000",
    fontSize: 10,
    opacity: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
  signupText: {
    color: "#EDF0F4"
  },
  signupButtonContainer: {
    width: "100%"
  },
  signupButton: {
    backgroundColor: "#4070F4",
    alignContent: "center",
    alignSelf: "center",
    width: "85%"
  },
  skipContainer: {
    flex: 1,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
  },
  skipButton: {
    alignSelf: "flex-end",
    alignContent: "center",
    marginBottom: 40,
    marginRight: 20,
  },
  imageOpal: {
    width: 330,
    height: 225,
    marginBottom: 15,
  },
  imagePhone: {
    width: 225,
    height: 430,
    marginBottom: 15,
  }
});