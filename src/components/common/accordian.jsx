/* eslint-disable react/prop-types */
import { useState } from "react";
import { apiRoutes } from "../../utils/api-routes";
import { useFetchItemsQuery } from "../../services/api/sports";

const AccordionComponent = ({ id }) => {
  const [openIndices, setOpenIndices] = useState(new Set());
  const { data, isLoading, isFetching } = useFetchItemsQuery(
    `${apiRoutes.sports}/${id}`
  );


  
  if (isLoading || isFetching)
    return <h3 className="text-center text-text-light text-sm">Loading....</h3>;

  if (data?.data?.length <= 0) {
    return null;
  }

  const handleToggle = (index) => {
    setOpenIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (newIndices.has(index)) {
        newIndices.delete(index);
      } else {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

  const groupedData = data?.data?.reduce((acc, item) => {
    if (!acc[item.serieseName]) {
      acc[item.serieseName] = [];
    }
    acc[item.serieseName].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-2 text-xs text-text-dark ">
      {Object.keys(groupedData).map((seriesName, index) => (
        <div key={seriesName} className="">
          <button
            onClick={() => handleToggle(index)}
            className="w-full relative hover:ml-4 transition-all   flex justify-between px-4 py-3 mx-2 items-center gap-3 text-xs text-left focus:outline-none"
          >
            <div className="h-5 w-[1.5px] absolute left-0 bg-text-dark"></div>
            <p className="truncate max-w-[180px] text-[11px] font-normal">
              {seriesName}
            </p>
            <span className={`float-right transform transition-transform`}>
              {openIndices.has(index) ? (
                <svg
                  className="toggle"
                  viewBox="64 -65 897 897"
                  style={{
                    width: "1em",
                    height: "1em",
                    marginRight: "10px",
                    cursor: "pointer",
                    verticalAlign: "middle",
                    opacity: "1",
                  }}
                >
                  <g>
                    <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="64 -65 897 897"
                  style={{
                    width: "1em",
                    height: "1em",
                    marginRight: "10px",
                    cursor: "pointer",
                    verticalAlign: "middle",
                    opacity: "1",
                  }}
                >
                  <g>
                    <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z"></path>
                  </g>
                </svg>
              )}
            </span>
          </button>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openIndices.has(index) ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="px-2 w-full py-1 ">
              {groupedData[seriesName].map((match) => (
                <div
                  key={match.matchId}
                  className="py-2 flex justify-between hover:ml-2 transition-all  items-center relative px-3"
                >
                  <div className="h-5 w-[1.5px] absolute left-2  bg-[#274396]"></div>

                  <p className="max-w-[180px] text-[10.5px] truncate px-2 font-normal">
                    {match.matchName}
                  </p>
                  <span
                    className={`float-right transform transition-transform`}
                  >
                    <svg
                      viewBox="64 -65 897 897"
                      style={{
                        width: "1em",
                        height: "1em",
                        marginRight: "10px",
                        cursor: "pointer",
                        verticalAlign: "middle",
                        opacity: "0.3",
                      }}
                    >
                      <g>
                        <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
