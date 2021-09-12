import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { API_GET_FILM } from "api/end-points";
import { Film } from "types";
import {
  ElementPageLayout,
  Loading,
  DisplayInformationsCard,
  ElementFetchingSection,
  ErrorComponent,
} from "components";
import { Text } from "@chakra-ui/react";

const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: film,
    loading,
    error,
  } = useFetch<Film>(`${API_GET_FILM}/${id}`);

  const formatedData = [
    { label: "Title", value: film?.title },
    { label: "Episode", value: film?.episode_id },
    { label: "Director", value: film?.director },
    { label: "Producers", value: film?.producer },
    {
      label: "Release date",
      value:
        film?.release_date && new Date(film?.release_date).toLocaleDateString(),
    },
  ];

  return (
    <ElementPageLayout title={film?.title || ""}>
      {loading && <Loading />}
      {error && <ErrorComponent />}
      <Text maxW={"lg"} mx={"auto"} textAlign={"center"} mb={8}>
        {film?.opening_crawl}
      </Text>
      <DisplayInformationsCard informations={formatedData} />
      {!!film?.characters.length && (
        <ElementFetchingSection
          sectionName={`${film.title}'s characters`}
          urls={film.characters}
        />
      )}
      {!!film?.planets.length && (
        <ElementFetchingSection
          sectionName={`${film.title}'s planets`}
          urls={film.planets}
        />
      )}
      {!!film?.starships.length && (
        <ElementFetchingSection
          sectionName={`${film.title}'s starships`}
          urls={film.starships}
        />
      )}
      {!!film?.vehicles.length && (
        <ElementFetchingSection
          sectionName={`${film.title}'s vehicles`}
          urls={film.vehicles}
        />
      )}
      {!!film?.species.length && (
        <ElementFetchingSection
          sectionName={`${film.title}'s species`}
          urls={film.species}
        />
      )}
    </ElementPageLayout>
  );
};

export default FilmPage;
