import React, { FC } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Header } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import STYLES from '../../styles';

interface SettingsSecurityScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const SettingsSecurityScreen: FC<SettingsSecurityScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      
      <Header navigation={navigation} />

      <View style={STYLES.container}>
        <Text style={STYLES.title}> Settings and security </Text>
      </View>

    </SafeAreaView>
  );
}

export default SettingsSecurityScreen;