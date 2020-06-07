import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firebase from './Firebase'

const SignInScreen = ({navigation}) => {
    onPressSignIn = () => {
        // form validation
        if (formData.email.length == 0) {
            setErrorMessage("Email cannot be empty!")
        }
        else if (!formData.validEmail){
            setErrorMessage("Invalid Email Address")
        }
        else if (formData.password.length == 0) {
            setErrorMessage("Password cannot be empty!")
        }
        else {
            setFormLoading(true)
            setErrorMessage(null)
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
                .then(this.onLoginSuccess)
                .catch(this.onLoginError)
        }
        
    }
    
    onLoginSuccess = () => {
        console.log("successfully created firebase account")
        setErrorMessage(null)
        setFormLoading(false)
    }

    onLoginError = (error) => {
        console.log("failed to create account", error.message)
        setErrorMessage(error.message)
        setFormLoading(false)
    }

    const [formData, setFormData] = React.useState({
        email: '',
        validEmail: null,
        password: '',
        secureTextEntry: true,
    })
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [isFormLoading, setFormLoading] = React.useState(false)

    const setEmail = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === true){
            setFormData({...formData, email: email, validEmail: true})
        }
        else{
            setFormData({...formData, validEmail: false})
        }
    }

    const setPassword = (password) => {
        setFormData({...formData, password: password})
    }

    const toggleHidePassword = () => {
        setFormData({...formData, secureTextEntry: !formData.secureTextEntry})
    }

    return (
        <View style={styles.container}>
            {/* for the logo area */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sign In</Text>
            </View>
            {/* for the buttons & controls */}
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig">
                <View style={styles.form}>
                    <View style={styles.formItem}>
                        <TextInput style={styles.formLabel}>Email</TextInput>
                        <View style={styles.formInput}>
                            <FontAwesome name="user-o" size={20} style={styles.formInputIcon}/>
                            <TextInput
                                placeholder="Enter Email Here"
                                autoCapitalize="none"
                                style={styles.textInput}
                                onChangeText={setEmail}/>
                            { formData.validEmail ? 
                                <Animatable.View
                                    animation="bounceIn">
                                    <Feather name="check-circle" size={20} style={styles.formInputIcon}/>
                                </Animatable.View>
                                : null
                            }
                        </View>
                    </View>
                    <View style={styles.formItem}>
                        <TextInput style={styles.formLabel}>Password</TextInput>
                        <View style={styles.formInput}>
                            <Feather name="lock" size={20} style={styles.formInputIcon}/>
                            <TextInput
                                placeholder="Enter Password Here"
                                autoCapitalize="none"
                                secureTextEntry={formData.secureTextEntry}
                                style={styles.textInput}
                                onChangeText={setPassword}/>
                            <TouchableOpacity onPress={toggleHidePassword}>
                                { formData.secureTextEntry ? 
                                    <Feather name="eye-off" color="grey" size={20}/>
                                    : <Feather name="eye" color="green" size={20}/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* error message for sign up errors */}
                { errorMessage ?
                    <Animatable.View animation="shake">
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </Animatable.View>
                    : null
                }
                <Button 
                    icon="login"
                    mode="contained"
                    style={styles.button}
                    onPress={onPressSignIn}
                    loading={isFormLoading}>
                    Sign In
                </Button>
                <Button 
                    icon="arrow-left"
                    mode="contained"
                    style={styles.button}
                    onPress={navigation.goBack}>
                    Back
                </Button>
            </Animatable.View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 30
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    headerTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: '500',
        marginBottom: 30,
    },
    form: {
        marginBottom: 30
    },
    formItem: {
        marginBottom: 20,
        justifyContent: 'center'
    },
    formLabel: {
        color: '#009387',
        marginBottom: 10,
        fontSize: 16
    },
    formInput: {
        flexDirection: 'row'
    },
    formInputIcon: {
        color: '#009387',
        flex: 1,
    },
    textInput: {
        flex: 8,
    },
    button: {
        borderRadius: 25,
        backgroundColor: "#009387",
        marginBottom: 10
    },
    errorMessage: {
        color: 'red',
        marginBottom: 30,
        textAlign: 'center'
    }
})
