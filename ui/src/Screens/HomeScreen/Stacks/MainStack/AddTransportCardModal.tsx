import React, { FC, useState } from "react";

import {
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
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
  COLORS
} from "_constants";

import OpalAdultIcon from "_images/opal-adult.svg";
import OpalConcessionIcon from "_images/opal-concession.svg";
import CloseIcon from "_icons/close.svg";
import Dialog from "react-native-dialog";

interface AddTransportCardModalProps {
  visibility: boolean,
  setVisibility: Function
};

const AddTransportCardModal: FC<AddTransportCardModalProps> =
  ({ visibility, setVisibility }) => {

    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberError, setCardNumberError] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [securityCodeError, setSecurityCodeError] = useState("");
    const [nickname, setNickname] = useState("");
    const [nicknameError, setNicknameError] = useState("");
    const [errorDialog, setErrorDialog] = useState(false);

    const CheckCardNumberError = () => {
      const regex = RegExp(/^\d{16}$/);
      const match = regex.test(cardNumber);
      if (!match) setCardNumberError("Invalid card number.");
      else setCardNumberError("");
    }

    const CheckSecurityCodeError = () => {
      const regex = RegExp(/^\d{3}$/);
      const match = regex.test(securityCode);
      if (!match) setSecurityCodeError("Invalid security code.");
      else setSecurityCodeError("");
    }

    const CheckNicknameError = () => {
      const regex = RegExp(/^[a-zA-Z]+( [a-zA-Z]+)?$/);
      const match = regex.test(nickname);
      if (!match) setNicknameError("Invalid nickname.");
      else setNicknameError("");
    }

    const HandleAddCard = () => {

      if (cardNumberError != "" || securityCodeError != "" || nicknameError != "") {
        setErrorDialog(true);
        return;
      }

      GetData("@transport_cards")
        .then((res: any) => {
          var cards = [...res];
          cards.push({ id: cards.length, owner: nickname, type: "adult", balance: 10.00, autoTopup: false, blocked: false });
          StoreData("@transport_cards", cards);
        });

      setCardNumber("");
      setSecurityCode("");
      setNickname("");
      setVisibility(false);
    }

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visibility}>


        <View style={[S.darkOverlay, { flex: 1 }]}>
          <View style={[S.positioningContainer, { flexGrow: 1 }]}>

            <KeyboardAvoidingView
              behavior="padding">
              <View style={S.bottomModal}>

                <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                  <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", width: 110 }}>
                      <OpalAdultIcon style={{ marginRight: 15 }} />
                      <OpalConcessionIcon style={{ marginRight: 60 }} />
                      <TouchableOpacity
                        onPress={() => setVisibility(false)}>
                        <CloseIcon />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ marginTop: 25 }}>
                    <Text style={S.title}> Card Number </Text>
                    <TextInput
                      style={[S.textbox, S.subtitle]}
                      value={cardNumber}
                      onChangeText={text => setCardNumber(text)}
                      keyboardType="number-pad"
                      placeholder="e.g. 5592 2047 5714 6304"
                      maxLength={16}
                      onBlur={CheckCardNumberError}
                    />
                    {cardNumberError != "" ? <Text style={{color: "red"}}>{cardNumberError}</Text> : null}
                  </View>

                  <View style={{ marginTop: 15 }}>
                    <Text style={S.title}> Security Code </Text>
                    <TextInput
                      style={[S.textbox, S.subtitle]}
                      value={securityCode}
                      onChangeText={text => setSecurityCode(text)}
                      keyboardType="number-pad"
                      placeholder="e.g. 413"
                      maxLength={3}
                      onBlur={CheckSecurityCodeError}
                    />
                    {securityCodeError != "" ? <Text style={{ color: "red" }}>{securityCodeError}</Text> : null}
                  </View>

                  <View style={{ marginTop: 15 }}>
                    <Text style={S.title}> Nickname </Text>
                    <TextInput
                      style={[S.textbox, S.subtitle]}
                      value={nickname}
                      onChangeText={text => setNickname(text)}
                      placeholder="e.g. Jane Citizen"
                      maxLength={25}
                      onBlur={CheckNicknameError}
                    />
                    {nicknameError != "" ? <Text style={{ color: "red" }}>{nicknameError}</Text> : null}
                  </View>

                  <TouchableOpacity
                    onPress={() => HandleAddCard()}
                    style={{ marginTop: 25 }}>
                    <Neumorphic
                      width={280}
                      height={50}
                      radius={500}
                      background={COLORS.ACCENT}
                      centered>
                      <Text style={S.btnText}> Save </Text>
                    </Neumorphic>
                  </TouchableOpacity>
                </ScrollView>

                <View>
                  <Dialog.Container visible={errorDialog}>
                    <Dialog.Title>Ensure Correct Input</Dialog.Title>
                    <Dialog.Description>Please check your input.</Dialog.Description>
                    <Dialog.Button label="okay" onPress={() => setErrorDialog(false)} />
                  </Dialog.Container>
                </View>

              </View>
            </KeyboardAvoidingView>
          </View>
        </View>

      </Modal>
    );
  }

export default AddTransportCardModal;

const S = StyleSheet.create({
  darkOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  positioningContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomModal: {
    backgroundColor: COLORS.PRIMARY,
    width: 413,
    height: 430,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 16,
    color: "black"
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)"
  },
  btnText: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 12,
    color: "white"
  },
  textbox: {
    width: 370,
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 10,
    paddingLeft: 10
  },
});