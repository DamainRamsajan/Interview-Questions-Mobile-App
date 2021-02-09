import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import Animated from 'react-native-reanimated';
// import { FontAwesome5 } from '@expo/vector-icons'; 

const Home = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image style = {styles.image} source= {require("../../assets/logo.png")}/>
            <Animated.View style ={styles.roundTop}></Animated.View>
            <Animated.View style = {styles.bottomBox} >
                {/* <FontAwesome5 name="react" size={24} color="black" /> */}
                <Text style = {styles.bottomTitle} >React Native </Text>
                <Text style = {styles.bottomBody} >Job Interview Questions and Answers</Text>
                <Pressable style = {styles.button} onPress = {() => navigation.navigate("Question1")}>
                    <Text style = {styles.buttonText}>Show Questions</Text>
                </Pressable>
            </Animated.View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get("screen").width, 
        height: Dimensions.get("screen").height/2,  
        resizeMode: 'cover',
    },
    roundTop: {
        height: Dimensions.get("screen").height/2,
        width: Dimensions.get("screen").width*2, 
        backgroundColor: "#883000", 
        alignItems: "center",
        borderTopRightRadius: 5000,
        borderTopLeftRadius: 5000,
        position: "absolute",
        alignSelf: "center",
        top: 375,        
        zIndex: 99
    },
    bottomBox: {
        height: Dimensions.get("screen").height/3,
        backgroundColor: "#883000", 
        alignItems: "center",
        zIndex: 999,
    },
    bottomTitle: {
        fontSize: 36,
        color: "white",
        textAlign: "center",

    },
    bottomBody: {
        fontSize: 26,
        color: "#ede0cc",
        textAlign: "center",
        marginTop: 10,

    },
    button:{
        backgroundColor: "#09b1ec",
        height: 70,
        width: Dimensions.get("screen").width - 120, 
        borderRadius: 60,
        marginTop: 20,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#883000",
        textAlign: "center",
    }
})
