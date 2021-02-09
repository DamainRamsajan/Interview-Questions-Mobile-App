import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import QuestionsList from '../screens/QuestionsList';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator ();

const HomeTabNavigator = () => {
    return (
       <Tab.Navigator tabBarOptions ={{
            activeTintColor: "#09b1ec",
            inactiveTintColor: "white",
            activeBackgroundColor: "#2A4E70",
            inactiveBackgroundColor: "#883000"
            
       }}>
           <Tab.Screen 
            name = {"Home"}
            component = {Home}
            options = {{
                tabBarIcon: ({color}) => {
                    <FontAwesome name="home" size={24} color={color} />
                }
            }}
           />
                      <Tab.Screen 
            name = {"List"}
            component = {QuestionsList}
            options = {{
                tabBarIcon: ({color}) => {
                    <FontAwesome name="list-o" size={24} color={color} />
                }
            }}
           />


       </Tab.Navigator>
    )
}

export default HomeTabNavigator

const styles = StyleSheet.create({})
