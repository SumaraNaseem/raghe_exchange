import { BookmarkEventDestop } from "../common/bookmark-event";
import { FaMinus } from "react-icons/fa6";
import PlaceBet from "../common/place-bet";

/* eslint-disable react/prop-types */
const MatchOddsDetails = ({
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
            <span className="font-bold text-[14px]">{item?.market}</span>
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
        {item?.runners?.map((runner, runnerIndex) => (
          <>
            <div key={runnerIndex} className="border-b  ">
              {runnerIndex === 0 ? <div className="py-6 border-b"></div> : ""}
              <div className="flex justify-between items-center px-3 py-0.5">
                <span className="font-semibold  text-[.9rem]">
                  {runner?.runner}
                </span>
                <div className="flex justify-between  ">
                  {item.status === "OPEN" ? (
                    runner?.status === "OPEN" || runner?.status === "ACTIVE" ? (
                      <>
                        {Array.from({ length: 3 }).map((_, level) => {
                          const colors = [
                            { bg: "#72bbef7f" },
                            { bg: "#72bbefbf" },
                            { bg: "#72bbef" },
                          ];
                          const color = colors[level];
                          const backrun = runner.back[2 - level] || {
                            price: "--",
                            size: "",
                          };
                          return (
                            <div key={`${level}-back`} className="relative">
                              {runnerIndex === 0 ? (
                                <span
                                  className="py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-r-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]"
                                  style={{
                                    background: color.bg,
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
                                    `${runner?.runner}-${item?.market}`
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
                                }     py-1 w-[60px] m-[2px] rounded-md    flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                                style={{ background: color.bg }}
                              >
                                <p className="text-[14px] font-semibold">
                                  {backrun.price}
                                </p>
                                <span className="text-[10px] font-medium uppercase">
                                  {backrun.size}
                                </span>
                              </span>
                            </div>
                          );
                        })}
                        {Array.from({ length: 3 }).map((_, level) => {
                          const colorcob = [
                            { bg: "#faa9ba" },
                            { bg: "#faa9babf" },
                            { bg: "#faa9ba7f" },
                          ];
                          const color = colorcob[level];
                          const layrun = runner.lay[level] || {
                            price: "--",
                            size: "",
                          };

                          return (
                            <div key={`lay-${level}`} className={`relative`}>
                              {runnerIndex === 0 ? (
                                <span
                                  className={` py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-l-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                                  style={{
                                    background: color.bg,
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
                                    `${runner?.runner}-${item?.market}`
                                  );
                                  handleBetPrice(layrun.price);
                                  handleBetType("lay");
                                }}
                                style={{ background: color.bg }}
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
                          );
                        })}
                      </>
                    ) : (
                      <div
                        className="flex justify-center items-center"
                        id="suspended-2"
                      >
                        {Array.from({ length: 3 }).map((_, level) => {
                          const colors = [
                            { bg: "#72bbef7f" },
                            { bg: "#72bbefbf" },
                            { bg: "#72bbef" },
                          ];
                          const color = colors[level];
                          const backrun = runner.back[2 - level] || {
                            price: "--",
                            size: "",
                          };
                          return (
                            <div key={`${level}-back`} className="relative">
                              {runnerIndex === 0 ? (
                                <span
                                  className="py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-r-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]"
                                  style={{
                                    background: color.bg,
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
                                }     py-1 w-[60px] m-[2px] rounded-md    flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                                style={{ background: color.bg }}
                              >
                                <p className="text-[14px] font-semibold">
                                  {backrun.price}
                                </p>
                                <span className="text-[10px] font-medium uppercase">
                                  {backrun.size}
                                </span>
                              </span>
                            </div>
                          );
                        })}
                        {Array.from({ length: 3 }).map((_, level) => {
                          const colorcob = [
                            { bg: "#faa9ba" },
                            { bg: "#faa9babf" },
                            { bg: "#faa9ba7f" },
                          ];
                          const color = colorcob[level];
                          const layrun = runner.lay[level] || {
                            price: "",
                            size: "",
                          };

                          return (
                            <div key={`lay-${level}`} className={`relative`}>
                              {runnerIndex === 0 ? (
                                <span
                                  className={` py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-l-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                                  style={{
                                    background: color.bg,
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
                                style={{ background: color.bg }}
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
                          );
                        })}
                      </div>
                    )
                  ) : (
                    <div
                      className="flex justify-center items-center"
                      id="closed"
                    >
                      {Array.from({ length: 3 }).map((_, level) => {
                        const colors = [
                          { bg: "#72bbef7f" },
                          { bg: "#72bbefbf" },
                          { bg: "#72bbef" },
                        ];
                        const color = colors[level];
                        const backrun = runner.back[2 - level] || {
                          price: "",
                          size: "",
                        };
                        return (
                          <div key={`${level}-back`} className="relative">
                            {runnerIndex === 0 ? (
                              <span
                                className="py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-r-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]"
                                style={{
                                  background: color.bg,
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
                              }     py-1 w-[60px] m-[2px] rounded-md    flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px]`}
                              style={{ background: color.bg }}
                            >
                              <p className="text-[14px] font-semibold">
                                {backrun.price}
                              </p>
                              <span className="text-[10px] font-medium uppercase">
                                {backrun.size}
                              </span>
                            </span>
                          </div>
                        );
                      })}
                      {Array.from({ length: 3 }).map((_, level) => {
                        const colorcob = [
                          { bg: "#faa9ba" },
                          { bg: "#faa9babf" },
                          { bg: "#faa9ba7f" },
                        ];
                        const color = colorcob[level];
                        const layrun = runner.lay[level] || {
                          price: "",
                          size: "",
                        };

                        return (
                          <div key={`lay-${level}`} className={`relative`}>
                            {runnerIndex === 0 ? (
                              <span
                                className={` py-1 w-[58px] text-sm font-semibold  bottom-14 rounded-t-[1rem] rounded-l-[0.6rem] absolute  flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                                style={{
                                  background: color.bg,
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
                              style={{ background: color.bg }}
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
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {`${runner?.runner}-${item?.market}` === activeIndex &&
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
          </>
        ))}
      </div>
    </div>
  );
};

export default MatchOddsDetails;
