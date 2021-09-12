import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_PEOPLE } from "api/end-points";
import { Character } from "types";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Character>(
    `${API_GET_PEOPLE}/${id}`
  );

  console.log(data);

  return <div></div>;
};

export default CharacterPage;
