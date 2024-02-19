import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/LoginScreen'; // Correction du nom du fichier
import SignUpScreen from './screens/SingUpScreen'; // Correction du nom du fichier
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen'
import MapViewScreen from './screens/MapViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="MapView" component={MapViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
