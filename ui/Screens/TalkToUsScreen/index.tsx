import React, { FC } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Header } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import STYLES from '../../styles';

interface TalkToUsScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const TalkToUsScreen: FC<TalkToUsScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView >
      
      <Header navigation={navigation} />
    
      <View style={STYLES.container}>
        <Text style={STYLES.title}> Talk to us </Text>
      </View>
    
    </SafeAreaView>
  );
}

export default TalkToUsScreen;