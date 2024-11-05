import { useFetchItemsQuery } from "../services/api/sports";
import { useParams } from "react-router-dom";
import LiveSports from "../components/common/live-sports";
import { transformData } from "../utils";
import { useEffect, useState } from "react";
import { apiRoutes } from "../utils/api-routes";

const Sports = () => {
  const { id } = useParams();
  const { data,  isLoading, isFetching } = useFetchItemsQuery(
    `${apiRoutes.sports}/${id}`
  );
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    if (data?.status) {
      const res = transformData(data?.data);
      setTransformedData(res);
    }
  }, [data]);

  if (isLoading || isFetching || !transformData.length)
    return <h3 className="text-text-dark font-bold text-center">Loading...</h3>;

  return (
    <div className="text-text-dark pb-6 flex px-2 w-full flex-col gap-4">
      <div>
        <img
          src={
            id == 4
              ? "https://images.staticcontent.io/casino/banner/Cricket-banner.jpg"
              : id == 1
              ? "https://images.staticcontent.io/casino/banner/Soccer-banner.jpg"
              : id == 2
              ? "https://images.staticcontent.io/casino/banner/Tennis-banner.jpg"
              : ""
          }
        />
      </div>
      <div>
        <LiveSports liveStats={transformedData} id={+id} />
      </div>
    </div>
  );
};

export default Sports;
