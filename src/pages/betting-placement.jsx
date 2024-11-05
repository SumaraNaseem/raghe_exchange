import { useMemo, useState } from "react";
import useSockets from "../hooks/useSockets";
import { useSocket } from "../layouts/socket-provider";
import { useParams } from "react-router-dom";
import { useFetchItemsQuery } from "../services/api/sports";
import { apiRoutes } from "../utils/api-routes";
import MatchOddsDetails from "../components/matches/match-odds";
import BookMakerDetails from "../components/matches/book-maker";
import FancyGameDetails from "../components/matches/new-fancy";

const BettingPlacement = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [betType, setBetType] = useState(null);
  const [betPrice, setBetPrice] = useState(null);
  const handleBetPrice = (price) => {
    setBetPrice(price);
  };

  const handleActiveIndex = (indexVal) => {
    setActiveIndex(indexVal);
  };

  const handleBetType = (betType) => {
    setBetType(betType);
  };

  const { connections, loading } = useSocket();
  const { id, matchId } = useParams();
  const { data: matches } = useFetchItemsQuery(`${apiRoutes.sports}/${id}`);
  const matchdetails =
    matches && Array.isArray(matches?.data)
      ? matches.data.find((element) => element.matchId == matchId)
      : null;
  const sockets = useMemo(() => {
    return [
      {
        sportsid: id,
        match: matchId,
      },
    ];
  }, [id, matchId]);
  useSockets(sockets);

  let newFancyData = [];
  if (connections?.data?.fancy && Array.isArray(connections?.data?.fancy)) {
    newFancyData = connections?.data?.fancy.filter(
      (item) => item.gtype !== "khado"
    );
    newFancyData = newFancyData.reduce((acc, obj) => {
      const gtype = obj.gtype;
      if (gtype === "fancy1") {
        if (!acc[gtype]) {
          acc[gtype] = [];
        }
        acc[gtype].push(obj);
        acc[gtype].sort((a, b) => a.SelectionId - b.SelectionId);
      } else {
        if (!acc[gtype]) {
          acc[gtype] = [];
        }
        acc[gtype].push(obj);
      }
      return acc;
    }, {});
  }

  console.log("connections", connections);
  console.log("loading", loading);

  if (loading) return <h3 className="text-text-dark">Loading...</h3>;
  return (
    <>
      <div className="w-full lg:w-[80%] ">
        <div className="flex justify-between bg-primary text-text items-center gap-3 px-3">
          <span className="text-[14px] truncate w-[150px] md:w-full  py-1.5 font-semibold">
            {" "}
            {matchdetails?.matchName} - {matchdetails?.serieseName}
          </span>
          <span className="text-[12px] text-nowrap font-semibold">
            {matchdetails?.ISTtime}
          </span>
        </div>
        {connections &&
          connections?.data?.matchOdds &&
          Array.isArray(connections?.data?.matchOdds) &&
          connections?.data?.matchOdds?.map((item, index) => (
            <MatchOddsDetails
              item={item}
              key={`${index}-matchOdds`}
              handleBetPrice={handleBetPrice}
              betPrice={betPrice}
              activeIndex={activeIndex}
              handleActiveIndex={handleActiveIndex}
              betType={betType}
              handleBetType={handleBetType}
            />
          ))}

        {connections?.data?.bookMaker &&
          Array.isArray(connections?.data?.bookMaker) &&
          connections?.data?.bookMaker.map((item, index) => (
            <BookMakerDetails
              item={item}
              key={`${index}-bookMaker`}
              handleBetPrice={handleBetPrice}
              betPrice={betPrice}
              activeIndex={activeIndex}
              handleActiveIndex={handleActiveIndex}
              betType={betType}
              handleBetType={handleBetType}
            />
          ))}
        {newFancyData &&
          Object.keys(newFancyData)
            .sort()
            .map((item, index) => (
              <FancyGameDetails
                item={item}
                matchdetails={matchdetails}
                key={`${index}-newFancyData`}
                newFancyData={newFancyData}
                handleBetPrice={handleBetPrice}
                betPrice={betPrice}
                activeIndex={activeIndex}
                handleActiveIndex={handleActiveIndex}
                betType={betType}
                handleBetType={handleBetType}
              />
            ))}
      </div>
    </>
  );
};

export default BettingPlacement;
