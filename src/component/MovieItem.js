import { useDispatch } from "react-redux";
import { updateMovie, deleteMovie } from "../store/actions";
const MovieItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, watched } = props.movie;
  return (
    <tr>
      <td
        onClick={() => {
          props.setShowModal(props.movie);
        }}
        class="px-4 py-3"
      >
        {name}
      </td>
      <td class="px-4 py-3">
        <button
          onClick={() => {
            dispatch(updateMovie(id));
          }}
        >
          {watched ? "Unwatch" : "Watched"}
        </button>
      </td>
      <td class="px-4 py-3">
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
