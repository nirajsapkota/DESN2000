import React, { FC } from "react";

import { 
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

import { 
  Ionicons 
} from "@expo/vector-icons"; 

import {
  Neumorphic
} from "_common_components";

import {
  COLORS
} from "_constants";

import Logo from "_icons/logo.svg";

interface HeaderProps {
  navigation: any;
};

const Header: FC<HeaderProps> =
  ({ navigation }) => {
  
  return (
    <View style={S.container}>

      <View style={S.button}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}>

          <Neumorphic
            width={60}
            height={60}
            radius={15}
            background={COLORS.PRIMARY}
            centered
            >
            
            <Ionicons
              name="md-menu"
              size={32}
              color={COLORS.GRAY} />
          
          </Neumorphic>
        
        </TouchableOpacity>
      </View>

      <View>
        <Logo width={220} height={60} />
      </View>

    </View>
  );
};

export default Header;

const S = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginRight: 15
  }
});