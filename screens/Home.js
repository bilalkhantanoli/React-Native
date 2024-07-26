import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>     
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2BBE9'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Home;