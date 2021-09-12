import {
  Loading,
  SearchResultElement,
  ListPageLayout,
  Pagination,
} from "components";
import { retreiveDataTypeAndIdFromUrl, retreiveLastParamFromUrl } from "utils";
import { UnorderedList } from "@chakra-ui/react";
import { SwapiResponseScheme, SwapiRessources } from "types";

type DefaultDataScheme = SwapiResponseScheme & {
  results: { url: string; name?: string; title?: string }[];
};

type ListPageContentProps = {
  data: DefaultDataScheme | undefined;
  loading: boolean;
  fetchData: (url: string) => Promise<() => void>;
  fetchingUrl: string;
  title: string;
};

const ListPageContent: React.FC<ListPageContentProps> = ({
  data,
  loading,
  fetchData,
  fetchingUrl,
  title,
}) => {
  return (
    <ListPageLayout title={title}>
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
                `${fetchingUrl}${retreiveLastParamFromUrl(data.previous)}`
              );
            }
          }}
          toNext={() => {
            if (data?.next) {
              fetchData(`${fetchingUrl}${retreiveLastParamFromUrl(data.next)}`);
            }
          }}
        />
      )}
    </ListPageLayout>
  );
};

export default ListPageContent;
