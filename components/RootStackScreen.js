import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'
import CreateAccountScreen from './CreateAccountScreen'

const RootStack = createStackNavigator()

const RootStackScreen = () => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen}></RootStack.Screen>
            <RootStack.Screen name="SignInScreen" component={SignInScreen}></RootStack.Screen>
            <RootStack.Screen name="CreateAccountScreen" component={CreateAccountScreen}></RootStack.Screen>
        </RootStack.Navigator>
    )
}

export default RootStackScreen

const styles = StyleSheet.create({})
