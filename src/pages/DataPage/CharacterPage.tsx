import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_PEOPLE } from "api/end-points";
import { Character } from "types";

import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
  ElementFetchingSection,
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

  console.log(character);

  return (
    <ElementPageLayout title={character?.name || ""}>
      {loading && <Loading />}
      {error && <p>Error</p>}
      <DisplayInformationsCard informations={formatedData} />
      {character?.starships.length!! && (
        <ElementFetchingSection
          sectionName={`${character.name}'s Ships`}
          urls={character.starships}
        />
      )}
      {character?.films.length!! && (
        <ElementFetchingSection
          sectionName={`${character.name}'s Films appearance`}
          urls={character.films}
        />
      )}
      {character?.homeworld.length!! && (
        <ElementFetchingSection
          sectionName={`${character.name}'s Homeworld`}
          urls={[character.homeworld]}
        />
      )}
    </ElementPageLayout>
  );
};

export default CharacterPage;
