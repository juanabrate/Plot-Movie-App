import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../../actions/index";
import { Link } from 'react-router-dom';
import {removeMovieFavorite} from "../../actions/index.js"

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies.map((item,i) => {
              return (
                  <div key={i}>
                    <Link to= {`/movie/${item.id}`}>
                      {item.title}
                    </Link>
                    <button onClick={() => this.props.removeMovieFavorite({title: item.title, id: item.imdbID})}>
                       X
                    </button>
                  </div>
              )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
};

function mapDispatchToProps(dispatch) {

    return {
        removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
    }

};


export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
