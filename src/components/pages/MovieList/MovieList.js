import React, {Component} from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    List,
    Button,
    Icon,
    Title,
    Segment,
    Content,
    Text,
    Spinner
} from 'native-base';
import Constants from '../../../classes/Constants';
import MovieAvatar from "./MovieAvatar";
import axios from 'axios';

export default class MovieList extends Component {

    state = {selected: 1, movies: []};

    static navigationOptions = {
        title: 'Movie List',
    };

    componentDidMount() {

        //lets load our inital popular movies
        this.onFetchMovies('popular');


    }

    componentDidUpdate() {

    }


    onFetchMovies = async (type) => {
        console.log(`Fetching ${type} movies data...`);
        const response = await axios.get(`${Constants.get().apiUrl}/movie/${type}?api_key=${Constants.get().apiKey}&language=en-CA&page=1`);
        let movies = response.data.results;

        console.log(movies);

        this.setState({movies});


    };

    onRenderMovies() {

        if (this.state.movies.length > 0) {
            let i = 0;
            return this.state.movies.map((movie) => {
                if (i < 10) {
                    i++;
                    return <MovieAvatar key={movie.id} title={movie.title} overview={movie.overview}
                                 subtitle={movie.popularity} vote={movie.vote_average}
                                 imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>;

                }
            });
        }


    }


    renderContent(segment) {

        switch (segment) {
            case 1:
                return <Content padder><List>{this.onRenderMovies() ? this.onRenderMovies() :
                    <Spinner color='blue'/>}</List></Content>;
            case 2:
                return <Content padder><List>{this.onRenderMovies() ? this.onRenderMovies() :
                    <Spinner color='blue'/>}</List></Content>;
            case 3:
                return <Content padder><List>{this.onRenderMovies() ? this.onRenderMovies() :
                    <Spinner color='blue'/>}</List></Content>
        }


    }


    render() {
        return (
            <Container>
                <Header hasSegment>
                    <Left>
                        {/*<Button transparent>*/}
                            {/*<Icon name="arrow-back"/>*/}
                        {/*</Button>*/}
                    </Left>
                    <Body style={{flex: 3, justifyContent: 'center'}}>
                    <Title style={{color: '#fff', alignSelf: 'center'}}>Movie Lists</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Segment>
                    <Button first active={this.state.selected === 1} onPress={() => {
                        this.setState({selected: 1, movies: []});
                        //lets load our inital popular movies

                        this.onFetchMovies('popular');

                    }}>
                        <Text>Popular</Text>
                    </Button>
                    <Button active={this.state.selected === 2} onPress={() => {
                        this.setState({selected: 2, movies: []});
                        this.onFetchMovies('top_rated');
                    }}>
                        <Text>Top Rated</Text>
                    </Button>
                    <Button last active={this.state.selected === 3} onPress={() => {
                        this.setState({selected: 3, movies: []});
                        this.onFetchMovies('upcoming');
                    }}>
                        <Text>Upcoming</Text>
                    </Button>
                </Segment>
                <Content padder>
                    {this.renderContent(this.state.selected)}
                </Content>
            </Container>
        );
    }
}