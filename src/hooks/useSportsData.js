import { useEffect, useState } from "react";
import { useFetchItemsQuery } from "../services/api/sports";
import { transformData } from "../utils";

export const useLiveSportsData = (route) => {
  const { data, isLoading, isFetching } = useFetchItemsQuery(route);
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    if (data?.status) {
      const filteredData = transformData(data.data).filter((match) => {
        if (match.status === "Live Now" || match.status === "Suspended") {
          return match;
        }
      });
      setTransformedData(filteredData);
    }
  }, [data]);

  return { transformedData, isLoading, isFetching };
};

export const useSportsData = (route) => {
  const { data, isLoading, isFetching } = useFetchItemsQuery(route);
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    if (data?.status) {
      setTransformedData(transformData(data.data.slice(0, 4)));
    }
  }, [data]);

  return { transformedData, isLoading, isFetching };
};
