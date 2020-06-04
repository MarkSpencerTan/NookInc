import 'react-native-gesture-handler';
import React, { Component } from 'react';
import HomeScreen from "../screens/HomeScreen"

import { StyleSheet, Text, Platform, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Header, Content, ListItem, Left, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        <Container>
            <Header style={[{ backgroundColor: '#3a455c', height: 70}, styles.androidHeader]}>
                <Left style={{flex: 1, flexDirection: 'row', paddingLeft: 5, alignItems:'center'}}>
                    <Icon name="person" style={{color: 'white'}}></Icon>
                    <Text style={{marginLeft: 10, fontSize: 18, color: 'white', fontStyle: 'italic'}}>Hello, Mark</Text>
                </Left>
            </Header>
            <Content>
                <FlatList 
                    data={[
                        'Home', 'Messages', 'Shop', 'Top Items', 'Account'
                    ]}
                    renderItem={({item}) => (
                        <ListItem noBorder>
                            <Text>{item}</Text>
                        </ListItem>
                    )}
                />
            </Content>
        </Container>
    )
}

class AppDrawerNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>} initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                </Drawer.Navigator>
            </NavigationContainer> 
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
    }
});
  
