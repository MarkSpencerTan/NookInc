import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { AppContext } from './components/Context'
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
        text: '#333333',
        primary: '#009387'
    }
}
  
const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333333',
        text: '#ffffff',
        primary: '#009387'
    }
}

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    const [isLoggedIn, setLoggedIn] = React.useState(false)

    const themeContext = React.useMemo(() => ({
        toggleTheme: () => {
          setIsDarkTheme( isDarkTheme => !isDarkTheme );
        }
    }), []);

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

    return (
        <View style={{flex:1}}>
            <Provider theme={theme}>
                <AppContext.Provider value={themeContext}>
                    <NavigationContainer theme={theme}>
                        { isLoggedIn ? <AppDrawerNavigator/> : <RootStackScreen/>}
                    </NavigationContainer>
                </AppContext.Provider>
            </Provider>
        </View>
    );
    
};

export default App;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
