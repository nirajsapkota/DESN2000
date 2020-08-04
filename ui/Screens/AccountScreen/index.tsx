import React, { FC, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch, Image, TextInput } from 'react-native';
import { Header } from '../../Components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import STYLES from '../../styles';

interface AccountScreenProps {
  navigation: DrawerNavigationProp<any, any>
};

const AccountScreen: FC<AccountScreenProps> = ({ navigation }) => {
  const [name, setName] = useState("Roger Hoffman");
  const [location, setLocation] = useState("Sydney, NSW");
  const [dob, setDob] = useState("21st of June 1973");
  const [syncCards, setSyncCards] = useState(false);
  const [syncTrips, setSyncTrips] = useState(false);

  const setValidatedName = (text: string) => {
    if (!(text.length <= 0))
      setName(text);
  }

  const setValidatedLocation = (text: string) => {
    if (!(text.length <= 0))
      setLocation(text);
  }

  const setValidatedDob = (text: string) => {
    if (!(text.length <= 0))
      setDob(text);
  }

  return (
    <SafeAreaView>

      <Header navigation={navigation} />

      <View style={STYLES.container}>
        <Text style={STYLES.title}> My account </Text>
      </View>

      <View style={S.profileContainer}>
        <Image style={S.profileImage} source={require('../../assets/hidethepainharold.jpg')} />
        <Text style={S.profileSubtitle}>{name}</Text>
        <Text style={S.profileSubsubtitle}>{location}</Text>
      </View>

      <Text style={S.subtitle}> Personal Details </Text>
      <View style={S.row}>
        <Text style={S.subsubtitle}> Name </Text>
        <View style={S.textEditContainer}>
          <TextInput
            style={S.textEditArea}
            onSubmitEditing={(e) => setValidatedName(e.nativeEvent.text)}
            value={name}
            placeholder={"John Smith"}
            returnKeyType="done"
          />
          <MaterialCommunityIcons style={S.textEditImage} name="pencil-outline" size={20} />
        </View>
      </View>

      <View style={S.row}>
        <Text style={S.subsubtitle}> Location </Text>
        <View style={S.textEditContainer}>
          <TextInput
            style={S.textEditArea}
            onSubmitEditing={(e) => setValidatedLocation(e.nativeEvent.text)}
            value={location}
            placeholder={"John Smith"}
            returnKeyType="done"
          />
          <MaterialCommunityIcons style={S.textEditImage} name="pencil-outline" size={20} />
        </View>
      </View>

      <View style={S.row}>
        <Text style={S.subsubtitle}> Date of Birth </Text>
        <View style={S.textEditContainer}>
          <TextInput
            style={S.textEditArea}
            onSubmitEditing={(e) => setValidatedDob(e.nativeEvent.text)}
            value={dob}
            placeholder={"John Smith"}
            returnKeyType="done"
          />
          <MaterialCommunityIcons style={S.textEditImage} name="pencil-outline" size={20} />
        </View>
      </View>

      <Text style={S.subtitle}> Cloud </Text>
      <View style={S.row}>
        <Text style={S.subsubtitle}> Sync Cards </Text>
        <Switch
          value={syncCards}
          onValueChange={() => setSyncCards(!syncCards)}
        />
      </View>
      <View style={S.row}>
        <Text style={S.subsubtitle}> Sync Trips </Text>
        <Switch
          value={syncTrips}
          onValueChange={() => setSyncTrips(!syncTrips)}
        />
      </View>

    </SafeAreaView>
  );
}

export default AccountScreen;

const S = StyleSheet.create({
  title: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 30,
    color: '#456078',
    marginBottom: 15
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 17,
    marginTop: 20
  },
  subsubtitle: {
    flex: 3,
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  profileContainer: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2
  },
  profileSubtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 7,
    marginTop: 20
  },
  profileSubsubtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 12,
    color: '#797C8D',
    marginBottom: 5,
  },
  textEditArea: {
    flex: 2,
    borderColor: '#797C8D',
    borderBottomWidth: 1,
    paddingLeft: 5,
    marginRight: 10,
    textAlign: 'left',
  },
  textEditImage: {
    color: '#4070F4',
    marginRight: 10,
  },
  textEditContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  }
});