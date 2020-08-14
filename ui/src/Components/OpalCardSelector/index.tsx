import React, { FC, useState, useEffect } from "react";

import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  View,
  Text
} from "react-native";

import {
  Neumorphic
} from "_common_components";

import {
  StoreData,
  GetData
} from "_utils";

import {
  COLORS,
  STYLES
} from "_constants";

import {
  CardImage
} from "./Components";

import ChevronDownIcon from "_icons/chevron-down.svg";
import CogIcon from "_icons/cog.svg";
import RadioOnIcon from "_icons/radio-on.svg";
import RadioOffIcon from "_icons/radio-off.svg";
import DeleteIcon from "_icons/delete.svg";

import Swipeable from "react-native-gesture-handler/Swipeable";

interface OpalCardSelectorProps {
  navigation: any
}

const OpalCardSelector: FC<OpalCardSelectorProps> = ({ navigation }) => {

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [modalVisisble, setModalVisisble] = useState(false);

  const DeleteTransportCard = (id: number) => {
    const NewCards = cards.filter((card: any) => card.id != id);
    StoreData("@transport_cards", NewCards);
    setCards(NewCards);
  }

  const renderRightActions = (id: number) => {
    return (
      <View style={S.rightActionsContainer}>
        <TouchableOpacity onPress={() => DeleteTransportCard(id)}>
          <DeleteIcon width="32" height="32" />
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    GetData("@transport_cards")
      .then((res: any) => {
        if (res !== null && res.length > 0) {
          setCards(res);
          setSelectedCard(res[0]);
        }
      });
  }, [])

  return (
    <View style={{ marginTop: 15, alignItems: "center" }}>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisisble}>

        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
            <View style={{ backgroundColor: COLORS.PRIMARY, width: "100%", height: 350, borderRadius: 30 }}>

              <View style={[STYLES.container, { flex: 1 }]}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20 }}>
                  <Text style={[STYLES.subtitle, { color: "black" }]}>
                    Please select the card you would like to top up...
                  </Text>

                  <TouchableOpacity onPress={() => {
                    setModalVisisble(false);
                    navigation.navigate("Manage Transport Card")
                  }}>
                    <CogIcon width="32" height="32" />
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center", flex: 1 }}>
                  <ScrollView contentContainerStyle={{flexGrow: 1}}>
                  {cards.map((card: any) =>
                    <TouchableOpacity
                      key={card.id}
                      onPress={() => setSelectedCard(card)}
                      style={{ marginBottom: 15 }}>

                      <Swipeable
                        leftThreshold={50}
                        overshootRight={false}
                        renderRightActions={() => renderRightActions(card.id)}
                        containerStyle={S.swipeableContainer}>

                        <Neumorphic
                          width={335}
                          height={65}
                          radius={10}
                          background={COLORS.PRIMARY}>

                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <View style={{ alignItems: "center" }}>
                              <CardImage type={card.type} />
                            </View>

                            <View style={{ justifyContent: "center", width: 150 }}>
                              <Text style={[S.title, { marginBottom: 1 }]}> {card.owner} </Text>
                              <Text style={[S.subtitle, { marginTop: 1 }]}> {card.type} </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                              <Text style={[S.title, { right: 5 }]}> ${card.balance} </Text>
                              {selectedCard.id === card.id ? <RadioOnIcon /> : <RadioOffIcon />}
                            </View>
                          </View>
                        </Neumorphic>
                      </Swipeable>
                    </TouchableOpacity>
                  )}
                  </ScrollView>

                  <TouchableOpacity
                    onPress={() => setModalVisisble(false)}
                    style={{ marginTop: 10 }}>
                    <Neumorphic
                      width={280}
                      height={50}
                      radius={500}
                      background={COLORS.ACCENT}
                      centered>
                      <Text style={[STYLES.subtitle, { color: "white" }]}> Done </Text>
                    </Neumorphic>
                  </TouchableOpacity>
                </View>

              </View>

            </View>
          </View>
        </View>

      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisisble(true)}>

        <Neumorphic
          width={335}
          height={65}
          background={COLORS.PRIMARY}
          radius={10}>

          <View style={{ flexDirection: "row" }}>
            <View style={{ alignItems: "center", width: 100 }}>
              <CardImage type={selectedCard.type} />
            </View>
            <View style={{ justifyContent: "center", width: 170 }}>
              <Text style={[S.title, { marginBottom: 1 }]}> {selectedCard.owner} </Text>
              <Text style={[S.subtitle, { marginTop: 1 }]}> {selectedCard.type} </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: 45 }}>
              <Text style={S.title}> ${selectedCard.balance} </Text>
              <ChevronDownIcon />
            </View>
          </View>

        </Neumorphic>
      </TouchableOpacity>

    </View>
  );
}

export default OpalCardSelector;

const S = StyleSheet.create({
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black"
  },
  imageCog: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.GRAY
  },
  rightActionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY
  },
  swipeableContainer: {
    height: 85,
    justifyContent: "center",
    width: 370,
    alignItems: "center"
  },
  tripsContainer: {
    alignItems: "center",
    marginTop: 5,
    backgroundColor: COLORS.PRIMARY,
    flex: 1
  }
});