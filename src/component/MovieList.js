import { useState } from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
const MovieList = () => {
  const [watchedSearch, setWatchedSearch] = useState("");
  const [unwatchedSearch, setUnwatchedSearch] = useState("");

  const movies = useSelector((state) => state.movies);
  const watchedMovies = movies
    .filter(
      (movie) =>
        movie.watched &&
        movie.name.toLowerCase().includes(watchedSearch.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} />);
  const unwatchedMovies = movies
    .filter(
      (movie) =>
        !movie.watched &&
        movie.name.toLowerCase().includes(unwatchedSearch.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} />);
  return (
    <>
      <h3>WatchList ({unwatchedMovies.length})</h3>
      <table>
        <thead>
          <th></th>
          <th>
            <input onChange={(e) => setUnwatchedSearch(e.target.value)} />
          </th>
        </thead>
        <tbody>{unwatchedMovies}</tbody>
      </table>
      <h3>Watched ({watchedMovies.length})</h3>
      <table>
        <thead>
          <th></th>
          <th>
            <input onChange={(e) => setWatchedSearch(e.target.value)} />
          </th>
        </thead>
        <tbody>{watchedMovies}</tbody>
      </table>
    </>
  );
};

export default MovieList;
