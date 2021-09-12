import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_VEHICULE } from "api/end-points";
import { Vehicle } from "types";
import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
} from "components";

const VehiclePage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: vehicle,
    loading,
    error,
  } = useFetch<Vehicle>(`${API_GET_VEHICULE}/${id}`);

  const formatedData = [
    { label: "Name", value: vehicle?.name },
    { label: "Model", value: vehicle?.model },
    { label: "Manufacturer", value: vehicle?.manufacturer },
    { label: "Crew", value: vehicle?.crew },
    { label: "Cargo capacity", value: vehicle?.cargo_capacity },
    { label: "Consumables", value: vehicle?.consumables },
    { label: "Max atmosphering speed", value: vehicle?.max_atmosphering_speed },
  ];

  return (
    <ElementPageLayout title={vehicle?.name || ""}>
      {loading && <Loading />}
      {error && <p>Error</p>}
      <DisplayInformationsCard informations={formatedData} />
    </ElementPageLayout>
  );
};

export default VehiclePage;
