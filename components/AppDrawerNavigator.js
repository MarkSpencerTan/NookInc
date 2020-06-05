import 'react-native-gesture-handler';
import React, { Component } from 'react';
import HomeScreen from "../screens/HomeScreen"

import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { Container, Header, Content, ListItem, Left, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import MessageScreen from '../screens/MessageScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

const DrawerNavigator = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    
    return (
        <Container style={{backgroundColor: '#fcf9b1'}}>
            <Header style={[{ backgroundColor: '#efe167', height: 70}, styles.androidHeader]}>
                <Left style={{flex: 1, flexDirection: 'row', paddingLeft: 15, alignItems:'center'}}>
                    <Icon name="person" style={{color: '#5a482f'}}></Icon>
                    <View style={{flex: 1, marginLeft: 30}}>
                        <Text style={{fontSize: 15, color: '#5a482f'}}>Mark</Text>
                        <Text note style={{color: '#5a482f'}}>Lives at CoronaVill</Text>
                    </View>
                </Left>
            </Header>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1}}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="home" color={color} size={size}/>
                        )} label="Home" onPress={() => {props.navigation.navigate('Home')}}/>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="ios-chatbubbles" color={color} size={size}/>
                        )} label="Messages" onPress={() => {props.navigation.navigate('Messages')}}/>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="person" color={color} size={size}/>
                        )} label="Profile" onPress={() => {props.navigation.navigate('Profile')}}/>
                        <DrawerItem icon={({color, size}) => (
                            <Icon name="settings" color={color} size={size}/>
                        )} label="Settings" onPress={() => {props.navigation.navigate('Settings')}}/>

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem icon={({color, size}) => (
                    <Icon name="log-out" color={color} size={size}/>
                )} label="Sign Out" onPress={() => {}}/>
            </Drawer.Section>
            {/* <Content>
                <ListItem button noBorder>
                    <Text>Home</Text>
                </ListItem>
                <ListItem button noBorder>
                    <Text>Messages</Text>
                </ListItem>
            </Content> */}

        </Container>
    )
}

const navigateView = (item) => {
    NavigationAction.view(item)
    console.log("logging")
}

class AppDrawerNavigator extends Component {
    render() {
        return (
            <DrawerNavigator.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>} initialRouteName="Home">
                <DrawerNavigator.Screen name="Home" component={HomeScreen} />
                <DrawerNavigator.Screen name="Messages" component={MessageScreen} />
            </DrawerNavigator.Navigator>
        )
    }
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
  
