import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = ({navigation}) => {
    return (
        <Appbar.Header>
            <Appbar.Action
                onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                icon='menu'
            />
            <Avatar.Image size={24} source={require('../assets/images/NookIncWhite.png')}></Avatar.Image>
            <Appbar.Content
                title="NookInc"
                subtitle="Home"
            />
            <Appbar.Action icon="cart"/>
        </Appbar.Header>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
