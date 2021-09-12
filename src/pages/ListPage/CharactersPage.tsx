import { useFetch } from "hooks";
import { API_GET_PEOPLE } from "api/end-points";
import { GetCharacters } from "types";

const CharactersPage = () => {
  const { data, loading, error } = useFetch<GetCharacters>(API_GET_PEOPLE);

  console.log(data);

  return <div></div>;
};

export default CharactersPage;
