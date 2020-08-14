import React, { FC, useState } from "react";

import {
  TouchableOpacity,
  View,
  Text
} from "react-native";

import {
  Neumorphic
} from "_common_components";

import {
  COLORS,
  STYLES
} from "_constants";

import MastercardIcon from "_icons/mastercard.svg";
import VisaIcon from "_icons/visa.svg";
import RadioOnIcon from "_icons/radio-on.svg";
import RadioOffIcon from "_icons/radio-off.svg";

const cards = [
  { id: 0, type: "mastercard", cardNumber: "0172" },
  { id: 1, type: "visa", cardNumber: "6942" }
];

const PaymentMethodSelect: FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ marginTop: 20, alignItems: "center" }}>

      {cards.map(card =>
        <TouchableOpacity key={card.id} onPress={() => setSelected(card.id)}>
          <Neumorphic width={335} height={65} background={COLORS.PRIMARY} radius={10} style={{ marginBottom: 20 }}>

            <View style={{ flexDirection: "row", alignItems: "center" }}>

              <View style={{ alignItems: "center", width: 64 }}>
                {card.type === "mastercard" ?
                  <MastercardIcon />
                  :
                  <VisaIcon />
                }
              </View>

              <View style={{ width: 215 }}>
                {card.type === "mastercard" ?
                  <Text style={[STYLES.subtitle, { color: "black" }]}> Mastercard **** {card.cardNumber} </Text>
                  :
                  <Text style={[STYLES.subtitle, { color: "black" }]}> Visa **** {card.cardNumber} </Text>
                }
              </View>

              <View style={{ alignItems: "center", width: 56 }}>
                {selected === card.id ?
                  <RadioOnIcon />
                  :
                  <RadioOffIcon />
                }
              </View>

            </View>
          </Neumorphic>
        </TouchableOpacity>
      )}

    </View>
  );
};

export default PaymentMethodSelect;