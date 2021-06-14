import { useState } from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import Modal from "./Modal";
const MovieList = () => {
  const [watchedSearch, setWatchedSearch] = useState("");
  const [unwatchedSearch, setUnwatchedSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const movies = useSelector((state) => state.movies);
  const watchedMovies = movies
    .filter(
      (movie) =>
        movie.watched &&
        movie.name.toLowerCase().includes(watchedSearch.toLowerCase())
    )
    .map((movie) => (
      <MovieItem setShowModal={setShowModal} key={movie.id} movie={movie} />
    ));
  const unwatchedMovies = movies
    .filter(
      (movie) =>
        !movie.watched &&
        movie.name.toLowerCase().includes(unwatchedSearch.toLowerCase())
    )
    .map((movie) => (
      <MovieItem setShowModal={setShowModal} key={movie.id} movie={movie} />
    ));
  return (
    <div class="container mx-auto">
      <div class="flex mb-4">
        <div class="w-1/2  h-12">
          <div class="uppercase tracking-wide text-sm text-grey-200 font-semibold">
            WatchList
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {unwatchedMovies.length}
            </span>
          </div>
          <table class="rounded-t-lg m-5 w-5/6  bg-gray-200 text-gray-800">
            <tr class="text-left border-b-2 border-gray-300">
              <td>
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight"
                  onChange={(e) => setUnwatchedSearch(e.target.value)}
                  placeholder="search here"
                />
              </td>
              <td></td>
            </tr>
            <tbody>{unwatchedMovies}</tbody>
          </table>
        </div>
        <div class="w-1/2  h-12">
          <div class="uppercase tracking-wide text-sm text-grey-200 font-semibold">
            Watched
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {watchedMovies.length}
            </span>
          </div>
          <table class="rounded-t-lg m-5 w-5/6  bg-gray-300 text-gray-800">
            <thead>
              <tr class="text-left border-b-2 border-gray-500">
                <td>
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight"
                    onChange={(e) => setWatchedSearch(e.target.value)}
                    placeholder="search here"
                  />
                </td>
              </tr>
            </thead>
            <tbody>{watchedMovies}</tbody>
          </table>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default MovieList;
