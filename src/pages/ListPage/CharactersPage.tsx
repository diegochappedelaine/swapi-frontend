import { useEffect } from "react";
import { ListPageContent, ErrorComponent } from "components";
import { useFetchLazy } from "hooks";
import { GetCharacters } from "types";
import { API_GET_PEOPLE } from "api/end-points";

const CharactersPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetCharacters>();

  useEffect(() => {
    fetchData(API_GET_PEOPLE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <ErrorComponent />;

  return (
    <ListPageContent
      data={data}
      loading={loading}
      fetchData={fetchData}
      fetchingUrl={API_GET_PEOPLE}
      title="Characters"
    />
  );
};

export default CharactersPage;
