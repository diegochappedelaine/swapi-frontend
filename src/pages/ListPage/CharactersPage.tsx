import { useEffect } from "react";
import { Loading, SearchResultElement, ListPageLayout } from "components";
import { useFetchLazy } from "hooks";
import { API_GET_PEOPLE } from "api/end-points";
import { GetCharacters, SwapiRessources } from "types";
import { retreiveDataTypeAndIdFromUrl, retreiveLastParamFromUrl } from "utils";
import { UnorderedList, Button, Center } from "@chakra-ui/react";

const CharactersPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetCharacters>();

  useEffect(() => {
    fetchData(API_GET_PEOPLE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error</p>;

  return (
    <ListPageLayout title="Characters">
      {loading && <Loading />}
      <UnorderedList styleType={"none"} ml={0}>
        {!loading &&
          data?.results?.map((result, index) => {
            const { id, dataType } = retreiveDataTypeAndIdFromUrl(result.url);
            return (
              <SearchResultElement
                key={index}
                url={`/${dataType}/${id}`}
                element={result}
                dataType={dataType as SwapiRessources}
              >
                {result.name}
              </SearchResultElement>
            );
          })}
      </UnorderedList>
      {data && (
        <Center mb={10}>
          <Button
            mr={6}
            disabled={!data.previous}
            onClick={() =>
              data?.previous &&
              fetchData(
                `${API_GET_PEOPLE}${retreiveLastParamFromUrl(data.previous)}`
              )
            }
          >
            Prev
          </Button>
          <Button
            disabled={!data.next}
            onClick={() =>
              data?.next &&
              fetchData(
                `${API_GET_PEOPLE}${retreiveLastParamFromUrl(data.next)}`
              )
            }
          >
            Next
          </Button>
        </Center>
      )}
    </ListPageLayout>
  );
};

export default CharactersPage;
