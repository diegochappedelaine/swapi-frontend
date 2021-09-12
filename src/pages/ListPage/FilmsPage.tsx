import { useEffect } from "react";
import { ListPageContent } from "components";
import { useFetchLazy } from "hooks";
import { GetFilms } from "types";
import { API_GET_FILM } from "api/end-points";

const FilmsPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetFilms>();

  useEffect(() => {
    fetchData(API_GET_FILM);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error</p>;

  return (
    <ListPageContent
      data={data}
      loading={loading}
      fetchData={fetchData}
      fetchingUrl={API_GET_FILM}
      title="Movies"
    />
  );
};

export default FilmsPage;
