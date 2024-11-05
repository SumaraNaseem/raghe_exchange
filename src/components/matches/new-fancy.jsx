/* eslint-disable react/prop-types */

import { FaMinus } from "react-icons/fa";
import PlaceBet from "../common/place-bet";

const FancyGameDetails = ({
  item,
  newFancyData,
  handleBetPrice,
  betPrice,
  activeIndex,
  handleActiveIndex,
  betType,
  handleBetType,
}) => {
  return (
    <div className="w-full">
      <div
        className=" bg-primary-light h-auto text-text px-3 py-1
       flex justify-between items-center gap-3 text-sm "
      >
        <div className="flex justify-start gap-3 items-center">
          <div>
            <span className="font-bold text-[14px]">{item}</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3">
          <div className="cursor-pointer">
            <FaMinus />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between  gap-1 w-full">
        {newFancyData[item]?.map((runner, index) => (
          <>
            <div
              key={index}
              className="bg-gray-50   text-sm text-gray-500 border-b border-gray-300 p-2"
            >
              <div className="flex justify-between items-center truncate gap-2">
                <span className="font-semibold text-text-dark truncate text-[.9rem]">
                  {runner?.RunnerName}
                </span>
                <div className="flex">
                  {runner?.GameStatus !== "" ? (
                    <div
                      className="relative flex w-[160px] h-[43px] "
                      id="inactive"
                    >
                      <div className="h-10 w-full bg-blue-300"></div>
                      <div className="h-10 w-full bg-pink-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="h-full w-full  text-[#ff0000] opacity-75 z-10 font-semibold">
                          {runner.GameStatus}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col  gap-2">
                      <div className="bg-gray-50 text-sm text-text-dark flex justify-between items-center h-[28px]">
                        <span
                          style={{
                            background: "#72bbef",
                          }}
                          className={` py-1 w-[58px] text-sm font-semibold   rounded-t-[1rem] rounded-l-[0.6rem] 
							flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer
							 min-h-[20px]`}
                        >
                          Back
                        </span>
                        <span
                          className={` py-1 w-[58px] text-sm font-semibold  rounded-t-[1rem] rounded-l-[0.6rem]   flex flex-wrap justify-center items-center flex-col border-l  border-[#c7c8ca] cursor-pointer min-h-[20px]`}
                          style={{
                            background: "#faa9ba",
                          }}
                        >
                          Lay
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div
                          className="flex items-center gap-2 "
                          onClick={() => {
                            handleActiveIndex(
                              `${runner?.runnerName}-${item}-${runner.SelectionId}`
                            );
                            handleBetPrice(runner?.BackPrice1);
                            handleBetType("back");
                          }}
                        >
                          <span className="py-1 w-[60px] rounded-md  flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px] bg-[#72bbef]">
                            <p className="text-[14px] font-semibold text-slate-950">
                              {runner?.BackPrice1}
                            </p>
                            <span className="text-[10px]  font-medium uppercase text-slate-900">
                              {runner?.BackSize1}
                            </span>
                          </span>
                        </div>
                        <div
                          className="flex items-center"
                          onClick={() => {
                            handleActiveIndex(
                              `${runner?.runnerName}-${item}-${runner.SelectionId}`
                            );
                            handleBetPrice(runner?.LayPrice1);
                            handleBetType("lay");
                          }}
                        >
                          <span className="py-1 w-[60px] rounded-md flex flex-wrap justify-center items-center flex-col border-l border-[#c7c8ca] cursor-pointer min-h-[44px] bg-[#Faa9ba]">
                            <p className="text-[14px] font-semibold text-slate-950">
                              {runner?.LayPrice1}
                            </p>
                            <span className="text-[10px] font-medium uppercase text-slate-900">
                              {runner?.LaySize1}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {`${runner?.runnerName}-${item}-${runner.SelectionId}` ===
              activeIndex &&
            ["ACTIVE", "OPEN", ""].includes(runner?.GameStatus) ? (
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

export default FancyGameDetails;
