/**
 * - [ ] Research onboarding examples.
 * - [ ] Plan aesthetic using Figma.
 * - [ ] Create assets.
 * - [ ] Create 1st page.
 * - [ ] Create 2nd page.
 * - [ ] Create 3rd page.
 * - [ ] Create 4th page.
 */

import React, { FC, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { Header, Neumorphic } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Pages } from 'react-native-pages';
import * as COLORS from '../../Constants/colors';

import STYLES from '../../styles';

interface OnboardingScreenProps {
    navigation: DrawerNavigationProp<any, any>
};

const OnboardingScreen: FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />

            <Pages>
                <View style={STYLES.container}>
                    <Image source={require('./logo.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Image source={require('./hd_opal_cards_four.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Text style={S.title}>Welcome to the NSW Transport App</Text>
                    <Text style={S.regularText}>Log in to your Opal Account to manage and pay with Opal cards on your account.</Text>
                    <Text style={S.whisperText}>or alternatively,</Text>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}>
                        <Neumorphic
                            width={60}
                            height={60}
                            radius={15}
                            background={COLORS.PRIMARY}
                            centered
                        >
                            <Text>Skip</Text>
                        </Neumorphic>
                    </TouchableOpacity>
                </View>
                <View style={STYLES.container}>
                    <Image source={require('./logo.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Image source={require('./payments1.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Text style={S.title}>Pay with your phone</Text>
                    <Text style={S.regularText}>Tap-on and off, top-up and manage cards you’ve scanned to your phone or attached to your account.</Text>
                </View>
                <View style={STYLES.container}>
                    <Image source={require('./logo.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Image source={require('./trip1.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Text style={S.title}>Plan your trip</Text>
                    <Text style={S.regularText}>Get a guided tour from one address to another using the NSW transport network. </Text>
                </View>
                <View style={STYLES.container}>
                    <Image source={require('./logo.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Image source={require('./accessibility1.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Text style={S.title}>Get accessibility info</Text>
                    <Text style={S.regularText}>Tap on any trip’s or stop’s accessibility icon to get detailed, real-time information on accessibility services available.Tap on any trip’s or stop’s accessibility icon to get detailed, real-time information on accessibility services available.</Text>
                </View>
                <View style={STYLES.container}>
                    <Image source={require('./logo.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Image source={require('./accessibility2.png')} style={{ flex: 1, width: 335, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                    <Text style={S.title}>Get help!</Text>
                    <Text style={S.regularText}>Submit a request for assistance, and station staff will be there to help you with boarding, alighting and other emergencies.</Text>
                </View>
            </Pages>
        </SafeAreaView>
    );
}

export default OnboardingScreen;

const S = StyleSheet.create({
    title: {
        marginLeft: -5,
        fontFamily: "Arial Rounded MT Bold",
        fontSize: 30,
        color: "#4070F4"
    },
    subtitle: {
        fontFamily: "Arial Rounded MT Bold",
        fontSize: 14,
        color: "#4070F4"
    },
    regularText: {
        color: "#4070F4"
    },
    whisperText: {
        color: "#000000",
        opacity: 0.5
    },
});