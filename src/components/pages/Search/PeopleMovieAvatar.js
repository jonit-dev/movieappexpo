import React, {Component} from 'react';
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';

export default class PeopleMovieAvatar extends Component {


    render() {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: this.props.movieImage}}/>
                </Left>
                <Body>
                <Text>{this.props.movieName}</Text>
                <Text note>{this.props.peopleName}</Text>
                </Body>
                <Right>
                    <Text note>{this.props.voteAvg}</Text>
                </Right>
            </ListItem>
        );
    }
}