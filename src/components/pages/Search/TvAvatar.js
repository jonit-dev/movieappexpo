import React, {Component} from 'react';
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';

export default class TvAvatar extends Component {


    render() {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: this.props.showImage}}/>
                </Left>
                <Body>
                <Text>{this.props.name}</Text>
                <Text note>{this.props.popularity}</Text>
                </Body>
                <Right>
                    <Text note>{this.props.voteAvg}</Text>
                </Right>
            </ListItem>
        );
    }
}