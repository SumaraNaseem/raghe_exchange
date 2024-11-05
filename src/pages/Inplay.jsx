/* eslint-disable react/prop-types */
const Inplay = ({ children }) => {
  return (
    <div className="w-full h-fit flex-col lg:flex lg:flex-row bg-text text-text-dark flex justify-between gap-2">
      {children}
      <div className="w-full lg:w-[20%] flex flex-col gap-1">
        <div className="bg-primary-gradient-secondary relative px-2 py-1 border-t-[1px] border-[#dee2e6]">
          <h3 className="text-sm text-text">Matched Bet</h3>
        </div>
        <div className="flex justify-center items-center z-20 gap-0.5">
          <div className="bg-primary-light flex-grow-[2] py-1 px-2">
            <h3 className="text-sm text-text text-nowrap">Matched Bet</h3>
          </div>
          <div className="bg-primary-light flex-grow px-2 py-1">
            <h3 className="text-sm text-text text-nowrap">Odd</h3>
          </div>
          <div className="bg-primary-light flex-grow px-2 py-1">
            <h3 className="text-sm text-text text-nowrap">Stakes</h3>
          </div>
        </div>
        <div>
          <h3 className="text-center text-accent-dark py-1 border-[1px] text-sm">
            No Records Found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Inplay;
