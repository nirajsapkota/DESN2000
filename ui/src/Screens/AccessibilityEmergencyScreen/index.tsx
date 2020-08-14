import React, { FC, useState } from "react";

import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from "react-native";

import {
  Neumorphic,
  Header
} from "_common_components";

import {
  COLORS,
  STYLES
} from "_constants";

import Dialog from "react-native-dialog";

import BoardingIcon from "_icons/boarding.svg";
import AlightingIcon from "_icons/alighting.svg";
import AmbulanceIcon from "_icons/ambulance.svg";
import PoliceIcon from "_icons/police.svg";
import MoreIcon from "_icons/more.svg";

interface NeumorphicAlertProps {
  children: any,
  width?: number,
  height?: number,
  radius?: number,
  color?: string
}

interface NeumorphicImageButtonProps {
  src: string,
  size?: number,
  radius?: number,
  color?: string,
  requestHandler: Function,
  message: string,
  title: string
}

interface AccessiblityEmergencyScreenProps {
  navigation: any
};

const NeumorphicAlert: FC<NeumorphicAlertProps> = 
  ({children, width, height, radius, color}) => {

  return (
    <Neumorphic
      width={width || 335}
      height={height || 60}
      radius={radius || 10}
      background={color || COLORS.ACCENT}>
      <Text style={[S.warningText, {padding: 15}]}>{children}</Text>
    </Neumorphic>
  );

}

interface RenderIconProps {
  icon: string
}

const RenderIcon: FC<RenderIconProps> =
  ({ icon }) => {

  if (icon === "boarding") return <BoardingIcon width={32} height={32} />
  else if (icon === "alighting") return <AlightingIcon width={32} height={32} />
  else if (icon === "ambulance") return <AmbulanceIcon width={32} height={32} />
  else if (icon === "police") return <PoliceIcon width={32} height={32} />
  else if (icon === "other") return <MoreIcon width={32} height={32} />
  
  return null;

}

const NeumorphicImageButton: FC<NeumorphicImageButtonProps> =
  ({src, size, radius, color, requestHandler, message, title}) => {

  return (
    <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
      <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => {requestHandler(message)}}>
  
        <Neumorphic
          width={size || 64}
          height={size || 64}
          radius={radius || 10}
          background={color || COLORS.PRIMARY}
          centered>

          <RenderIcon icon={src} />
        </Neumorphic>
      
      </TouchableOpacity>
      <Text style={S.subtitle}>{title}</Text>
    </View>
  );
}

const AccessiblityEmergencyScreen: FC<AccessiblityEmergencyScreenProps> = ({
  navigation }) => {

  const [helpRequested, setHelpRequested] = useState(false);
  const [helpMessage, setHelpMessage] = useState("");
  const [visible, setVisible] = useState(false);
  

  function HandleRequest(message: string): void {
    setHelpRequested(false);
    setHelpMessage(message);
    setVisible(true);
  }

  function confirmHelp(): void {
    setHelpRequested(true);
    setVisible(false);
    // setHelpMessage("You"ve requested " + helpMessage + ", help is on the way!");
  }

  function doneHelp(): void {
    setHelpRequested(false);
    setVisible(false);
  }

  function quitDialog(): void {
    setVisible(false);
  }

  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={STYLES.container}>
        
        <Text style={STYLES.title}> Accessibility and emergency </Text>

        <View style={{alignItems: "center", marginTop: 10}}>
          <NeumorphicAlert color={COLORS.LIGHT_RED}>
            Note: improper use can result in a fine upwards of $250.
          </NeumorphicAlert>
        </View>
        
        
        <View>

          <NeumorphicImageButton
            src={"boarding"}
            requestHandler={HandleRequest}
            message={"boarding assistance"}
            title={"Boarding assistance"}
          />
          
          <NeumorphicImageButton
            src={"alighting"}
            requestHandler={HandleRequest}
            message={"alighting assistance"}
            title={"Alighting assistance"}
          />
          
          <NeumorphicImageButton
            src={"ambulance"}
            requestHandler={HandleRequest}
            message={"emergency assistance"}
            title={"Injury or emergency"}
          />
          
          <NeumorphicImageButton
            src={"police"}
            requestHandler={HandleRequest}
            message={"duress assistance"}
            title={"Duress"}
          />
        
          <NeumorphicImageButton
            src={"other"}
            requestHandler={HandleRequest}
            message={"assistance"}
            title={"Other"}
          />


          <View>
            <Dialog.Container visible={visible}>
              <Dialog.Title>Confirm Assistance</Dialog.Title>
              <Dialog.Description>
                Are you sure?
              </Dialog.Description>
              <Dialog.Button label="No" onPress={quitDialog}/>
              <Dialog.Button label="Yes" onPress={confirmHelp}/>
            </Dialog.Container>
          </View>


          { 
            helpRequested ? 
              <View style={{justifyContent: "center", alignItems: "center", marginTop: 40}}>
                <Text style={S.helpText}>
                  You"ve requested
                  <Text style={S.coloredHelpText}>
                    {" " + helpMessage}
                  </Text>
                  , help is on the way! </Text>
              </View>
            :
              null
          }


        </View>

{/* 
      <Snackbar 
        visible={helpRequested}
        textMessage={helpMessage}
        actionHandler={() => {
          {doneHelp};
          setHelpRequested(false);
        }}
        actionText="x"
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccessiblityEmergencyScreen;

const S = StyleSheet.create({
  warningText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "white",
    width: 280
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "#797C8D"
  },
  helpText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black",
  },
  coloredHelpText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.ACCENT,
  },
});