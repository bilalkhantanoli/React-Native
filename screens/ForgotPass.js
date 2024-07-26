import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, WindowIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
const ForgotPass = () => {
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
                    <Image style={{ width: 250, height: 250, backgroundColor: 'transparent' }} source={require('../assets/logo.png')} />
                </View>
            </SafeAreaView>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput placeholder="Email Address" keyboardType="email-address" style={styles.input} />
                <Text style={styles.label}>Current Password</Text>
                <TextInput placeholder="Password" keyboardType="visible-password" style={styles.input} />
                <Text style={styles.label}>New Password</Text>
                <TextInput placeholder="Password" keyboardType="visible-password" style={styles.input} />
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.touch}>Change Password</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10,}}>
                    <Text style={{ color: 'grey', fontWeight: 'bold', marginRight: 5 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ color: '#1DA1F2', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'grey', fontWeight: 'bold', marginRight: 5, marginLeft: 5 }}>Or</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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
        flex: 1.2,
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

export default ForgotPass;