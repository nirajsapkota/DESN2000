/**
 * Assignee: Ryan.
 * - [x] Research onboarding examples.
 * - [x] Plan aesthetic using Figma.
 * - [x] Create assets.
 * - [x] Prototype pages.
 * - [~] Create 1st page.
 * - [ ] Create 2nd page.
 * - [ ] Create 3rd page.
 * - [ ] Create 4th page.
 */

import React, { FC, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { Header, Neumorphic } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Swiper from 'react-native-swiper'
import Logo from "./Logo.svg";
import * as COLORS from '../../Constants/colors';

import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';

interface OnboardingScreenProps {
    navigation: DrawerNavigationProp<any, any>
};

const OnboardingScreen: FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <Swiper style={STYLES.container} index={0} loop={false}>
            <ScrollView contentContainerStyle={S.slide}>
                <Logo width={220} height={60} />

                <Image source={require('./hd_opal_cards_four.png')} style={{ width: 330, height: 225 }} resizeMode='cover' />
                <Text style={S.title}>Welcome to the NSW Transport App</Text>
                <Text style={S.subtitle}>Log in to your Opal Account to manage and pay with Opal cards on your account.</Text>

                <View style={S.signupButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Neumorphic style={S.signupButton} width={60} height={60} radius={15} background={COLORS.BLUE2} centered>
                            <Text style={S.signupText}>Login</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                {/* </View> */}

                <Text style={S.whisperText}>or alternatively,</Text>

                {/* <View style={S.signupButtonContainer}> */}
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Neumorphic style={S.signupButton} width={60} height={60} radius={15} background={COLORS.BLUE2} centered>
                            <Text style={S.signupText}>Signup</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={S.skipButton} onPress={() => navigation.navigate("Home")}>
                    <Neumorphic width={60} height={60} radius={15} background={COLORS.PRIMARY} centered >
                        <Text>Skip</Text>
                    </Neumorphic>
                </TouchableOpacity>

            </ScrollView>
            <View style={S.slide}>
                <Logo width={220} height={60} />
                <Image source={require('./payments1.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Pay with your phone</Text>
                <Text style={S.subtitle}>Tap-on and off, top-up and manage cards you’ve scanned to your phone or attached to your account.</Text>
            </View>
            <View style={S.slide}>
                <Logo width={220} height={60} />
                <Image source={require('./trip1.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Plan your trip</Text>
                <Text style={S.subtitle}>Get a guided tour from one address to another using the NSW transport network. </Text>
            </View>
            <View style={S.slide}>
                <Logo width={220} height={60} />
                <Image source={require('./accessibility1.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Get accessibility info</Text>
                <Text style={S.subtitle}>Tap on any trip’s or stop’s accessibility icon to get detailed, real-time information on accessibility services available.Tap on any trip’s or stop’s accessibility icon to get detailed, real-time information on accessibility services available.</Text>
            </View>
            <View style={S.slide}>
                <Logo width={220} height={60} />
                <Image source={require('./accessibility2.png')} style={S.imagePhone} resizeMode='cover' />
                <Text style={S.title}>Get help!</Text>
                <Text style={S.subtitle}>Submit a request for assistance, and station staff will be there to help you with boarding, alighting and other emergencies.</Text>
            </View>
        </Swiper>
    );
}
export default OnboardingScreen;

const S = StyleSheet.create({
    title: {
        marginLeft: -5,
        fontFamily: "Arial Rounded MT Bold",
        fontSize: 20,
        color: "#4070F4"
    },
    subtitle: {
        fontFamily: "Arial",
        fontSize: 18,
        textAlign: "center",
        color: "#4070F4"
    },
    whisperText: {
        color: "#000000",
        fontSize: 10,
        opacity: 0.5
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        color: "#EDF0F4"
    },
    signupButtonContainer: {
        flexDirection: "row",
    },
    signupButton: {
        backgroundColor: "#4070F4",
        alignContent: "center",
        flex: 1
    },
    skipButton: {
        alignContent: "center"
    },
    imagePhone: {
        width: 225,
        height: 430
    }
});