import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_PEOPLE } from "api/end-points";
import { Character } from "types";
import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
} from "components";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: character,
    loading,
    error,
  } = useFetch<Character>(`${API_GET_PEOPLE}/${id}`);

  const formatedData = [
    { label: "Name", value: character?.name },
    { label: "Gender", value: character?.gender },
    { label: "Height", value: character?.height },
    { label: "Mass", value: character?.mass },
    { label: "Hair color", value: character?.hair_color },
    { label: "Eyes color", value: character?.eye_color },
    { label: "Skin color", value: character?.skin_color },
  ];

  return (
    <ElementPageLayout title={character?.name || ""}>
      {loading && <Loading />}
      {error && <p>Error</p>}
      <DisplayInformationsCard informations={formatedData} />
    </ElementPageLayout>
  );
};

export default CharacterPage;
