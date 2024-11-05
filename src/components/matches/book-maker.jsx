/* eslint-disable react/prop-types */

import { FaMinus } from "react-icons/fa";
import { BookmarkEventDestop } from "../common/bookmark-event";
import PlaceBet from "../common/place-bet";

const BookMakerDetails = ({
  item,
  handleBetPrice,
  betPrice,
  activeIndex,
  handleActiveIndex,
  betType,
  handleBetType,
}) => {
  return (
    <div>
      <div className=" bg-primary-light  text-text px-3 py-1 flex justify-between items-center gap-3   text-sm ">
        <div className="flex justify-start gap-3 items-center">
          <BookmarkEventDestop id={1} item={{ isSelected: true }} />
          <div>
            <span className="font-bold text-[14px]">{item?.mname}</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3">
          <div>
            <button className="bg-text-light px-4 py-1 rounded-sm text-xs">
              Cashout
            </button>
          </div>
          <div className="flex justify-center  items-center gap-2">
            <span className="font-semibold text-nowrap text-xss ">
              Min: {100}
            </span>
            <span className="font-semibold text-nowrap text-xss ">l</span>
            <span className="font-semibold text-xss text-nowrap">
              Max : {item?.max}
            </span>
          </div>
          <div className="cursor-pointer">
            <FaMinus />
          </div>
        </div>
      </div>

      <div>
        {item?.runners?.map((runner, index) => (
          <div key={index} className="border-b">
            {index === 0 ? <div className="py-6 border-b"></div> : ""}
            <div className="flex justify-between items-center px-3 py-0.5">
              <span className="font-semibold  text-[.9rem]">
                {runner?.runnerName}
              </span>
              <div className="flex justify-between  ">
                {item.status === "OPEN" ? (
                  runner?.status === "ACTIVE" || !runner?.status ? (
                    <>
                      {(() => {
                        const colors = [
                          { bg: "#72bbef7f" },
                          { bg: "#72bbefbf" },
                          { bg: "#72bbef" },
                        ];

                        return runner.back
                          .slice()
                          .reverse()
                          .map((backrun, level) => (
                            <div key={`${level}-back`} className="relative">
                              {index === 0 ? (
                                <span
                                  className="py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-r-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]"
                                  style={{
                                    background: colors[level].bg,
                                    visibility:
                                      level === 2 ? "visible" : "hidden",
                                  }}
                                >
                                  Back
                                </span>
                              ) : (
                                ""
                              )}
                              <span
                                onClick={() => {
                                  handleActiveIndex(
                                    `${runner?.runnerName}-${item?.mname}`
                                  );
                                  handleBetPrice(backrun.price);
                                  handleBetType("back");
                                }}
                                className={` ${
                                  window.screen.width > 540
                                    ? "flex"
                                    : level < 2
                                    ? "hidden"
                                    : "flex"
                                }     py-1 w-[60px] m-[2px] rounded-md flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                                style={{ background: colors[level].bg }}
                              >
                                <p className="text-[14px] font-semibold">
                                  {backrun.price}
                                </p>
                                <span className="text-[10px] font-medium uppercase">
                                  {backrun.size}
                                </span>
                              </span>
                            </div>
                          ));
                      })()}
                      {(() => {
                        const colorscob = [
                          { bg: "#faa9ba" },
                          { bg: "#faa9babf" },
                          { bg: "#faa9ba7f" },
                        ];

                        return runner.lay.map((layrun, level) => (
                          <div key={`lay-${level}`} className={`relative`}>
                            {index === 0 ? (
                              <span
                                className={` py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-l-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                                style={{
                                  background: colorscob[level].bg,
                                  visibility:
                                    level === 0 ? "visible" : "hidden",
                                }}
                              >
                                Lay
                              </span>
                            ) : (
                              ""
                            )}

                            <span
                              onClick={() => {
                                handleActiveIndex(
                                  `${runner?.runnerName}-${item?.mname}`
                                );
                                handleBetPrice(layrun.price);
                                handleBetType("lay");
                              }}
                              style={{ background: colorscob[level].bg }}
                              className={`${
                                window.screen.width > 540
                                  ? "flex"
                                  : level > 0
                                  ? "hidden"
                                  : "flex"
                              }   py-1 w-[60px] rounded-md m-[2px] flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                            >
                              <p className="text-[14px] font-semibold">
                                {layrun.price}
                              </p>
                              <span className="text-[10px] font-medium uppercase">
                                {layrun.size}
                              </span>
                            </span>
                          </div>
                        ));
                      })()}
                    </>
                  ) : (
                    <div
                      className="flex  justify-center items-center "
                      id="suspended-2"
                    >
                      {(() => {
                        const colors = [
                          { bg: "#72bbef7f" },
                          { bg: "#72bbefbf" },
                          { bg: "#72bbef" },
                        ];

                        return runner.back
                          .slice()
                          .reverse()
                          .map((backrun, level) => (
                            <div key={`${level}-back`} className="relative">
                              {index === 0 ? (
                                <span
                                  className="py-1 w-[58px] text-sm font-semibold 
                                  bottom-14 rounded-t-[1rem] rounded-r-[0.6rem] absolute  
                                  flex flex-wrap justify-center items-center flex-col border-l 
                                  border-[#c7c8ca] cursor-pointer min-h-[20px]"
                                  style={{
                                    background: colors[level].bg,
                                    visibility:
                                      level === 2
                                        ? "visible"
                                        : runner.back.length > 2
                                        ? "hidden"
                                        : "",
                                  }}
                                >
                                  Back
                                </span>
                              ) : (
                                ""
                              )}
                              <span
                                className={` ${
                                  runner.back.length > 2 &&
                                  window.screen.width > 540
                                    ? "flex"
                                    : runner.back.length > 2 && level < 2
                                    ? runner.back.length > 2 && "hidden"
                                    : "flex"
                                }     py-1 w-[60px] m-[2px] rounded-md flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                                style={{ background: colors[level].bg }}
                              >
                                <p className="text-[14px] font-semibold">
                                  {backrun.price}
                                </p>
                                <span className="text-[10px] font-medium uppercase">
                                  {backrun.size}
                                </span>
                              </span>
                            </div>
                          ));
                      })()}
                      {(() => {
                        const colorscob = [
                          { bg: "#faa9ba" },
                          { bg: "#faa9babf" },
                          { bg: "#faa9ba7f" },
                        ];

                        return runner.lay.map((layrun, level) => (
                          <div key={`lay-${level}`} className={`relative`}>
                            {index === 0 ? (
                              <span
                                className={` py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-l-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                                style={{
                                  background: colorscob[level].bg,
                                  visibility:
                                    level === 0
                                      ? "visible"
                                      : runner.lay.length > 2
                                      ? "hidden"
                                      : "",
                                }}
                              >
                                Lay
                              </span>
                            ) : (
                              ""
                            )}

                            <span
                              style={{ background: colorscob[level].bg }}
                              className={`${
                                runner.lay.length > 2 &&
                                window.screen.width > 540
                                  ? runner.lay.length > 2 && "flex"
                                  : runner.lay.length > 2 && level > 0
                                  ? "hidden"
                                  : "flex"
                              }   py-1 w-[60px] rounded-md m-[2px] flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                            >
                              <p className="text-[14px] font-semibold">
                                {layrun.price}
                              </p>
                              <span className="text-[10px] font-medium uppercase">
                                {layrun.size}
                              </span>
                            </span>
                          </div>
                        ));
                      })()}
                    </div>
                  )
                ) : (
                  <div className="flex justify-center items-center" id="closed">
                    {(() => {
                      const colors = [
                        { bg: "#72bbef7f" },
                        { bg: "#72bbefbf" },
                        { bg: "#72bbef" },
                      ];

                      return runner.back
                        .slice()
                        .reverse()
                        .map((backrun, level) => (
                          <div key={`${level}-back`} className="relative">
                            {index === 0 ? (
                              <span
                                className="py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-r-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]"
                                style={{
                                  background: colors[level].bg,
                                  visibility:
                                    level === 2 ? "visible" : "hidden",
                                }}
                              >
                                Back
                              </span>
                            ) : (
                              ""
                            )}
                            <span
                              className={` ${
                                window.screen.width > 540
                                  ? "flex"
                                  : level < 2
                                  ? "hidden"
                                  : "flex"
                              }     py-1 w-[60px] m-[2px] rounded-md flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                              style={{ background: colors[level].bg }}
                            >
                              <p className="text-[14px] font-semibold">
                                {backrun.price}
                              </p>
                              <span className="text-[10px] font-medium uppercase">
                                {backrun.size}
                              </span>
                            </span>
                          </div>
                        ));
                    })()}
                    {(() => {
                      const colorscob = [
                        { bg: "#faa9ba" },
                        { bg: "#faa9babf" },
                        { bg: "#faa9ba7f" },
                      ];

                      return runner.lay.map((layrun, level) => (
                        <div key={`lay-${level}`} className={`relative`}>
                          {index === 0 ? (
                            <span
                              className={` py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-l-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                              style={{
                                background: colorscob[level].bg,
                                visibility: level === 0 ? "visible" : "hidden",
                              }}
                            >
                              Lay
                            </span>
                          ) : (
                            ""
                          )}

                          <span
                            style={{ background: colorscob[level].bg }}
                            className={`${
                              window.screen.width > 540
                                ? "flex"
                                : level > 0
                                ? "hidden"
                                : "flex"
                            }   py-1 w-[60px] rounded-md m-[2px] flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                          >
                            <p className="text-[14px] font-semibold">
                              {layrun.price}
                            </p>
                            <span className="text-[10px] font-medium uppercase">
                              {layrun.size}
                            </span>
                          </span>
                        </div>
                      ));
                    })()}
                  </div>
                )}
              </div>
            </div>
            {`${runner?.runnerName}-${item?.mname}` === activeIndex &&
            ["ACTIVE", "OPEN"].includes(runner?.status) ? (
              <PlaceBet
                runner={runner}
                name={item?.market}
                handleBetPrice={handleBetPrice}
                betPrice={betPrice}
                activeIndex={activeIndex}
                handleActiveIndex={handleActiveIndex}
                betType={betType}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMakerDetails;
