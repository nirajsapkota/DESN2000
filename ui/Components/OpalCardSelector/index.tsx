import React, { FC, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { CardImage } from './Components';
import Neumorphic from '../Neumorphic';
import * as COLORS from '../../Constants/colors';
import STYLES from '../../styles';

interface OpalCardSelectorProps {
  getActiveCardBalance?: Function,
  getActiveCardNickname?: Function
}

const OpalCardSelector: FC<OpalCardSelectorProps> 
  = ({ getActiveCardBalance, getActiveCardNickname }) => {

  const cards = [
    { id: 0, owner: "Jane Citizen", type: "adult", balance: 5.32, autoTopup: false, blocked: false },
    { id: 1, owner: "John Citizen", type: "concession", balance: 25.47, autoTopup: false, blocked: false }
  ];
  
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [modalVisisble, setModalVisisble] = useState(false);

  if (getActiveCardBalance) {
    getActiveCardBalance(selectedCard.balance)
  }
  if (getActiveCardNickname) {
    getActiveCardNickname(selectedCard.owner)
  }

  return (
    <View style={{marginTop: 15, alignItems: 'center'}}>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisisble}>

        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <View style={{backgroundColor: COLORS.PRIMARY, width: "100%", height: 350, borderRadius: 30}}>

              <View style={[STYLES.container, {flex: 1}]}>

                <Text style={[STYLES.subtitle, {color: 'black', marginVertical: 25, marginLeft: 25}]}>
                  Please select the card you would like to top up...
                </Text>

                <View style={{alignItems: 'center'}}>
                  {cards.map(card =>
                    <TouchableOpacity
                      key={card.id}
                      onPress={() => setSelectedCard(card)}
                      style={{marginBottom: 15}}>
                      <Neumorphic
                        width={335}
                        height={65}
                        radius={10}
                        background={COLORS.PRIMARY}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                          <View style={{alignItems: 'center'}}>
                            <CardImage type={card.type} />   
                          </View>
                          <View style={{justifyContent: 'center', width: 150}}>
                            <Text style={[S.title, {marginBottom: 1}]}> {card.owner} </Text>
                            <Text style={[S.subtitle, {marginTop: 1}]}> {card.type} </Text>
                          </View>
                          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={[S.title, {right: 5}]}> ${card.balance} </Text>
                            { selectedCard.id === card.id ? <Image source={require('./radio-on.png')} />
                              :
                              <Image source={require('./radio-off.png')} />
                            }
                          </View>
                        </View>
                      </Neumorphic>
                    </TouchableOpacity>
                  )}
                  
                  <TouchableOpacity
                    onPress={() => setModalVisisble(false)}
                    style={{marginTop: 10}}>
                    <Neumorphic
                      width={280}
                      height={50}
                      radius={500}
                      background={COLORS.ACCENT}
                      centered>
                        <Text style={[STYLES.subtitle, {color: 'white'}]}> Done </Text>
                    </Neumorphic>
                  </TouchableOpacity>
                </View>
             
             </View>

            </View>    
          </View>
        </View>

      </Modal>

      <TouchableOpacity onPress={() => setModalVisisble(true)}>
        <Neumorphic width={335} height={65} background={COLORS.PRIMARY} radius={10}>

          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', width: 100}}>
              <CardImage type={selectedCard.type} />   
            </View>
            <View style={{justifyContent: 'center', width: 170}}>
              <Text style={[S.title, {marginBottom: 1}]}> {selectedCard.owner} </Text>
              <Text style={[S.subtitle, {marginTop: 1}]}> {selectedCard.type} </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 45}}>
              <Text style={S.title}> ${selectedCard.balance} </Text>
              <Image source={require('./chevron-down.png')} />
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
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: 'black'
  },
  imageCog: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  subtitle: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    color: COLORS.GRAY
  }
});