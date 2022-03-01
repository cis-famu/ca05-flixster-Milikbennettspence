
import React, {Component} from 'react';
import axios from "axios";
import MovieCard from "./MovieCard";


class PlayingList extends Component {
    constructor(props){
        super(props);
        this.state = { movies: [] };
    }
    componentDidMount() {
        const BEST_SELLER_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;

        const getMovies= async () => {

            await axios.get(BEST_SELLER_URL)
                .then(response =>{
                    this.setState({movies: response.data.results});
                }).catch((err) =>{
                    console.log("Fetch Error: " + err)
                });
        }
        getMovies();

    }

    render() {
        return (
            <div className="row row-cols-sm-2 row-cols-md-5 row-cols-xxl-6">

                {
                    this.state.movies.map(function (movie) {
                        return (
                            <MovieCard movie={movie} key={movie["movie.id"]} />
                        )
                    })
                }

            </div>
        );
    }
}

export default PlayingList;

