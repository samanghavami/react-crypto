import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../services/movieSlice";

function Test() {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(addMovies([{ id: 1, name: "Saman Ghavami" }]));
  }, [dispatch]);
  return (
    <div style={{ height: "80vh" }}>
      {states.length > 0 &&
        states.map((state) => {
          return state.name;
        })}
    </div>
  );
}

export default Test;
