import React, { FC } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "_router";
import { StoreData } from "_utils";
import { PinnedTripData, UnpinnedTripData, TransportCards, PaymentMethods } from "_constants";

console.disableYellowBox = true;

const App: FC = () => {

  StoreData("@pinned_trips", PinnedTripData);
  StoreData("@unpinned_trips", UnpinnedTripData);
  StoreData("@transport_cards", TransportCards);
  StoreData("@payment_methods", PaymentMethods);
  
  return (  
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <DrawerNavigator initialRouteName="Onboarding" />
    </NavigationContainer>
  );
  
}

export default App;