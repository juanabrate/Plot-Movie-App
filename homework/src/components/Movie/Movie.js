import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, addMovieFavorite } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }



    render() {
        if(Object.keys(this.props.movie).length < 1) return <h1>Cargando...</h1>
        return (
            <div className="movie-detail">
                <h1 style={{textAlign: "center", fontFamily: "Oxygen", color: "#808080"}}>{this.props.movie.Title}</h1>
                
                <h3 style={{textAlign: "center", marginTop: -10, fontFamily: "Oxygen", color: "#808080"}}>{this.props.movie.Year}</h3>
                <button className="fav1" onClick = {() => this.props.addMovieFavorite({title: this.props.movie.Title, id: this.props.movie.imdbID})}>
                  Fav
                </button>
                <p style={{textAlign: "center", marginTop: -10, width: "30%", marginLeft: "35%", marginTop: 20, lineHeight: "30px", fontSize: 17, fontFamily: "Oxygen", color: "#808080"}}>{this.props.movie.Plot}</p>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),
        addMovieFavorite: movie => dispatch(addMovieFavorite(movie))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Movie);
