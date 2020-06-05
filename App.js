import 'react-native-gesture-handler';
import React from 'react';
import firebase from './firebase'
import LoginScreen from "./screens/LoginScreen"
import AppDrawerNavigator from "./components/AppDrawerNavigator"
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export default class App extends React.Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        console.log("Im here")
        firebase.auth().onAuthStateChanged(user => {
            console.log("something changed")
            if (user) {
            this.setState({
                loggedIn: true
            })
            }
            else {
            this.setState({
                loggedIn: false
            })
            }
        })
    }

    render() {
        switch(this.state.loggedIn) {
            case false:
                return (
                    <LoginScreen/>
                )
            case true:
                return (
                    <NavigationContainer>
                        <AppDrawerNavigator/>
                    </NavigationContainer>
                );
        }
        
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    } 
});