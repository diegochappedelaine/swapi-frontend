import { Form } from "components";
import { useFetchLazy } from "hooks";
import { Link } from "react-router-dom";
import { SearchResult } from "types";
import { retreiveDataTypeAndIdFromUrl } from "utils";

const HomePage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<SearchResult>();

  return (
    <div>
      <h1>Hello SWAPI</h1>
      <Form handleSubmit={fetchData} />
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data?.map((element, index) => {
        const { id, dataType } = retreiveDataTypeAndIdFromUrl(element.url);
        return (
          <li key={index}>
            <Link to={`/${dataType}/${id}`}>
              {element?.name || element?.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default HomePage;
