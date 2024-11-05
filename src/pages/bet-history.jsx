import { useState } from "react";
import Select from "../components/common/select";
import DatePicker from "react-datepicker";
import ButtonSeconadry from "../components/common/button-secondary";

const BetHistory = () => {
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
        <h3 className="px-3 py-1 text-sm font-bold">Bet History</h3>
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
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
