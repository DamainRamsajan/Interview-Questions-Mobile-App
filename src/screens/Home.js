import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'

const Home = () => {
    return (
        <View>
            <Image style = {styles.image} source= {require("../../assets/logo.png")}/>
            <Animated.View style ={styles.roundTop}></Animated.View>
            <Animated.View style = {styles.bottomBox} >
                <Text style = {styles.bottomTitle} >React Native Job Interview Questions and Answers</Text>
                <Animated.View style = {styles.button}>
                    <Text style = {styles.buttonText}>Show Questions</Text>
                </Animated.View>
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
        marginTop: 10,

    },
    button:{
        backgroundColor: "#09b1ec",
        height: 50,
        width: Dimensions.get("screen").width - 40, 
        borderRadius: 10,
        marginTop: 60,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#883000",
        textAlign: "center",
    }
})
