import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Button } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    onPressSignIn = () => {
        navigation.push("SignInScreen")
    }
    
    onPressSignUp = () => {
        navigation.push("CreateAccountScreen")
    }

    return (
        <View style={styles.container}>
            {/* for the logo area */}
            <View style={styles.header}>
                <Animatable.View 
                    style={styles.logoContainer}
                    animation="fadeIn"
                    duration="1000"
                    easing="ease-in">
                    <Animatable.Image 
                        source={require('../assets/images/NookIncWhite.png')}
                        style={styles.logo}/>
                    <Text style={styles.logoText}>Nook </Text>
                    <Text style={[styles.logoText, {fontWeight: '200'}]}>Inc</Text>
                </Animatable.View>
            </View>
            {/* for the buttons & controls */}
            <Animatable.View 
                style={[styles.footer, {backgroundColor: colors.background}]}
                animation="fadeInUpBig">
                <Text style={[styles.footerTitle, {color: colors.text}]}>Start trading Animal Crossing items with other players!</Text>
                <Button 
                    icon="login"
                    mode="contained"
                    style={[styles.button, {}]}
                    onPress={onPressSignIn}>
                    Sign In
                </Button>
                <Button 
                    icon="file"
                    mode="contained"
                    style={styles.button}
                    onPress={onPressSignUp}>
                    Create Account
                </Button>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    footerTitle: {
        fontSize: 20,
        color: '#009387',
        fontWeight: '300',
        marginBottom: 30
    },
    logo: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    logoText: {
        fontSize: 35,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: '100',
        letterSpacing: 7
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        borderRadius: 25,
        marginBottom: 10
    }
})
