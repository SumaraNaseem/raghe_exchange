import SportsIcon from "../../assets/sports-icons.png";
import LiveSports from "../common/live-sports";
import { apiRoutes } from "../../utils/api-routes";
import { useLiveSportsData } from "../../hooks/useSportsData";
import MultiMarket from "./multi-market";
import { useState } from "react";

const sportsData = [
  { name: "Watch Live", key: "watchLive", position: "-3263px", liveCount: 0 },
  { name: "All Games", key: "allGames", position: "-988px", liveCount: 0 },
  { name: "Cricket", key: "cricket", position: "-688px", liveCount: 2 },
  { name: "Soccer", key: "soccer", position: "-2188px", liveCount: 5 },
  { name: "Tennis", key: "tennis", position: "-1790px", liveCount: 2 },
  { name: "Horse", key: "horse", position: "-1437px", liveCount: 3 },
  { name: "Grey Hound", key: "greyHound", position: "-1337px", liveCount: 7 },
  { name: "Multi Market", key: "multiMarket", position: "9px", liveCount: 0 },
];

const BettingList = () => {
  const [placeBet, setPlaceBet] = useState(null);

  const handleBet = (match) => {
    setPlaceBet(match);
  };

  const [state, setState] = useState({
    watchLive: true,
    allGames: false,
    cricket: false,
    soccer: false,
    tennis: false,
    horse: false,
    greyHound: false,
    multiMarket: false,
  });

  const handleSportClick = (key) => {
    setState({
      watchLive: false,
      allGames: false,
      cricket: false,
      soccer: false,
      tennis: false,
      horse: false,
      greyHound: false,
      multiMarket: false,
      [key]: true,
    });
  };

  const { transformedData: cricketData, isLoading: isLoadingCricket } =
    useLiveSportsData(`${apiRoutes.sports}/4`);
  const { transformedData: soccerData, isLoading: isLoadingSoccer } =
    useLiveSportsData(`${apiRoutes.sports}/1`);
  const { transformedData: tennisData, isLoading: isLoadingTennis } =
    useLiveSportsData(`${apiRoutes.sports}/2`);

  if (isLoadingCricket || isLoadingSoccer || isLoadingTennis) {
    return <h3 className="text-center">Loading...</h3>;
  }

  return (
    <div className="w-full lg:w-[80%] relative">
      <div className="bg-primary-light border-2 border-text border-solid z-10 relative px-2 py-1 border-t-[1px] border-[#dee2e6]">
        <h3 className="text-sm text-text">In-Play</h3>
      </div>
      <div className="h-4 absolute left-0 border-2 border-text border-solid z-[10] bg-text w-full"></div>
      <div className="flex justify-between px-2 py-1 min-w-[200px] gap-4 overflow-x-scroll no-scrollbar items-center">
        {sportsData.map((sport, index) => (
          <div
            key={index}
            className="flex flex-col relative cursor-pointer z-[0] hover:scale-105 transition-all justify-center items-center gap-2"
            onClick={() => handleSportClick(sport.key)}
          >
            <div
              className="bg-cover relative block bg-center h-[60px] w-[60px]"
              style={{
                backgroundImage: `url(${SportsIcon})`,
                backgroundPosition: `center ${sport.position}`,
              }}
            ></div>
            {sport.liveCount > 0 && (
              <div className="absolute left-10 bottom-12 text-xs rounded-sm flex justify-center items-center bg-accent text-text h-[14px] w-[14px]">
                {sport.liveCount}
              </div>
            )}
            <h3 className="font-bold text-nowrap text-sm">{sport.name}</h3>
          </div>
        ))}
      </div>

      {(state.allGames || state.watchLive || state.cricket) && (
        <LiveSports
          liveStats={cricketData}
          id={4}
          resize={true}
          placeBet={placeBet}
          handleBet={handleBet}
        />
      )}
      {(state.allGames || state.watchLive || state.soccer) && (
        <LiveSports
          liveStats={soccerData}
          id={1}
          resize={true}
          placeBet={placeBet}
          handleBet={handleBet}
        />
      )}

      {(state.allGames || state.watchLive || state.tennis) && (
        <LiveSports
          liveStats={tennisData}
          id={2}
          resize={true}
          placeBet={placeBet}
          handleBet={handleBet}
        />
      )}

      {["Greyhound Racing", "Horse Racing"].map((title, index) => {
        return index === 0 &&
          (state.allGames || state.watchLive || state.horse) ? (
          <div key={index}>
            <div className="bg-primary-light px-2 py-1 border-t-[1px] border-[#dee2e6]">
              <h3 className="text-sm text-text">{title}</h3>
            </div>
            <div className="flex items-center px-4 py-1 overflow-x-scroll no-scrollbar gap-3">
              <button className="text-xs rounded-md text-text-dark font-bold px-2 py-1 border-[1px] border-solid border-text-light text-nowrap">
                Coming Up
              </button>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 flex gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={
                        title === "Greyhound Racing"
                          ? "https://images.staticcontent.io/casino/banner/images/dog.svg"
                          : "https://images.staticcontent.io/casino/banner/images/horse.svg"
                      }
                      className="max-w-6 max-h-6"
                      alt={title.toLowerCase()}
                    />
                    <h3 className="text-xs text-text-dark text-nowrap font-bold">
                      22:59 Finger Lakes (US) 21st Aug
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : index === 1 &&
          (state.allGames || state.watchLive || state.greyHound) ? (
          <div key={index}>
            <div className="bg-primary-light px-2 py-1 border-t-[1px] border-[#dee2e6]">
              <h3 className="text-sm text-text">{title}</h3>
            </div>
            <div className="flex items-center px-4 py-1 overflow-x-scroll no-scrollbar gap-3">
              <button className="text-xs rounded-md text-text-dark font-bold px-2 py-1 border-[1px] border-solid border-text-light text-nowrap">
                Coming Up
              </button>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 flex gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={
                        title === "Greyhound Racing"
                          ? "https://images.staticcontent.io/casino/banner/images/dog.svg"
                          : "https://images.staticcontent.io/casino/banner/images/horse.svg"
                      }
                      className="max-w-6 max-h-6"
                      alt={title.toLowerCase()}
                    />
                    <h3 className="text-xs text-text-dark text-nowrap font-bold">
                      22:59 Finger Lakes (US) 21st Aug
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        );
      })}

      {state.multiMarket && (
        <MultiMarket
          cricketData={cricketData}
          soccerData={soccerData}
          tennisData={tennisData}
          placeBet={placeBet}
          handleBet={handleBet}
        />
      )}
    </div>
  );
};

export default BettingList;
