import 'react-native-gesture-handler';
import React, { Component } from 'react';
import HomeScreen from "./HomeScreen"
import firebase from "./Firebase"
import { AppContext } from './Context'
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Appbar,
    Avatar,
    useTheme
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerNavigator = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const { toggleTheme } = React.useContext(AppContext);
    const paperTheme = useTheme();

    const signOut = () => {
        firebase.auth().signOut().then(function() {
            console.log("signout success")
          }).catch(function(error) {
            console.log("signout failed")
          });
    }
    
    return (
        <View style={{flex:1}}>
            <Appbar.Header style={[{height: 70}, styles.androidHeader]}>
                <Appbar.Content
                    title="Mark"
                    subtitle="Lives in CoronaVille"
                />
            </Appbar.Header>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1}}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="home" color={color} size={size}/>
                        )} label="Home" onPress={() => {props.navigation.navigate('Home')}}/>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="chat" color={color} size={size}/>
                        )} label="Messages" onPress={() => {props.navigation.navigate('Messages')}}/>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="account" color={color} size={size}/>
                        )} label="Profile" onPress={() => {props.navigation.navigate('Profile')}}/>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="settings" color={color} size={size}/>
                        )} label="Settings" onPress={() => {props.navigation.navigate('Settings')}}/>

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={toggleTheme}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size}/>
                )} label="Sign Out" onPress={signOut}/>
            </Drawer.Section>
        </View>
    )
}

const AppDrawerNavigator = () => {
    return (
        <DrawerNavigator.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>} initialRouteName="Home">
            <DrawerNavigator.Screen name="Home" component={HomeScreen} />
        </DrawerNavigator.Navigator>
    ) 
}

export default AppDrawerNavigator;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    },
    drawerContent: {
        flex: 1
    },
    drawerSection: {
        marginTop: -30
    },
    userInfoSection: {

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
});
  
