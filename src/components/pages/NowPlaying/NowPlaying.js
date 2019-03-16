import React, {Component} from 'react';
import {Header, Title, Container, Content, Card, CardItem, Text, Body} from 'native-base';
import axios from 'axios';
import Constants from '../../../classes/Constants'
import Movie from "./Movie";


class NowPlaying extends Component {

    state = {movies: []};

    componentDidMount() {
        console.log("Now playing Tab");
        console.log(Constants.get());

        this.onFetchNowPlayingMovies()
    }


    onFetchNowPlayingMovies = async (args) => {

        let requestUrl = `${Constants.get().apiUrl}/movie/now_playing?api_key=${Constants.get().apiKey}&language=en-CA&page=1`;
        console.log(requestUrl);
        const response = await axios.get(requestUrl);

        let movies = response.data.results;
        this.setState({movies});
        console.log(movies);

    };

    static navigationOptions = {
        title: 'Now Playing',
    };

    onRenderMovies() {
        let nowPlayingMovies = this.state.movies.map((movie) => <Movie key={movie.id}
                                                                       title={movie.title}
                                                                       subtitle={movie.original_title}
                                                                       popularity={movie.popularity}
                                                                       overview={movie.overview}
                                                                       imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                                       release_date={movie.release_date}
                                                                       votes={movie.vote_average}
                                                                       footer={`Vote average: ${movie.vote_average}`}
                                                                       backdropUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>);

        let n = (Math.floor(Math.random() * (nowPlayingMovies.length)));
        console.log('random movie...');
        return nowPlayingMovies[n]


    }

    render() {


        return (
            <Container>
                <Header>
                    <Body style={{flex: 3, justifyContent: 'center'}}>
                    <Title style={{color: '#fff', alignSelf: 'center'}}>Now Playing</Title>
                    </Body>
                </Header>
                <Content>
                    {this.onRenderMovies()}


                </Content>
            </Container>
        );
    }
}

export default NowPlaying;
