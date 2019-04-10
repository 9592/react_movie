import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';


function Movie ({title,poster}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({title, poster})
{
    return (
        <img src={poster} alt="Movie Poster" />
    )
}



Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}


export default Movie;

/*
class Movie extends Component{


    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        synopsis : PropTypes.string.isRequireddfadsf
    }

    render(){
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
*/
/*
class MoviePoster extends Component{

    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render(){
        return (
            <img src={this.props.poster} alt="Moive Poster" />
        )
    }

}
*/
