import { useFetch } from "hooks";
import { API_GET_STARSHIP } from "api/end-points";
import { GetStarships } from "types";

const PlanetsPage = () => {
  const { data, loading, error } = useFetch<GetStarships>(API_GET_STARSHIP);

  console.log(data);

  return <div></div>;
};

export default PlanetsPage;
