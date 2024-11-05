import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
import BookingOdds from "./booking-odds";
const LiveSports = ({ liveStats, id, resize, placeBet, handleBet }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex bg-text text-text-dark font-bold flex-col">
      <div className="bg-primary-light px-2 py-1 border-t-[1px] border-solid border-[#dee2e6]">
        <h3 className="text-sm text-text">
          {id === 4
            ? "Cricket"
            : id === 1
            ? "Soccer"
            : id === 2
            ? "Tennis"
            : ""}
        </h3>
      </div>
      {pathname === "/inplay" && liveStats?.length === 0 ? (
        <h3 className="text-sm px-2 py-1">No Live Events</h3>
      ) : (
        <>
          <div className="h-6 md:flex hidden items-center border-t-[1px] border-solid border-[#dee2e6] px-2 py-1">
            <div className="basis-[60%]"></div>
            <div className="basis-[40%] flex justify-start items-center gap-2">
              <div className="flex-grow flex justify-center items-center text-xs">
                <span>1</span>
              </div>
              <div className="flex-grow flex justify-center items-center text-xs">
                <span>X</span>
              </div>
              <div className="flex-grow flex justify-center items-center text-xs">
                <span>2</span>
              </div>
            </div>
          </div>
          {liveStats.map((item, index) => (
            <BookingOdds
              key={index}
              index={index}
              item={item}
              id={id}
              resize={resize}
              placeBet={placeBet}
              handleBet={handleBet}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default LiveSports;
