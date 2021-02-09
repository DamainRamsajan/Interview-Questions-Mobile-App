import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';

const Question2 = () => {
    const navigation = useNavigation();
    
    return (
        <View>
            <Animated.View style ={styles.roundTop}></Animated.View>
            <Animated.View style = {styles.bottomBox} >
                {/* <Text style = {styles.bottomTitle} >React Native </Text> */}
                <Text style = {styles.bottomBody} >Question 2 </Text>
                
                <View style = {styles.answersContainer}>
                    <Text style = {styles.answersText}>Watchman is an open source project developed by Facebook. As the name of the software correctly suggests that it watches files and keep track of changes in files. It can also trigger action based on file change. React native uses watchman to provide hot reloading feature of React Native. Hot reloading of React native application helps the developer to build application faster. </Text>
                </View>
                
                <Pressable style = {styles.button} onPress = {() => navigation.navigate("Question3")}>
                    <Text style = {styles.buttonText}>Next Question</Text>
                </Pressable>
            </Animated.View>
        </View>
    )
}

export default Question2

const styles = StyleSheet.create({
    roundTop: {
        height: Dimensions.get("screen").height/2,
        width: Dimensions.get("screen").width*2, 
        backgroundColor: "#883000", 
        alignItems: "center",
        borderBottomRightRadius: 5000,
        borderBottomLeftRadius: 5000,
        position: "absolute",
        alignSelf: "center",
        top: -165,        
        // zIndex: 99
    },
    bottomBox: {
        height: Dimensions.get("screen").height/5,
        backgroundColor: "#883000", 
        alignItems: "center",
        zIndex: 999,
    },
    bottomTitle: {
        fontSize: 36,
        color: "white",
        textAlign: "center",
        // marginTop: 10,

    },
    bottomBody: {
        fontSize: 30,
        color: "#ede0cc",
        textAlign: "center",
        marginTop: 10,

    },
    button:{
        backgroundColor: "#09b1ec",
        height: 70,
        width: Dimensions.get("screen").width - 120, 
        borderRadius: 60,
        marginTop: 50,
        justifyContent: "center",
        position: "absolute",
        alignSelf: "center",
        top: 590,
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#883000",
        textAlign: "center",
    },
    answersContainer: {
        backgroundColor: "#ede0cc",        
        position: "absolute",
        alignSelf: "center",
        top: 275,
        width: Dimensions.get("screen").width - 10,
        padding: 10,
    },
    answersText: {
        color: "#883000",
        fontSize: 22,

    }
})
