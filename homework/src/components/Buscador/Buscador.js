 import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import {getMovies, addMovieFavorite} from "../../actions/index.js";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div style={{marginTop: 53, marginLeft: '6%'}}>
            {/* <label className="label" htmlFor="title">Película: </label> */}
            <input
              style={{height: 22, width: 250, borderColor: "#484848", borderWidth: "1.5px", borderStyle: "solid", outline: "none", borderRadius: 4}}
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder="Search movies"
            />
            <button className="submit" type="submit">SEARCH</button>
          </div>
          
        </form>
        <div className="result">
          <ul className="uli">
          {this.props.movies && this.props.movies.map((item,i) => {
              return (
              <li style={{margin: 33, fontFamily:"Oxygen"}} key = {i}>
              <NavLink style={{textDecoration: "none", color: "#808080"}} to={`/movie/${item.imdbID}`}>
                {item.Title}
              </NavLink>
                <button className="fav" log = {console.log(item)} onClick = {() => this.props.addMovieFavorite({title: item.Title, id: item.imdbID})}>
                  Fav
                </button>
                <br/>
              </li>
          )})}
          </ul>
        </div>
        
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {

  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
