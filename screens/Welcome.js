import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Welcome = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safearea} >
            <View style={styles.container}>
                <Text style={styles.text}>Let's get started</Text>
                <View style={styles.imageView}>
                    <Image style={{width: 250, height: 250, backgroundColor: 'transparent'}} source ={require('../assets/logo.png')}/>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.touchText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.imageView, {flexDirection: 'row'}]}>
                    <Text style={{fontSize: 18, color: 'black', marginRight: 5}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold',}}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch:{
        padding: 10, 
        backgroundColor: 'white', 
        borderRadius: 10, 
        margin: 10,
        width: "50%",
    },
    touchText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    safearea: {
        flex: 1, 
        backgroundColor: '#1DA1F2'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20
    }
})

export default Welcome;