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
import { SafeAreaView, View, Text, StyleSheet, Switch, Image, TextInput } from 'react-native';
import { Header } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Pages } from 'react-native-pages';

import STYLES from '../../styles';

interface OnboardingScreenProps {
    navigation: DrawerNavigationProp<any, any>
};

const OnboardingScreen: FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <Pages>
                <View style={{ flex: 1, backgroundColor: 'red'}}>

                </View>
                <View style={{ flex: 1, backgroundColor: 'purple'}}>

                </View>
                <View style={{ flex: 1, backgroundColor: 'green'}}>

                </View>
            </Pages>
        </SafeAreaView>
    );
}

export default OnboardingScreen;

const S = StyleSheet.create({
});