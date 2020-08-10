/**
 * Assignee: Ryan.
 * - [x] Research onboarding examples.
 * - [x] Plan aesthetic using Figma.
 * - [x] Create assets.
 * - [x] Prototype pages.
 * - [x] Create 1st page.
 * - [x] Create 2nd page.
 * - [x] Create 3rd page.
 * - [x] Create 4th page.
 * - [x] Polish all pages.
 */

import React, { FC, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { Header, Neumorphic } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Swiper from 'react-native-swiper';
import Logo from "./Logo.svg";
import * as COLORS from '../../Constants/colors';

import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';

interface OnboardingScreenProps {
    navigation: DrawerNavigationProp<any, any>
};

const OnboardingScreen: FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <Swiper style={S.container} index={0} loop={false}>
            <SafeAreaView style={S.slide}>
                <Logo style={S.logo} width={220} height={60} />

                <Image source={require('./hd_opal_cards_four.png')} style={S.imageOpal} resizeMode='cover' />
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
                    <TouchableOpacity style={S.skipButton} onPress={() => navigation.navigate("Home")}>
                        <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
                            <Text>Skip</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <SafeAreaView style={S.slide}>
                <Logo style={S.logo} width={220} height={60} />

                <Image source={require('./payments1.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Pay with your phone</Text>
                <Text style={S.subtitle}>Tap-on and off, top-up and manage cards you’ve scanned to your phone or attached to your account.</Text>

                <View style={S.skipContainer}>
                    <TouchableOpacity style={S.skipButton} onPress={() => navigation.navigate("Home")}>
                        <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
                            <Text>Skip</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <SafeAreaView style={S.slide}>
                <Logo style={S.logo} width={220} height={60} />

                <Image source={require('./trip1.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Plan your trip</Text>
                <Text style={S.subtitle}>Get a guided tour from one address to another using the NSW transport network. </Text>
                <View style={S.skipContainer}>
                    <TouchableOpacity style={S.skipButton} onPress={() => navigation.navigate("Home")}>
                        <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
                            <Text>Skip</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <SafeAreaView style={S.slide}>
                <Logo style={S.logo} width={220} height={60} />

                <Image source={require('./accessibility1.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Get accessibility info</Text>
                <Text style={S.subtitle}>Tap on any trip’s or stop’s accessibility icon to get detailed, real-time information on accessibility services available.</Text>

                <View style={S.skipContainer}>
                    <TouchableOpacity style={S.skipButton} onPress={() => navigation.navigate("Home")}>
                        <Neumorphic width={60} height={40} radius={15} background={COLORS.PRIMARY} centered >
                            <Text>Skip</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <SafeAreaView style={S.slide}>
                <Logo style={S.logo} width={220} height={60} />

                <Image source={require('./accessibility2.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Get help!</Text>
                <Text style={S.subtitle}>Submit a request for assistance, and station staff will be there to help you with boarding, alighting and other emergencies.</Text>

                <View style={S.skipContainer}>
                    <TouchableOpacity style={S.skipButton} onPress={() => navigation.navigate("Home")}>
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
        alignItems: 'center',
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