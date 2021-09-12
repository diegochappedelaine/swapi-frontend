import { useFetch } from "hooks";
import { API_GET_VEHICULE } from "api/end-points";
import { GetVehicles } from "types";

const PlanetsPage = () => {
  const { data, loading, error } = useFetch<GetVehicles>(API_GET_VEHICULE);

  console.log(data);

  return <div></div>;
};

export default PlanetsPage;
