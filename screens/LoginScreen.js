import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    onButtonPress = () => {
        this.setState({
            loading: true
        })
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginError)
    }

    onLoginSuccess = () => {
        this.setState({
            error: '',
            loading: false
        })
    }

    onLoginError = (error) => {
        console.log(error)
        this.setState({
            error: error.message,
            loading: false
        })
    }

    render() {
        return (
            <View style={{height:"100%", backgroundColor: "#efe167"}}>
                <View style={{flex: 6, justifyContent: 'center', alignItems: "center"}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/NookIncWhite.png')}
                        />
                        <Text style={styles.logoText}>Nook</Text><Text style={[styles.logoText, {fontWeight: '400'}]}>Inc</Text>
                    </View>
                </View>
                <View style={{flex: 2, paddingHorizontal: 30}}>
                    <TextInput
                        theme={{colors: {primary: "#5d4b36"}}}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        dense mode='outlined' label="Email" style={[{marginBottom: 5}]}/>
                    <TextInput 
                        theme={{colors: {primary: "#5d4b36"}}}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        dense secureTextEntry mode='outlined' label="Password"/>
                </View>
                <View style={{flex: 2, paddingHorizontal: 30}}>
                    <Button onPress={this.onButtonPress} color="#5d4b36" mode='contained' icon="login">
                        <Text>Login</Text>
                    </Button>
                    <Text style={styles.errorText}>{this.state.error}</Text>
                    <Button color="#5d4b36" mode='text' icon="pencil">
                        <Text>Create Account</Text>
                    </Button>
                </View>
            </View>
        )
    }    
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        tintColor: '#5d4b36',
        marginRight: 10
    },
    logoText: {
        color: '#5d4b36',
        fontSize: 35,
        letterSpacing: 8,
        textTransform: 'uppercase',
        fontWeight: '200'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        margin: 10,
    }
});