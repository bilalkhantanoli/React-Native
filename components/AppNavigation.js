import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import ForgotPass from "../screens/ForgotPass";


const Stack = createStackNavigator();
const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
                <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
                <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
                <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
                <Stack.Screen name="ForgotPass" options={{headerShown: false}} component={ForgotPass} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;