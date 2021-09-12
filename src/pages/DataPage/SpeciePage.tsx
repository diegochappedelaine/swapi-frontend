import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_SPECIE } from "api/end-points";
import { Specie } from "types";

import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
  ElementFetchingSection,
  ErrorComponent,
} from "components";

const SpeciePage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: specie,
    loading,
    error,
  } = useFetch<Specie>(`${API_GET_SPECIE}/${id}`);

  const formatedData = [
    { label: "Name", value: specie?.name },
    { label: "Language", value: specie?.language },
    { label: "Classification", value: specie?.classification },
    { label: "Designation", value: specie?.designation },
    { label: "Average lifespan", value: specie?.average_lifespan },
    { label: "Average height", value: specie?.average_height },
    { label: "Eyes colors", value: specie?.eye_colors },
    { label: "Hair colors", value: specie?.hair_colors },
    { label: "Skin colors", value: specie?.skin_colors },
  ];

  return (
    <ElementPageLayout title={specie?.name || ""}>
      {loading && <Loading />}
      {error && <ErrorComponent />}
      <DisplayInformationsCard informations={formatedData} />
      {!!specie?.people.length && (
        <ElementFetchingSection
          sectionName={`Known ${specie.name}s`}
          urls={specie.people}
        />
      )}
      {!!specie?.films.length && (
        <ElementFetchingSection
          sectionName={`${specie.name}s appearance`}
          urls={specie.films}
        />
      )}
    </ElementPageLayout>
  );
};

export default SpeciePage;
