import { Form } from "components";
import { useFetchLazy } from "hooks";
import { Link } from "react-router-dom";
import { SearchResult } from "types";
import { retreiveDataTypeAndIdFromUrl } from "utils";

const HomePage = () => {
  const { data, loading, error, fetchData } = useFetchLazy<SearchResult>();

  return (
    <div>
      <Form handleSubmit={fetchData} />
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <ul>
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
      </ul>
    </div>
  );
};

export default HomePage;
