export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: { newMovie },
  };
};
export const updateMovie = (movieID) => {
  return {
    type: UPDATE_MOVIE,
    payload: { movieID },
  };
};
export const deleteMovie = (movieID) => {
  return {
    type: DELETE_MOVIE,
    payload: { movieID },
  };
};
