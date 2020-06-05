import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image, 
    Platform,
    StatusBar} from "react-native";
import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Button,
    Item,
    Input } from 'native-base'
import { DrawerActions } from "@react-navigation/native";

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={[{ 
                    backgroundColor: '#efe167',
                    height: 60,
                    borderBottomColor: '#757575'}]}>
                    <Left style={{flexDirection: "row", alignItems: "center"}}>
                        <Button transparent>
                            <Icon style={{color: '#5a482f'}} onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}name='menu'/>
                        </Button>
                        <Image
                                style={styles.tinyLogo}
                                source={require('../assets/images/NookIncWhite.png')}
                            />
                        <Text style={{color: '#5a482f', fontSize: 16, marginLeft: 5}}>NookInc</Text>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon style={{color: '#5a482f'}} name='cart'></Icon>
                        </Button>
                    </Right>
                </Header>
                <View style={{ height: 60, backgroundColor: '#efe167'}}>
                    <View style={{flex: 8, height: 40, padding: 5, justifyContent: "center"}}>
                        <Item style={{ backgroundColor: "white", paddingHorizontal: 10, borderRadius: 4}}>
                            <Icon name="search" style={{color: '#5a482f'}}></Icon>
                            <Input placeholder="search" style={{height:40}}></Input>
                        </Item>
                    </View>
                </View>
                <Content style={{backgroundColor: '#fcf9b1'}}>
                </Content>
            </Container>
        )
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    tinyLogo: {
        width: 20,
        height: 20,
        marginLeft: 5,
        tintColor: "#5a482f"
    }
});
  
