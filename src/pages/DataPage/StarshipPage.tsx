import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_STARSHIP } from "api/end-points";
import { Sharship } from "types";

const StarshipPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Sharship>(
    `${API_GET_STARSHIP}/${id}`
  );

  console.log(data);

  return <div></div>;
};

export default StarshipPage;
