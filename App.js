import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';

const Stack = createStackNavigator ();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#883000"},
  headerTitleStyle: {color: "#09b1ec", alignSelf: "center"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
     <StatusBar style="auto" />
      <Stack.Navigator screenOptions = {globalScreenOptions}>          
          <Stack.Screen name = "Home" component = {Home} options = {{title: "Ace your React Native Interview"}}/>      
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
