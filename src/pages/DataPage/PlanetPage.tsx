import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_PLANET } from "api/end-points";
import { Planet } from "types";

import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
  ElementFetchingSection,
  ErrorComponent,
} from "components";

const PlanetPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: planet,
    loading,
    error,
  } = useFetch<Planet>(`${API_GET_PLANET}/${id}`);

  const formatedData = [
    { label: "Name", value: planet?.name },
    { label: "Population", value: planet?.population },
    { label: "Terrains types", value: planet?.terrain },
    { label: "Climate", value: planet?.climate },
    { label: "Diameter", value: planet?.diameter },
    { label: "Gravity", value: planet?.gravity },
    { label: "Orbitual Period", value: planet?.orbital_period },
    { label: "Rotation, period", value: planet?.rotation_period },
    { label: "Water surface", value: planet?.surface_water },
  ];

  return (
    <ElementPageLayout title={planet?.name || ""}>
      {loading && <Loading />}
      {error && <ErrorComponent />}
      <DisplayInformationsCard informations={formatedData} />
      {!!planet?.films.length && (
        <ElementFetchingSection
          sectionName={`Movies including ${planet.name}`}
          urls={planet.films}
        />
      )}
      {!!planet?.residents.length && (
        <ElementFetchingSection
          sectionName={`Residents of ${planet.name}`}
          urls={planet.residents}
        />
      )}
    </ElementPageLayout>
  );
};

export default PlanetPage;
