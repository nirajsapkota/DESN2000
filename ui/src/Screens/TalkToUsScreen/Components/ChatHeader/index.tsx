import React, { FC } from "react";

import {
  StyleSheet,
  View,
  Text
} from "react-native";

import {
  Neumorphic
} from "_common_components";

import { 
  COLORS
} from "_constants";

import HelpIcon from "_icons/help.svg";
import IdeaIcon from "_icons/idea.svg";
import BugIcon from "_icons/bug.svg";

interface ChatHeaderProps {
  icon: string
}

interface RenderViewProps {
  icon: string
}

const RenderView: FC<RenderViewProps> = ({ icon }) => {
  if (icon === "help") {
    return (
      <View style={S.align}>
        <HelpIcon width={32} height={32} />
        <Text style={S.title}>Help</Text>
      </View>
    );
  } else if (icon === "idea") {
    return (
      <View style={S.align}>
        <IdeaIcon width={32} height={32} />
        <Text style={S.title}>Idea & Feedback</Text>
      </View>
    );
  } else if (icon === "bug") {
    return (
      <View style={S.align}>
        <BugIcon width={32} height={32} />
        <Text style={S.title}>Bug Report</Text>
      </View>
    );
  }

  return null;
}

const ChatHeader: FC<ChatHeaderProps> = ({ icon }) => {
  return (
    <Neumorphic
      width={415}
      height={80}
      radiusBottom={5}
      background={COLORS.ACCENT}
      >

      <RenderView icon={icon} />

    </Neumorphic>
  );
}

export default ChatHeader;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 16,
    color: "white"
  },
  align: {
    flex: 0.75,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});