import { useFetch } from "hooks";
import { API_GET_FILM } from "api/end-points";
import { GetFilms } from "types";

const FilmsPage = () => {
  const { data, loading, error } = useFetch<GetFilms>(API_GET_FILM);

  console.log(data);

  return <div></div>;
};

export default FilmsPage;
