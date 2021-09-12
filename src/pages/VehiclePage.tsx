import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_VEHICULE } from "api/end-points";
import { Vehicle } from "types";

const VehiclePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Vehicle>(
    `${API_GET_VEHICULE}/${id}`
  );

  console.log(data);

  return <div></div>;
};

export default VehiclePage;
