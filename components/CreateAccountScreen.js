import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firebase from './Firebase'

const CreateAccountScreen = ({navigation}) => {
    
    onPressSubmit = () => {
        console.log(formData)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(onSubmitSuccess)
            .catch(onSubmitFail)
    }

    onSubmitSuccess = () => {
        console.log("successfully created firebase account")
    }

    onSubmitFail = (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    }

    const [formData, setFormData] = React.useState({
        email: '',
        validEmail: null,
        password: '',
        confirmPassword: '',
        secureTextEntry: false,
        confirmSecureTextEntry: false
    })

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

    const setConfirmPassword = (password) => {
        setFormData({...formData, confirmPassword: password})
    }

    const toggleHidePassword = () => {
        setFormData({...formData, secureTextEntry: !formData.secureTextEntry})
    }

    const toggleHideConfirmPassword = () => {
        setFormData({...formData, confirmSecureTextEntry: !formData.confirmSecureTextEntry})
    }

    return (
        <View style={styles.container}>
            {/* for the logo area */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sign Up</Text>
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
                    <View style={styles.formItem}>
                        <TextInput style={styles.formLabel}>Confirm Password</TextInput>
                        <View style={styles.formInput}>
                            <Feather name="lock" size={20} style={styles.formInputIcon}/>
                            <TextInput
                                placeholder="Confirm Password Here"
                                autoCapitalize="none"
                                secureTextEntry={formData.confirmSecureTextEntry}
                                style={styles.textInput}
                                onChangeText={setConfirmPassword}/>
                            <TouchableOpacity onPress={toggleHideConfirmPassword}>
                                { formData.confirmSecureTextEntry ? 
                                    <Feather name="eye-off" color="grey" size={20}/>
                                    : <Feather name="eye" color="green" size={20}/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <Button 
                    icon="upload-outline"
                    mode="contained"
                    style={styles.button}
                    onPress={onPressSubmit}>
                    Submit
                </Button>
                <Button 
                    icon="arrow-left"
                    mode="contained"
                    style={styles.button}
                    onPress={navigation.goBack}>
                    back
                </Button>
            </Animatable.View>
        </View>
    )
}

export default CreateAccountScreen

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
    }
})
