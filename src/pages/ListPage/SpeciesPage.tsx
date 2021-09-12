import { useEffect } from "react";
import { ListPageContent } from "components";
import { useFetchLazy } from "hooks";
import { GetSpecies } from "types";
import { API_GET_SPECIE } from "api/end-points";

const SpeciesPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetSpecies>();

  useEffect(() => {
    fetchData(API_GET_SPECIE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error</p>;

  return (
    <ListPageContent
      data={data}
      loading={loading}
      fetchData={fetchData}
      fetchingUrl={API_GET_SPECIE}
      title="Species"
    />
  );
};

export default SpeciesPage;
