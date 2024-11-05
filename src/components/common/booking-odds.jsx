import React, { useState } from "react";
import { BookmarkEventDestop, BookmarkEventMobile } from "./bookmark-event";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

/* eslint-disable react/prop-types */
const BookingOdds = ({ index, item, resize, id, placeBet, handleBet }) => {
  
  const [manualOdd, setManualOdd] = useState(0);
  const { pathname } = useLocation();
  const [count, setCount] = useState(500);
  const navigate = useNavigate();
  
  const handleNavigation = (id, matchId) => {
    navigate(`/game/event/${id}/${matchId}`);
  };

  const updatePlaceBetItem = (match) => {
    if (handleBet) {
      handleBet(match);
    }
  };

  const handleOddChange = (val) => {
    const value = parseInt(val, 10);
    if (!isNaN(value)) {
      setManualOdd(value);
    }
  };

  const handleOddCount = (type) => {
    setManualOdd((prev) =>
      Math.max(0, prev + (type === "INCREMENT" ? count : -count))
    );
  };

  return (
    <React.Fragment key={index}>
      <div className="h-auto md:h-6  flex md:flex-row flex-col justify-between     border-t-[1px] gap-2 items-center border-solid border-[#dee2e6] px-2 py-4">
        <div className="w-[100%] md:w-[60%]  md:basis-[60%] flex justify-between">
          <div className="flex flex-col-reverse sm:flex-row  sm:items-center items-start gap-2">
            <div className="flex justify-start px-4 gap-2">
              <span className="text-xs md:text-sm    block text-text-light sm:text-primary-dark text-nowrap">
                {item.date}
              </span>
              <span className="text-sm sm:hidden  block  text-text-light">
                l
              </span>
              <span className="text-xs md:text-sm  truncate w-[60px]    inline  text-text-light sm:hidden text-nowrap">
                {item?.seriesName}
              </span>
            </div>
            <div
              onClick={() => handleNavigation(id, item.matchId)}
              className="flex cursor-pointer  justify-start items-center gap-2"
            >
              <span className="text-sm sm:block hidden  text-text-light">
                l
              </span>

              {item?.status === "Live Now" ? (
                <div className="h-2.5 w-2.5 rounded-full bg-secondary-dark"></div>
              ) : (
                ""
              )}
              <span
                className={`text-sm ${
                  !resize
                    ? "w-[120px] md:[180px] lg:w-[220px]"
                    : "w-[120px] md:[130px] lg:w-[140px]"
                } truncate`}
              >
                {item.match}
              </span>
              <span className="text-xs lg:text-sm text-primary-light">
                {item?.status === "Live Now" ? "Live Now" : ""}
              </span>
            </div>
          </div>

          <div className="flex flex-col   gap-2 sm:flex-row sm:items-center items-end">
            <div className="flex justify-center items-center gap-2">
              {item.icons.map((icon, i) => {
                if (i === 0 && item?.status === "Live Now") {
                  return (
                    <img
                      key={i}
                      src={icon.src}
                      className={`${
                        resize
                          ? "max-h-[20px] max-w-[20px]"
                          : "max-h-[20px] max-w-[20px] md:max-h-5 md:max-w-5"
                      }`}
                      alt={icon.alt}
                    />
                  );
                }

                if (id === 4 && i === 1) {
                  return (
                    <img
                      key={i}
                      src={icon.src}
                      className={`${
                        resize
                          ? "max-h-[38px] max-w-[38px]"
                          : "max-h-[38px] max-w-[38px] md:max-h-12 md:max-w-12"
                      }`}
                      alt={icon.alt}
                    />
                  );
                }

                if (id === 4 && i === 2) {
                  return (
                    <img
                      key={i}
                      src={icon.src}
                      className={`${
                        resize
                          ? "max-h-[30px] max-w-[30px]"
                          : "max-h-[30px] max-w-[30px] md:max-h-9 md:max-w-9"
                      }`}
                      alt={icon.alt}
                    />
                  );
                }
              })}
            </div>

            <BookmarkEventMobile resize={resize} item={item} id={id} />
          </div>
        </div>
        <div
          className={`w-[100%]   
        md:w-[40%] flex justify-start items-center gap-2`}
        >
          {item.scores.map((scoreSet, i) => (
            <div
              id={
                ["SUSPENDED", "Suspended"].includes(item.status)
                  ? "suspended"
                  : ""
              }
              key={i}
              className="flex-grow gap-2 flex justify-center items-center text-xs"
            >
              <div
                onClick={() => {
                  if (item && item?.scores?.[i]?.["home"]) {
                    updatePlaceBetItem({
                      ...item,
                      home: item.scores[i]["home"],
                      teamIndex: i,
                    });
                  }
                }}
                className="flex-grow  cursor-pointer h-6 w-6 bg-primary-medium-light rounded-md flex justify-center items-center text-sm"
              >
                {scoreSet.home}
              </div>
              <div
                onClick={() => {
                  if (item && item?.scores?.[i]?.["away"]) {
                    updatePlaceBetItem({
                      ...item,
                      away: item.scores[i]["away"],
                      teamIndex: i,
                    });
                  }
                }}
                className="flex-grow h-6  cursor-pointer  w-6 bg-accent-light rounded-md flex justify-center items-center text-sm"
              >
                {scoreSet.away}
              </div>
            </div>
          ))}
          <BookmarkEventDestop resize={resize} item={item} id={id} />
        </div>
      </div>
      {pathname === "/inplay" && placeBet?.matchId === item?.matchId ? (
        <>
          <div
            className={`h-10 flex items-center ${
              placeBet?.home
                ? "bg-[#BEDDF4]"
                : placeBet?.away
                ? "bg-[#eecad4]"
                : ""
            }`}
          >
            <div className="flex w-full  justify-start px-2  items-center">
              <div className="flex-grow md:block hidden"></div>
              <div className="flex-grow flex justify-end">
                <div className="flex gap-4 justify-end items-center">
                  <div>
                    <h3 className="text-sm truncate max-w-[100px] md:max-w-[200px]  text-nowrap md:text-sm">
                      {placeBet?.teamIndex === 0
                        ? placeBet.match.split("v")[0]
                        : placeBet?.teamIndex === 2
                        ? placeBet.match.split("v")[1]
                        : "The Draw"}
                    </h3>
                  </div>
                  <div className="flex justify-center opacity-80 h-full items-center">
                    <button className="bg-[#A4A4A4] cursor-not-allowed  px-1 rounded-l-[0.2rem] py-[0.4rem]  ">
                      <FaPlus className=" text-text text-xs md:text-sm " />
                    </button>
                    <div className="   flex justify-center items-center  bg-text ">
                      <input
                        value={placeBet?.home || placeBet?.away || ""}
                        className="w-full h-[26px] md:h-[28px] md:text-sm text-xs text-center border-none outline-none"
                      />
                    </div>
                    <button className="bg-[#A4A4A4] cursor-not-allowed  px-1 rounded-r-[0.2rem] py-[0.4rem]">
                      <FaMinus className=" text-text  text-xs md:text-sm" />
                    </button>
                  </div>
                  <div className="flex justify-center h-full items-center">
                    <button
                      onClick={() => {
                        handleOddCount("INCREMENT");
                      }}
                      className="bg-[#A4A4A4] px-1 rounded-l-[0.2rem] py-[0.4rem]  "
                    >
                      <FaPlus className=" text-text text-xs md:text-sm" />
                    </button>
                    <div className=" flex justify-center items-center  bg-text ">
                      <input
                        value={manualOdd}
                        onChange={(e) => {
                          handleOddChange(e.target.value);
                        }}
                        className="w-full h-[26px] md:h-[28px] md:text-sm text-xs text-center border-none outline-none"
                      />
                    </div>
                    <button
                      onClick={() => {
                        handleOddCount("DECREMENT");
                      }}
                      className="bg-[#A4A4A4]  px-1 rounded-r-[0.2rem] py-[0.4rem]"
                    >
                      <FaMinus className=" text-text text-xs md:text-sm " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` py-3  flex  flex-col md:flex-row items-center justify-end gap-3 ${
              placeBet?.home
                ? "bg-btn-home-bg"
                : placeBet?.away
                ? "bg-btn-away-bg"
                : ""
            }`}
          >
            <div className="flex justify-between w-full gap-3 items-center px-2 lg:justify-end">
              {["100", "500", "1000", "5000", "10000", "50000"].map(
                (amount) => (
                  <button
                    key={amount}
                    className={`py-1 md:py-1.5 rounded-md px-2 sm:px-4 md:px-6 text-xs  md:text-sm flex items-center btn-gradient ${
                      placeBet?.home ? "btn-home" : "btn-away"
                    }`}
                    onClick={() => setCount(parseInt(amount, 10))}
                  >
                    {amount}
                  </button>
                )
              )}
            </div>
            <div className="flex w-full lg:max-w-[250px] px-2 items-center justify-between gap-2">
              <button className="py-1.5  justify-center flex-grow text-nowrap rounded-md px-6 text-text text-sm flex items-center btn-gradient btn-place-bet">
                Place Bet
              </button>
              <button
                onClick={() => {
                  updatePlaceBetItem({});
                }}
                className="py-1.5 justify-center text-nowrap flex-grow rounded-md px-6 text-sm flex items-center text-text btn-gradient btn-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default BookingOdds;
