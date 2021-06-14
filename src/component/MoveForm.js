import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";
const MovieForm = () => {
  const [movie, setMovie] = useState({ name: "", image: "" });
  const dispatch = useDispatch();
  const handelChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(movie));
    handelReset();
  };
  const handelReset = () => {
    setMovie({ name: "", image: "" });
  };
  return (
    <form class="w-full max-w-sm" onSubmit={handelSubmit}>
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={movie.name}
          placeholder="Movie...."
          name="name"
          onChange={handelChange}
        />
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={movie.image}
          type="url"
          placeholder="Image Url"
          name="image"
          onChange={handelChange}
        />
        <button
          type="submit"
          class="bg-transparent hover:bg-blue-500 text-grey-500 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default MovieForm;
