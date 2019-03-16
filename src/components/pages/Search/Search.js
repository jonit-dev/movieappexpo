import React, {Component} from 'react';
import {
    Container, Header,
    Left,
    Body,
    Right,
    List,
    Button,
    Icon,
    Title, Input,
    Segment,
    Content,
    Text,
    Spinner, Item
} from 'native-base';
import Constants from '../../../classes/Constants';
import MovieAvatar from "../MovieList/MovieAvatar";
import axios from "axios";
import PeopleMovieAvatar from "./PeopleMovieAvatar";
import TvAvatar from "./TvAvatar";


export default class Search extends Component {

    state = {selected: 1, movies: [], keyword: "", scope: ""};

    static navigationOptions = {
        title: 'Search',
    };

    componentDidMount() {

        console.log("Search Tab");


        //first tab movie
        this.setState({selected: 1, movies: [], scope: "movie"});


    }

    componentDidUpdate() {

        console.log(this.state.keyword);

    }


    onRenderResources() {

        if (this.state.movies.length > 0) {
            let i = 0;
            return this.state.movies.map((resource) => {
                if (i < 10) {
                    i++;
                    switch (this.state.scope) {
                        case 'tv':

                            return <TvAvatar key={resource.id}
                                             name={resource.name}
                                             popularity={resource.popularity}
                                             voteAvg={resource.vote_average}
                                             overview={resource.overview}
                                             showImage={`https://image.tmdb.org/t/p/original/${resource.poster_path}`}/>;

                        case 'movie':
                            return <MovieAvatar key={resource.id} title={resource.title}
                                                subtitle={resource.popularity} vote={resource.vote_average}
                                                overview={resource.overview}
                                                imageUrl={`https://image.tmdb.org/t/p/original/${resource.poster_path}`}/>;
                        case 'person':

                            let peopleMovies = resource.known_for;
                            console.log("Know for movies...");
                            console.log(peopleMovies);
                            let peopleName = resource.name;


                            return peopleMovies.map((movie) => {

                                if (movie.title && peopleName) {
                                    return <PeopleMovieAvatar
                                        key={movie.id}
                                        movieName={movie.title}
                                        peopleName={peopleName}
                                        voteAvg={movie.vote_average}
                                        movieImage={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>;
                                }


                            });
                    }


                }
            });
        } else {
            return <Text>Please use the search bar first</Text>
        }


    }

    onFetchContent = async (type, query) => {
        console.log(`Fetching type: ${type} movies data using as query: ${query}`);
        let requestUrl = `${Constants.get().apiUrl}/search/${type}?api_key=${Constants.get().apiKey}&query=${query}&language=en-CA&page=1`;
        console.log(requestUrl);
        const response = await axios.get(requestUrl);
        let movies = response.data.results;

        console.log(movies);

        this.setState({movies});


    };

    renderSearchInfo() {

        if (this.state.keyword && this.state.movies.length > 0) {
            return <Text style={{padding: 10}}>
                {`"${this.state.keyword}" is in the following:`}
            </Text>
        }


    }

    onUserSubmittedSearch() {
        console.log("submitted search");
        this.setState({movies: []}); //refresh movies

        this.onFetchContent(this.state.scope, this.state.keyword);
    }


    renderContent(segment) {

        switch (segment) {
            case 1:
                return <Content padder><List>{this.onRenderResources()}</List></Content>;
            case 2:
                return <Content padder><List>{this.onRenderResources()}</List></Content>;
            case 3:
                return <Content padder><List>{this.onRenderResources()}</List></Content>;
        }


    }


    render() {
        return (
            <Container>
                <Header searchBar rounded hasSegment>

                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search" value={this.state.keyword}
                               onSubmitEditing={() => this.onUserSubmittedSearch()}
                               onChangeText={(text) => this.setState({keyword: text})}/>

                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>

                </Header>
                <Segment>
                    <Button first active={this.state.selected === 1} onPress={() => {
                        this.setState({selected: 1, movies: [], scope: "movie"});
                        //lets load our inital popular movies
                    }}>
                        <Text>Movies</Text>
                    </Button>
                    <Button active={this.state.selected === 2} onPress={() => {
                        this.setState({selected: 2, movies: [], scope: "person"});

                    }}>
                        <Text>People</Text>
                    </Button>
                    <Button last active={this.state.selected === 3} onPress={() => {
                        this.setState({selected: 3, movies: [], scope: "tv"});

                    }}>
                        <Text>TV Shows</Text>
                    </Button>
                </Segment>

                {this.renderSearchInfo()}

                {this.renderContent(this.state.selected)}
            </Container>
        );
    }
}