import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from "../common/index";

import {Header, Title, Container, Content, Card, CardItem, Text, Body} from 'native-base';



class About extends Component {

    // state = {key:value};
    static navigationOptions = {
        title: 'About',
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body style={{flex: 3,justifyContent: 'center'}}>
                    <Title style={{color: '#fff',alignSelf:'center'}}>About</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>about</Text>
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

export default About;
