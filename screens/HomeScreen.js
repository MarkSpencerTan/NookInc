import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image } from "react-native";
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

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{ 
                    backgroundColor: '#3a455c',
                    height: 60,
                    borderBottomColor: '#757575'}}>
                    <Left style={{flexDirection: "row", alignItems: "center"}}>
                        <Button transparent><Icon name='menu'/></Button>
                        <Image
                                style={styles.tinyLogo}
                                source={require('../assets/images/NookIncWhite.png')}
                            />
                            <Text style={{color: 'white', fontSize: 16, marginLeft: 5}}>NookInc</Text>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name='cart'></Icon>
                        </Button>
                    </Right>
                </Header>
                <View style={{ height: 60, backgroundColor: '#3a455c'}}>
                    <View style={{flex: 1, flexDirection: "row", padding: 10, paddingTop: 0, paddingBottom: 5}}>
                        <View style={{flex: 8, height: 40, marginLeft: 5, justifyContent: "center"}}>
                            <Item style={{ backgroundColor: "white", paddingHorizontal: 10, borderRadius: 4}}>
                                <Icon name="search"></Icon>
                                <Input placeholder="search" style={{height:40}}></Input>
                            </Item>
                        </View>
                    </View>
                </View>

                <Content style={{backgroundColor: 'lightgray'}}>

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
        marginLeft: 5
    }
});
  
