import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, WindowIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
const Signup = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.arrow}>
                    <TouchableOpacity style={styles.leftIcon} onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon color="black" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ width: 150, height: 150, backgroundColor: 'transparent' }} source={require('../assets/logo.png')} />
                </View>
            </SafeAreaView>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput placeholder="Full Name" keyboardType="default" style={styles.input} />
                <Text style={styles.label}>Email Address</Text>
                <TextInput placeholder="Email Address" keyboardType="email-address" style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="Password" keyboardType="visible-password" style={styles.input} />
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.touch}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Or</Text>
                <View style={styles.thirdPartycontainer}>
                    <TouchableOpacity>
                        <Image style={styles.thirdPartyLogo} source={require('../assets/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.thirdPartyLogo} source={require('../assets/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10,}}>
                    <Text style={{ color: 'grey', fontWeight: 'bold', marginRight: 5 }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#1DA1F2', fontWeight: 'bold' }}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1DA1F2'
    },
    thirdPartycontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5
    },
    thirdPartyLogo: {
        width: 40,
        height: 40,
        backgroundColor: 'transparent'
    },
    touch: {
        padding: 10,
        backgroundColor: '#1DA1F2',
        borderRadius: 10,
        width: "50%",
        color: 'white',
        fontWeight: 'bold',
        margin: 7,
        textAlign: 'center',
    },
    containerInput: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginBottom: 5
    },
    label: {
        fontSize: 18,
        color: 'grey',
        fontWeight: 'bold',
        marginTop: 10
    },
    arrow: {

        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    leftIcon: {
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50

    }
})

export default Signup;