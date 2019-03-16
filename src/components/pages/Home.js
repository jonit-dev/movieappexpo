import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from "../common/index";

import {Header, Title, Container, Content, Card, CardItem, Text, Body} from 'native-base';



class Home extends Component {

    // state = {key:value};
    static navigationOptions = {
        title: 'Home',


    };

    render() {
        return (
            <Container>
                <Header>
                    <Body style={{flex: 3,justifyContent: 'center'}}>
                    <Title style={{color: '#fff',alignSelf:'center'}}>Home</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                asadsas
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Home;
