import moviesData from "../movies";
import { ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from "./actions";
const initialState = {
  movies: moviesData,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const newMovie = action.payload.newMovie;
      newMovie.watched = false;
      newMovie.id = state.movies[state.movies.length - 1] + 1;
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };
    case UPDATE_MOVIE:
      const updatedMovies = state.movies.map((movie) => {
        if (movie.id === action.payload.movieID) movie.watched = !movie.watched;
        return movie;
      });
      return {
        ...state,
        movies: updatedMovies,
      };
    case DELETE_MOVIE:
      const deletedMovies = state.movies.filter(
        (movie) => movie.id !== action.payload.movieID
      );
      return {
        ...state,
        movies: deletedMovies,
      };
    default:
      return state;
  }
};
export default reducer;
