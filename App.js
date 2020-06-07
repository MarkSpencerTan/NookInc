import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Context from './components/Context'
import RootStackScreen from './components/RootStackScreen';
import AppDrawerNavigator from './components/AppDrawerNavigator';
import firebase from './components/Firebase'
import { 
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import {
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
    Provider,
    ActivityIndicator
} from 'react-native-paper'

const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#333333'
    }
}
  
const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: 'black',
        text: '#ffffff'
    }
}

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const [isLoading, setLoading] = React.useState(false)
    const [isLoggedIn, setLoggedIn] = React.useState(false)

    // checks if user is logged in
    firebase.auth().onAuthStateChanged(user => {
        console.log("checking user login")
        if (user) {
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
    })

    if (isLoading) {
        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }, [])
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>
        )
    } else {
        return (
            <View style={{flex:1}}>
                <Provider theme={theme}>
                    <NavigationContainer theme={theme}>
                        { isLoggedIn ? <AppDrawerNavigator/> : <RootStackScreen/>}
                    </NavigationContainer>
                </Provider>
            </View>
        );
    }
};

export default App;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
