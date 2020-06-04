import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from "./screens/HomeScreen"
import AppDrawerNavigator from "./components/AppDrawerNavigator"
import { Button, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  } 
});