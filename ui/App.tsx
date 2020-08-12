import React, { FC, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Router';
import { OnboardingScreen } from './Screens';
import AsyncStorage from "@react-native-community/async-storage";

console.disableYellowBox = true;

const pinnedTripData = [
  { id: 0, method: "LR", disabilityRating: "GOOD", origin: "Dulwich Hull", destination: "Central" },
  { id: 1, method: "LR", disabilityRating: "GOOD", origin: "Wentworth Park", destination: "Moore Park" },
  { id: 2, method: "LR", disabilityRating: "POOR", origin: "UNSW Anzac Parade", destination: "Haymarket"}
];

const unpinnedTripData = [
  { id: 3, method: "LR", disabilityRating: "OK", origin: "Wynyard", destination: "Marion"},
  { id: 4, method: "LR", disabilityRating: "GOOD", origin: "Rozelle Bay", destination: "Exhibition Centre"}
];

const StoreData = async (key: string, value: Array<any>) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log(err);
  }
}

const App: FC = () => {
  const [hasLaunched, setHasLaunched] = useState(true);

  // When app starts, check if this is the first time the app started.
  useEffect(() => {
    AsyncStorage.getItem("hasOnboarded").then(value => {
      console.log(`hasLaunched: ${value}`);
      if (!value) {
        setHasLaunched(false);
      } else {
        // setHasLaunched(true);
        setHasLaunched(false);
      }
    });
  }, []);

  // Complete onboarding if first app launch.
  // Else, normal, go to dashboard.
  let initialRouteName = hasLaunched ? "Dashboard" : "Onboarding";
  console.log(`Route name: ${initialRouteName}`);
  initialRouteName = "Onboarding";

  StoreData("@pinned_trips", pinnedTripData);
  StoreData("@unpinned_trips", unpinnedTripData);

  return (  
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <DrawerNavigator  initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
  
}

export default App;