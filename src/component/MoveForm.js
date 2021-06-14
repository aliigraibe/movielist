import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";
const MovieForm = () => {
  const [movie, setMovie] = useState({ name: "" });
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
    setMovie({ name: "" });
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        value={movie.name}
        placeholder="Movie...."
        name="name"
        onChange={handelChange}
      />
      <input type="submit" />
    </form>
  );
};
export default MovieForm;
