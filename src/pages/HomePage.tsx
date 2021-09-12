import { ErrorComponent, Form, Loading, SearchResultElement } from "components";
import { useFetchLazy } from "hooks";
import { SearchResult, SwapiRessources } from "types";
import { retreiveDataTypeAndIdFromUrl } from "utils";
import { UnorderedList } from "@chakra-ui/react";

const HomePage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<SearchResult>();

  return (
    <div>
      <Form handleSubmit={fetchData} />
      {loading && <Loading />}
      {error && <ErrorComponent />}
      <UnorderedList styleType={"none"} ml={0} mb={300}>
        {data?.map((element, index) => {
          const { id, dataType } = retreiveDataTypeAndIdFromUrl(element.url);
          return (
            <SearchResultElement
              key={index}
              url={`/${dataType}/${id}`}
              element={element}
              dataType={dataType as SwapiRessources}
              id={id}
            />
          );
        })}
      </UnorderedList>
    </div>
  );
};

export default HomePage;
