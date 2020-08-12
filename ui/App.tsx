import React, { FC, useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Router';
import { OnboardingScreen } from './Screens';

console.disableYellowBox = true;

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
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <DrawerNavigator  initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}

export default App;