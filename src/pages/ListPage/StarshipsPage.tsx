import { useEffect } from "react";
import { ListPageContent } from "components";
import { useFetchLazy } from "hooks";
import { GetStarships } from "types";
import { API_GET_STARSHIP } from "api/end-points";

const PlanetsPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetStarships>();

  useEffect(() => {
    fetchData(API_GET_STARSHIP);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error</p>;
  return (
    <ListPageContent
      data={data}
      loading={loading}
      fetchData={fetchData}
      fetchingUrl={API_GET_STARSHIP}
      title="Starships"
    />
  );
};

export default PlanetsPage;
