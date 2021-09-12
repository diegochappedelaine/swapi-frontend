import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_PLANET } from "api/end-points";
import { Planet } from "types";

const PlanetPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Planet>(`${API_GET_PLANET}/${id}`);

  console.log(data);

  return <div></div>;
};

export default PlanetPage;
