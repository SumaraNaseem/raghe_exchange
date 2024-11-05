import { useState } from "react";
import Select from "../components/common/select";
import DatePicker from "react-datepicker";
import ButtonSeconadry from "../components/common/button-secondary";

const AccountSettlement = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const reportOptions = [
    "ALL",
    "BALANCE REPORT",
    "GAME REPORT",
    "SETTLEMENT REPORT",
  ];
  const [report, setReport] = useState("");

  const hanldeReport = (report) => {
    setReport(report);
  };

  return (
    <div className="w-full flex flex-col min-h-[70vh]  gap-2">
      <div className="bg-primary-light">
        <h3 className="px-3 py-1 text-sm font-bold">Account Statement</h3>
      </div>
      <div className="px-4">
        <div className="flex lg:gap-2  flex-wrap lg:flex-nowrap justify-start items-center gap-4">
          <Select
            options={reportOptions}
            value={report}
            onChange={hanldeReport}
            placeholder="Select a report"
            isLoading={false}
            error={false}
            className="lg:w-[250px] w-full "
          />
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              timeInputLabel="Time:"
              dateFormat="dd/MM/yyyy HH:mm"
              showTimeInput
              className="text-text-dark w-full py-2 rounded-md text-sm px-2"
            />
          </div>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              timeInputLabel="Time:"
              dateFormat="dd/MM/yyyy HH:mm"
              showTimeInput
              className="text-text-dark  w-full py-2 rounded-md text-sm px-2"
            />
          </div>
          <div className="lg:w-20 w-full">
            <ButtonSeconadry>
              <span className="text-sm">Go</span>
            </ButtonSeconadry>
          </div>
          <div className="lg:w-32 w-full">
            <ButtonSeconadry>
              <span className="text-sm">Reset</span>
            </ButtonSeconadry>
          </div>
          <div className="flex w-full lg:w-auto flex-col px-1">
            <div className="border-[1px] px-2 border-b-0  text-text-dark text-sm flex  justify-between items-center gap-3  border-gray-300 border-solid">
              <span className=" py-2 basis-[70%] text-nowrap">
                Closing Balance
              </span>
              <div className="w-[1px] h-[36px] bg-gray-300"></div>
              <span className=" py-2">0.00</span>
            </div>
            <div className="border-[1px] px-2 basis-[70%] text-text-dark text-sm flex  justify-between items-center gap-3  border-gray-300 border-solid">
              <span className=" py-2 basis-[70%] text-nowrap">
                Opening Balance
              </span>
              <div className="w-[1px] h-[36px] bg-gray-300"></div>
              <span className=" py-2">0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettlement;
