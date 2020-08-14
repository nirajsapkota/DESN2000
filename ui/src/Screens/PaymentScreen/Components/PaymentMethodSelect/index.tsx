import React, { FC, useState, useEffect } from "react";

import {
  TouchableOpacity,
  StyleSheet,
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

import Swipeable from "react-native-gesture-handler/Swipeable";

import MastercardIcon from "_icons/mastercard.svg";
import VisaIcon from "_icons/visa.svg";
import RadioOnIcon from "_icons/radio-on.svg";
import RadioOffIcon from "_icons/radio-off.svg";
import DeleteIcon from "_icons/delete.svg";

const PaymentMethodSelect: FC = () => {
  
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    GetData("@payment_methods")
    .then((res: any) => {
      setCards(res);
    })
  })

  const DeletePaymentMethod = (id: number) => {
    const NewPaymentMethods = cards.filter((card: any) => card.id != id);
    console.log(NewPaymentMethods);
    StoreData("@payment_methods", NewPaymentMethods);
    setCards(NewPaymentMethods);
  }

  const renderRightActions = (id: number) => {
    return (
      <View style={S.rightActionsContainer}>
        <TouchableOpacity onPress={() => DeletePaymentMethod(id)}>
          <DeleteIcon width="32" height="32" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20, alignItems: "center" }}>

      {cards.map((card: any) =>
        <TouchableOpacity
          key={card.id}
          onPress={() => setSelected(card.id)}>

          <Swipeable
            leftThreshold={50}
            overshootRight={false}
            renderRightActions={() => renderRightActions(card.id)}
            containerStyle={S.swipeableContainer}>

          <Neumorphic
            width={335}
            height={65}
            background={COLORS.PRIMARY}
            radius={10}>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ alignItems: "center", width: 64 }}>
                {card.type === "mastercard" ? <MastercardIcon /> : <VisaIcon />}
              </View>

              <View style={{ width: 215 }}>
                {card.type === "mastercard" ?
                  <Text style={[STYLES.subtitle, { color: "black" }]}> Mastercard **** {card.cardNumber} </Text> :
                  <Text style={[STYLES.subtitle, { color: "black" }]}> Visa **** {card.cardNumber} </Text>}
              </View>

              <View style={{ alignItems: "center", width: 56 }}>
                {selected === card.id ? <RadioOnIcon /> : <RadioOffIcon />}
              </View>
            </View>

          </Neumorphic>
          </Swipeable>
        </TouchableOpacity>
      )}

    </View>
  );
};

export default PaymentMethodSelect;

const S = StyleSheet.create({
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
  }
});