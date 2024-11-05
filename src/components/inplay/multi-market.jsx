import { useMemo } from "react";
import LiveSports from "../common/live-sports";

/* eslint-disable react/prop-types */
const MultiMarket = ({
  cricketData: liveCricketData,
  soccerData: liveSoccerData,
  tennisData: liveTennisData,
  placeBet,
  handleBet,
}) => {
  const cricketData = useMemo(() => {
    return liveCricketData.filter((match) => match.isSelected === true);
  }, [liveCricketData]);

  const soccerData = useMemo(() => {
    return liveSoccerData.filter((match) => match.isSelected === true);
  }, [liveSoccerData]);

  const tennisData = useMemo(() => {
    return liveTennisData.filter((match) => match.isSelected === true);
  }, [liveTennisData]);

  return (
    <div>
      <LiveSports
        liveStats={cricketData}
        id={4}
        resize={true}
        placeBet={placeBet}
        handleBet={handleBet}
      />
      <LiveSports
        liveStats={soccerData}
        id={1}
        resize={true}
        placeBet={placeBet}
        handleBet={handleBet}
      />
      <LiveSports
        liveStats={tennisData}
        id={2}
        resize={true}
        placeBet={placeBet}
        handleBet={handleBet}
      />
      {["Greyhound Racing", "Horse Racing"].map((title, index) => {
        return (
          <div key={index}>
            <div className="bg-primary-light px-2 py-1 border-t-[1px] border-[#dee2e6]">
              <h3 className="text-sm text-text">{title}</h3>
            </div>
            <div className="flex items-center px-4 py-1 overflow-x-scroll no-scrollbar gap-3">
              <button className="text-xs rounded-md text-text-dark font-bold px-2 py-1 border-[1px] border-solid border-text-light text-nowrap">
                Coming Up
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultiMarket;
