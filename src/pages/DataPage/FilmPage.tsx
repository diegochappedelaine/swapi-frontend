import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_FILM } from "api/end-points";
import { Film } from "types";

const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Film>(`${API_GET_FILM}/${id}`);

  console.log(data);

  return <div></div>;
};

export default FilmPage;
