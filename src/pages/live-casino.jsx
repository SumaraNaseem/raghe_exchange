import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchCasinoListQuery } from "../services/api/live-casino";
import CasinoCard from "../components/common/casino-card";
import Select from "../components/common/select";
import { useFetchProviderQuery } from "../services/api/provider";
import { apiRoutes } from "../utils/api-routes";

const CasinoList = () => {
  const [page, setPage] = useState(1);
  const [provider, setProvider] = useState("");
  const [type, setType] = useState("");
  const [list, setList] = useState([]);
  const [providerList, setProviderList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const handleProviderSelect = (value) => {
    setProvider(value);
  };

  const handleProviderCategory = (value) => {
    setType(value);
  };

  const { data, error, isLoading, isFetching } = useFetchCasinoListQuery({
    page,
    provider,
    type,
  });

  const {
    data: dataProviderList,
    error: errorProviderList,
    isLoading: isLoadingProviderList,
    // isFetching: isFetchingProviderList,
  } = useFetchProviderQuery(apiRoutes.providerList);

  useEffect(() => {
    if (provider || type) {
      if (data?.data?.length > 0) {
        setList(() => data?.data);
      }
    }

    if (!provider || !type) {
      if (data?.data?.length > 0) {
        setList((prev) => [...prev, ...data.data]);
      }
    }
  }, [data]);

  useEffect(() => {
    if (dataProviderList?.status && dataProviderList?.data) {
      setProviderList(dataProviderList?.data?.providers || []);
      setCategoryList(dataProviderList?.data?.categary || []);
    }
  }, [dataProviderList]);

  const fetchMoreData = () => {
    console.log("Fetching more data...");
    if (!isFetching && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (isLoading && page === 1)
    return <div className="text-text-dark">Loading...</div>;
  if (isFetching && (provider || type))
    return <div className="text-text-dark">Loading...</div>;

  if (error)
    return (
      <div className="text-lg text-accent-light">Error: {error.message}</div>
    );
  if (errorProviderList)
    return (
      <div className="text-lg text-accent-light">Error: {error.message}</div>
    );
  if (list?.length === 0) return null;

  return (
    <div className="py-0">
      <div className="bg-primary py-1 my-1 px-4 mx-2">Casino</div>
      <div className="flex justify-end px-3 gap-4 py-1">
        <Select
          options={providerList}
          value={provider}
          onChange={handleProviderSelect}
          placeholder="Select a provider"
          isLoading={isLoadingProviderList}
          error={errorProviderList}
        />
        <Select
          options={categoryList}
          value={type}
          onChange={handleProviderCategory}
          placeholder="Select a category"
          isLoading={isLoadingProviderList}
          error={errorProviderList}
        />
      </div>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchMoreData}
        hasMore={
          provider || type ? false : list?.length < data?._meta?.totalCount
        }
        loader={<div className="text-text-dark">Loading more...</div>}
        endMessage={<div className="text-text-dark">No more items to load</div>}
        height={600}
      >
        <div className="flex justify-between gap-2 flex-wrap border-2 border-solid">
          <CasinoCard data={list} />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CasinoList;
