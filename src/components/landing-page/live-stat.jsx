import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const LiveStat = ({ liveStats, id, resize }) => {
  const navigate = useNavigate()

  const handleNavigation = (id, matchId) => {
    navigate(`/game/event/${id}/${matchId}`);
  };

  return (
    <div className="flex bg-text text-text-dark font-bold flex-col">
      <div className="bg-primary-light px-2 py-1 border-t-[1px] border-solid border-[#dee2e6]">
        <h3 className="text-sm text-text">
          {/* eslint-disable-next-line react/prop-types */}
          {id === 4
            ? "Cricket"
            : id === 1
            ? "Soccer"
            : id === 2
            ? "Tennis"
            : ""}
        </h3>
      </div>
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
      {/* eslint-disable-next-line react/prop-types */}
      {liveStats.map((item, index) => (
        <React.Fragment key={index}>
          <div className="h-auto md:h-6  flex md:flex-row flex-col justify-between     border-t-[1px] gap-2 items-center border-solid border-[#dee2e6] px-2 py-4">
            <div className="w-[100%] md:w-[60%]  md:basis-[60%] flex justify-between" onClick={()=>handleNavigation(id, item.matchId)}>
              <div className="flex flex-col-reverse sm:flex-row  sm:items-center items-start gap-2">
                <div className="flex justify-start px-4 gap-2">
                  <span className="text-xs md:text-sm    block text-text-light sm:text-primary-dark text-nowrap">
                    {item.date}
                  </span>
                  <span className="text-sm sm:hidden   block   text-text-light">
                    l
                  </span>
                  <span className="text-xs md:text-sm  truncate w-[60px]    inline  text-text-light sm:hidden text-nowrap">
                    {item?.seriesName}
                  </span>
                </div>
                <div className="flex  justify-start items-center gap-2">
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
                    {item.status}
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
                {/* <div className="border-[1px] cursor-pointer md:hidden block border-text-dark border-solid rounded-sm">
                  <img
                    // src={
                    //   "https://images.staticcontent.io/rde/uimg/d-pin-mobile.svg"
                    // }
                    src={
                      "https://images.staticcontent.io/rde/uimg/a-pin-mobile.svg"
                    }
                    className={`${resize ? "h-4" : "h-5"} rounded-sm`}
                    alt={"pin"}
                  />
                </div> */}
              </div>
            </div>
            <div className="w-[100%] md:w-[40%] flex justify-start items-center gap-2">
              {item.scores.map((scoreSet, i) => (
                <div
                  key={i}
                  className="flex-grow gap-2 flex justify-center items-center text-xs"
                >
                  <div className="flex-grow h-6 w-6 bg-primary rounded-md flex justify-center items-center text-sm">
                    {scoreSet.home}
                  </div>
                  <div className="flex-grow h-6  w-6 bg-accent-light rounded-md flex justify-center items-center text-sm">
                    {scoreSet.away}
                  </div>
                </div>
              ))}
              {/* <div className="border-[1px] cursor-pointer md:block hidden border-text-dark border-solid rounded-sm">
                <img
                  src={
                    "https://images.staticcontent.io/rde/uimg/a-pin-mobile.svg"
                  }
                  className={`${resize ? "h-4" : "h-5"} rounded-sm`}
                  alt={"pin"}
                />
              </div> */}
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="h-6 md:block hidden border-t-[1px] border-solid border-[#dee2e6] px-2 py-1">
        <h3 className="font-bold text-text-dark text-sm text-right px-4">
          View More...
        </h3>
      </div>
    </div>
  );
};

export default LiveStat;
