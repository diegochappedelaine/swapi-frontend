import { useEffect } from "react";
import { ListPageContent } from "components";
import { useFetchLazy } from "hooks";
import { GetVehicles } from "types";
import { API_GET_VEHICULE } from "api/end-points";

const PlanetsPage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<GetVehicles>();

  useEffect(() => {
    fetchData(API_GET_VEHICULE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error</p>;
  return (
    <ListPageContent
      data={data}
      loading={loading}
      fetchData={fetchData}
      fetchingUrl={API_GET_VEHICULE}
      title="Characters"
    />
  );
};

export default PlanetsPage;
