import { useState, useEffect } from "react";

function useFetch<T>(url: string): {
  error: unknown;
  loading: boolean;
  data: T | undefined;
} {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const data = await fetch(url);
        const result = await data.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
