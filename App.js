import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Question1 from './src/screens/Question1';
import Question2 from './src/screens/Question2';
import Question3 from './src/screens/Question3';
import Question4 from './src/screens/Question4';
import Question5 from './src/screens/Question5';
import Question6 from './src/screens/Question6';
import Question7 from './src/screens/Question7';
import Question8 from './src/screens/Question8';
import Question9 from './src/screens/Question9';
import Question10 from './src/screens/Question10';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';

const Stack = createStackNavigator ();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#883000"},
  headerTitleStyle: {color: "#09b1ec", alignSelf: "center"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
     <StatusBar style="light" />
      <Stack.Navigator screenOptions = {globalScreenOptions}>          
          <Stack.Screen name = "HomeScreen" component = {HomeTabNavigator} options = {{title: "Ace your React Native Interview"}}/>
          {/* <Stack.Screen name = "Home" component = {Home} options = {{title: "Ace your React Native Interview"}}/> */}
          <Stack.Screen name = "Question1" component = {Question1} options = {{title: "React Native Interview Questions"}}/>  
          <Stack.Screen name = "Question2" component = {Question2} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question3" component = {Question3} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question4" component = {Question4} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question5" component = {Question5} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question6" component = {Question6} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question7" component = {Question7} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question8" component = {Question8} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question9" component = {Question9} options = {{title: "React Native Interview Questions"}}/>
          <Stack.Screen name = "Question10" component = {Question10} options = {{title: "React Native Interview Questions"}}/>    
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
