import { useDispatch } from "react-redux";
import { updateMovie, deleteMovie } from "../store/actions";
const MovieItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, watched } = props.movie;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button
          onClick={() => {
            dispatch(updateMovie(id));
          }}
        >
          {watched ? "Unwatch" : "Watched"}
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            dispatch(deleteMovie(id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default MovieItem;
