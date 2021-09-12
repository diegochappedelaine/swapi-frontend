import { useState } from "react";

function useFetchLazy<T = unknown>(): {
  error: unknown;
  loading: boolean;
  data: T | undefined;
  fetchData: (url: string) => Promise<() => void>;
} {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const result = await data.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
    const timeout = setTimeout(() => setLoading(false), 200);

    return () => {
      clearTimeout(timeout);
    };
  };
  return { error, loading, data, fetchData };
}

export default useFetchLazy;
