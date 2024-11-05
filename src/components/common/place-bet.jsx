/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const PlaceBet = ({ runner, name, betPrice, handleActiveIndex, betType }) => {
  const [manualOdd, setManualOdd] = useState(0);

  const [count, setCount] = useState(500);

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
    <>
      <div
        className={`h-10 flex items-center ${
          betType === "back"
            ? "bg-[#BEDDF4]"
            : betType === "lay"
            ? "bg-[#eecad4]"
            : ""
        }`}
      >
        <div className="flex w-full  justify-start px-2  items-center">
          <div className="flex-grow md:block hidden"></div>
          <div className="flex-grow flex justify-end">
            <div className="flex gap-4 justify-end items-center">
              <div>
                <h3 className="text-sm font-bold truncate max-w-[100px] md:max-w-[200px]  text-nowrap md:text-sm">
                  {runner?.runner} - {name}
                </h3>
              </div>
              <div className="flex justify-center opacity-80 h-full items-center">
                <button className="bg-[#A4A4A4] cursor-not-allowed  px-1 rounded-l-[0.2rem] py-[0.4rem]  ">
                  <FaPlus className=" text-text text-xs md:text-sm " />
                </button>
                <div className="   flex justify-center items-center  bg-text ">
                  <input
                    value={betPrice}
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
          betType === "back"
            ? "bg-btn-home-bg"
            : betType === "home"
            ? "bg-btn-away-bg"
            : ""
        }`}
      >
        <div className="flex justify-between w-full gap-3 items-center px-2 lg:justify-end">
          {["100", "500", "1000", "5000", "10000", "50000"].map((amount) => (
            <button
              key={amount}
              className={`py-1 md:py-1.5 rounded-md px-2 sm:px-4 md:px-6 text-xs  md:text-sm flex items-center btn-gradient ${
                betType === "back"
                  ? "btn-home"
                  : betType === "lay"
                  ? "btn-away"
                  : ""
              }`}
              onClick={() => setCount(parseInt(amount, 10))}
            >
              {amount}
            </button>
          ))}
        </div>
        <div className="flex w-full lg:max-w-[250px] px-2 items-center justify-between gap-2">
          <button className="py-1.5  justify-center flex-grow text-nowrap rounded-md px-6 text-text text-sm flex items-center btn-gradient btn-place-bet">
            Place Bet
          </button>
          <button
            onClick={() => {
              handleActiveIndex(null);
            }}
            className="py-1.5 justify-center text-nowrap flex-grow rounded-md px-6 text-sm flex items-center text-text btn-gradient btn-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceBet;
