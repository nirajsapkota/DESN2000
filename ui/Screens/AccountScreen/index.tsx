import React, { FC } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Header } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import STYLES from '../../styles';

interface AccountScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const AccountScreen: FC<AccountScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>

      <Header navigation={navigation} />

      <View style={STYLES.container}>
        <Text style={STYLES.title}> My account </Text>
      </View>

    </SafeAreaView>
  );
}

export default AccountScreen;