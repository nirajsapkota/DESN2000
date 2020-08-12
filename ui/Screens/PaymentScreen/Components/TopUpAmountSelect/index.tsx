import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';

interface TopUpAmountSelectProps {
  topUpAmount: number,
  setTopUpAmount: Function
}

const TopUpAmountSelect: FC<TopUpAmountSelectProps> =
  ({ topUpAmount, setTopUpAmount }) => {
  
  return (
    <View style={{marginTop: 15, marginBottom: 15}}>

      <View style={[S.row, S.center]}>
        <Button 
          containerStyle={ topUpAmount === 5 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(5)}>
          <Text style={ topUpAmount === 5 ? S.activeText : S.inactiveText } > $5 </Text>
        </Button>
        <Button
          containerStyle={ topUpAmount === 10 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(10)}>
          <Text style={ topUpAmount === 10 ? S.activeText : S.inactiveText } > $10 </Text>
        </Button>
        <Button 
          containerStyle={ topUpAmount === 15 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(15)}>
          <Text style={ topUpAmount === 15 ? S.activeText : S.inactiveText } > $15 </Text>
        </Button>
        <Button
          containerStyle={ topUpAmount === 20 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(20)}>
          <Text style={ topUpAmount === 20 ? S.activeText : S.inactiveText } > $20 </Text>
        </Button>
      </View>

      <View style={[S.row, S.center]}>
        <Button
          containerStyle={ topUpAmount === 25 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(25)}>
          <Text style={ topUpAmount === 25 ? S.activeText : S.inactiveText } > $25 </Text>
        </Button>
        <Button
          containerStyle={ topUpAmount === 50 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(50)}>
          <Text style={ topUpAmount === 50 ? S.activeText : S.inactiveText } > $50 </Text>
        </Button>
        <Button
          containerStyle={ topUpAmount === 75 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(75)}>
          <Text style={ topUpAmount === 75 ? S.activeText : S.inactiveText } > $75 </Text>
        </Button>
        <Button
          containerStyle={ topUpAmount === 100 ? S.activeContainer : S.inactiveContainer }
          onPress={() => setTopUpAmount(100)}>
          <Text style={ topUpAmount === 100 ? S.activeText : S.inactiveText } > $100 </Text>
        </Button>
      </View>

    </View>
  );
};

export default TopUpAmountSelect;

const S = StyleSheet.create({
  activeContainer: {
    width: 64,
    height: 64,

    marginHorizontal: 10,
    marginVertical: 5,
    
    overflow: 'hidden',
    backgroundColor: '#4070F4',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },
  inactiveContainer: {
    width: 64,
    height: 64,

    marginHorizontal: 10,
    marginVertical: 5,
    
    overflow: 'hidden',
    backgroundColor: '#E9EAED',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },
  activeText: {
    fontFamily: 'Arial Rounded MT Bold',
    color: 'white',
    fontSize: 14
  },
  inactiveText: {
    fontFamily: 'Arial Rounded MT Bold',
    color: 'black',
    fontSize: 14
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center'
  }
});