

const initialState = {
  movies: [],   //favs
  moviesLoaded: [],  //lista pelis
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "ADD_MOVIE_FAVORITE":
        return {
            ...state,
            movies: [...state.movies, action.payload]
        }

        case "GET_MOVIES":
        return {
            ...state,
            moviesLoaded: action.payload.Search
        }


        case "REMOVE_MOVIE_FAVORITE":

        return {
            ...state,
            movies: state.movies.filter(item => item.title !== action.payload.title)
        }

        case "GET_MOVIE_DETAIL":

        return {
            ...state,
            movieDetail: action.payload
        }

        default: return state;

    }
}

export default rootReducer;
