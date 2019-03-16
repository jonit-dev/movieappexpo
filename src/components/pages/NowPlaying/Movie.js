import React from 'react';
import {Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    H1,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';

const Movie = ({title, subtitle, imageUrl, overview, footer, votes, backdropUrl, popularity, release_date}) => {


    const {overviewStyles} = styles;

    return (


        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: backdropUrl}}/>
                    <Body>
                    <Text>{title}</Text>
                    <Text note>{popularity}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: imageUrl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up"/>
                        <Text>{votes} avg</Text>
                    </Button>
                </Left>
                <Body>
                {/*<Button transparent>*/}
                {/*<Icon active name="chatbubbles"/>*/}
                {/*<Text>4 Comments</Text>*/}
                {/*</Button>*/}
                </Body>
                <Right>
                <Text>Released on {release_date.toString().split('-').join('/')}</Text>
                </Right>
            </CardItem>

            <Content style={overviewStyles}>
                <H1>Overview</H1>
                <Text>{overview}</Text>
            </Content>
        </Card>


    );



};
const styles = {
    overviewStyles: {
        padding: 10
    }
};


export default Movie;

