
import React from 'react';


function MovieCard(props) {
    let movie = props.movie;
    const Base_url = 'http://image.tmdb.org/t/p/w500' + movie.poster_path;
    return (

        <div className="col mb-3">
            <div className="card h-100 position-relative">
                <img className="card-img-top movie-mg mx-auto pt-1" src={Base_url} alt=""/>
                <div className="card-body movie-card-details">
                    <h5 className="card-title movie-title">{movie.original_title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted movie-release-date">{movie.release_date}</h6>
                    <p className="card-text">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}
//1

export default MovieCard;
