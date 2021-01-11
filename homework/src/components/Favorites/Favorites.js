import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../../actions/index";
import { Link } from 'react-router-dom';
import {removeMovieFavorite} from "../../actions/index.js"

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 style={{fontFamily: "Oxygen", fontWeight: "bolder", color: "#707070", fontSize: 25, textAlign: 'center',  marginRight: '-2%'}}>Your movies</h2>
        <ul style={{listStyle: 'none', textAlign: 'center', marginTop: 52}}>
          {this.props.movies.map((item,i) => {
              return (
                  <div style={{textAlign: 'center', paddingBottom: 33, marginTop: 5}} key={i}>
                    <Link style={{textDecoration: "none", color: "#808080"}} to= {`/movie/${item.id}`}>
                      {item.title}
                    </Link>
                    <button className='x' onClick={() => this.props.removeMovieFavorite({title: item.title, id: item.imdbID})}>
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
