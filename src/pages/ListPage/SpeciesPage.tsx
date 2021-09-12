import { useFetch } from "hooks";
import { API_GET_SPECIE } from "api/end-points";
import { GetSpecies } from "types";

const SpeciesPage = () => {
  const { data, loading, error } = useFetch<GetSpecies>(API_GET_SPECIE);

  console.log(data);

  return <div></div>;
};

export default SpeciesPage;
