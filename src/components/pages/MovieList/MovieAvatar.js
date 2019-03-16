import React from 'react';
import {Text} from 'react-native'
import {Body, Left, ListItem, Right, Thumbnail} from "native-base";

const MovieAvatar = ({imageUrl, title, overview, vote}) => {

    return (
        <ListItem avatar>
            <Left>
                <Thumbnail source={{uri: imageUrl}}/>
            </Left>
            <Body>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
            <Text note>{overview.toString().substr(0,50)+'...'}</Text>
            </Body>
            <Right>
                <Text note>{vote}</Text>
            </Right>
        </ListItem>
    );

};

export default MovieAvatar;

