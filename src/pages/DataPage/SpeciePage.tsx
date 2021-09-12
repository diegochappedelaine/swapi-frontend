import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_SPECIE } from "api/end-points";
import { Specie } from "types";

const SpeciePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Specie>(`${API_GET_SPECIE}/${id}`);

  console.log(data);

  return <div></div>;
};

export default SpeciePage;
