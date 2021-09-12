import { useEffect } from "react";
import { ListPageContent, ErrorComponent } from "components";
import { useFetchLazy } from "hooks";
import { GetPlanets } from "types";
import { API_GET_PLANET } from "api/end-points";

const PlanetsPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetPlanets>();

  useEffect(() => {
    fetchData(API_GET_PLANET);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <ErrorComponent />;

  return (
    <ListPageContent
      data={data}
      loading={loading}
      fetchData={fetchData}
      fetchingUrl={API_GET_PLANET}
      title="Planets"
    />
  );
};

export default PlanetsPage;
