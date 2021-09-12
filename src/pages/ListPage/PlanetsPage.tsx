import { useFetch } from "hooks";
import { API_GET_PLANET } from "api/end-points";
import { GetPlanets } from "types";

const PlanetsPage = () => {
  const { data, loading, error } = useFetch<GetPlanets>(API_GET_PLANET);

  console.log(data);

  return <div></div>;
};

export default PlanetsPage;
