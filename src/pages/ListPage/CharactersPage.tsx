import { useEffect } from "react";
import {
  Loading,
  SearchResultElement,
  ListPageLayout,
  Pagination,
} from "components";
import { useFetchLazy } from "hooks";
import { retreiveDataTypeAndIdFromUrl, retreiveLastParamFromUrl } from "utils";
import { UnorderedList } from "@chakra-ui/react";

import { GetCharacters, SwapiRessources } from "types";
import { API_GET_PEOPLE } from "api/end-points";

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
              />
            );
          })}
      </UnorderedList>
      {data && (
        <Pagination
          canPrevious={!!data?.previous}
          canNext={!!data?.next}
          toPrevious={() => {
            if (data?.previous) {
              fetchData(
                `${API_GET_PEOPLE}${retreiveLastParamFromUrl(data.previous)}`
              );
            }
          }}
          toNext={() => {
            if (data?.next) {
              fetchData(
                `${API_GET_PEOPLE}${retreiveLastParamFromUrl(data.next)}`
              );
            }
          }}
        />
      )}
    </ListPageLayout>
  );
};

export default CharactersPage;
