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
  PaymentMethodSelect,
  TopUpAmountSelect,
  AddPaymentMethod,
  PaymentSuccess,
  PaymentError
} from "./Components";

import {
  OpalCardSelector,
  Neumorphic,
  Header
} from "_common_components";

import {
  Ionicons
} from "@expo/vector-icons";

import {
  COLORS,
  STYLES
} from "_constants";

interface PaymentScreenProps {
  navigation: any
};

const PaymentScreen: FC<PaymentScreenProps> = ({ navigation }) => {

  const [successModalVisibility, setSuccessModalVisibility] = useState(false);
  const [errorModalVisibility, setErrorModalVisibility] = useState(false);
  const [addPaymentMethodModalVisibility, setAddPaymentMethodModalVisibility] = useState(false);

  const [currCardBalance, setCurrCardBalance] = useState(0);
  const [currCardNickname, setCurrCardNickname] = useState("");
  const [topUpAmount, setTopUpAmount] = useState(5);

  function HandleShowReceipt(): void {
    const rand = Math.random();
    if (rand > 0.5) {
      setSuccessModalVisibility(true);
      setCurrCardBalance(currCardBalance + topUpAmount);
    } else {
      setErrorModalVisibility(true);
    }
  }

  return (
    <SafeAreaView>

      <PaymentSuccess
        visibility={successModalVisibility}
        setVisibility={setSuccessModalVisibility}
        amountToppedUp={topUpAmount}
        cardNickname={currCardNickname}
      />

      <PaymentError
        visibility={errorModalVisibility}
        setVisibility={setErrorModalVisibility}
      />

      <AddPaymentMethod
        visibility={addPaymentMethodModalVisibility}
        setVisibility={setAddPaymentMethodModalVisibility}
      />

      <Header
        navigation={navigation} />

      <ScrollView contentContainerStyle={STYLES.container}>

        <Text style={[STYLES.title]}> Top up </Text>

        <Text style={[STYLES.subtitle, { marginTop: 15 }]}>
          Select card to top up
        </Text>
        <OpalCardSelector
          getActiveCardBalance={setCurrCardBalance}
          getActiveCardNickname={setCurrCardNickname}
          navigation={navigation} />

        <Text style={[STYLES.subtitle, { marginTop: 15 }]}>
          Top up amount
        </Text>
        <TopUpAmountSelect
          topUpAmount={topUpAmount}
          setTopUpAmount={setTopUpAmount} />

        <View style={[STYLES.row, STYLES.spaceBetween, { width: 360 }]}>
          <Text style={[STYLES.subtitle, { color: "black" }]}>
            Balance after top up
          </Text>
          <Text style={[STYLES.subtitle, { color: "black" }]}>
            ${currCardBalance + topUpAmount}
          </Text>
        </View>

        <View style={[STYLES.row, STYLES.spaceBetween, { width: 360, alignItems: "center", marginTop: 15 }]}>
          <Text style={[STYLES.subtitle]}>
            Payment method
          </Text>

          <TouchableOpacity
            onPress={() => setAddPaymentMethodModalVisibility(true)}>
            <Neumorphic
              width={32}
              height={32}
              radius={16}
              background={COLORS.ACCENT}
              centered>
              <Ionicons name="ios-add" size={24} color="white" />
            </Neumorphic>
          </TouchableOpacity>
        </View>
        <PaymentMethodSelect />

        <View style={{ marginBottom: 100, alignItems: "center" }}>
          <TouchableOpacity onPress={() => HandleShowReceipt()}>
            <Neumorphic
              width={280}
              height={60}
              radius={500}
              background={COLORS.ACCENT}
              centered>

              <Text style={[STYLES.subtitle, { color: "white" }]}>
                Pay with Card **** 0172
              </Text>

            </Neumorphic>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

export default PaymentScreen;

const S = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  paymentLogo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    textAlign: "center",
    overflow: "visible"
  }
});