import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_STARSHIP } from "api/end-points";
import { Sharship } from "types";

import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
  ElementFetchingSection,
  ErrorComponent,
} from "components";

const StarshipPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: starship,
    loading,
    error,
  } = useFetch<Sharship>(`${API_GET_STARSHIP}/${id}`);

  const formatedData = [
    { label: "Name", value: starship?.name },
    { label: "Model", value: starship?.model },
    { label: "Manufacturer", value: starship?.manufacturer },
    { label: "Starship class", value: starship?.starship_class },
    {
      label: "Max atmosphering speed",
      value: starship?.max_atmosphering_speed,
    },
    { label: "Hyperdrive rating", value: starship?.hyperdrive_rating },
    { label: "Cargo capacity", value: starship?.cargo_capacity },
    { label: "Crew", value: starship?.crew },
    { label: "Cost (in credits)", value: starship?.cost_in_credits },
  ];

  return (
    <ElementPageLayout title={starship?.name || ""}>
      {loading && <Loading />}
      {error && <ErrorComponent />}
      <DisplayInformationsCard informations={formatedData} />
      {!!starship?.films.length && (
        <ElementFetchingSection
          sectionName={`${starship.name}'s Films appearance`}
          urls={starship.films}
        />
      )}
      {!!starship?.pilots.length && (
        <ElementFetchingSection
          sectionName={`${starship.name}'s known pilots`}
          urls={starship.pilots}
        />
      )}
    </ElementPageLayout>
  );
};

export default StarshipPage;
