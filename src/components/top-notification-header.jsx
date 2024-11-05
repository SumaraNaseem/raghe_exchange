import useDate from "../hooks/useDate";
import { LiaBullhornSolid } from "react-icons/lia";

const TopNotificationHeader = () => {
  const [currentTime] = useDate();
  return (
    <div className="relative w-screen overflow-hidden py-1 bg-primary-dark flex justify-center items-center">
      <div className="absolute left-0 w-8 h-6 px-2 flex justify-center items-center bg-primary-dark z-10">
        <LiaBullhornSolid />
      </div>
      <div className="">
        <div className="flex w-full  whitespace-nowrap ">
          <p className=" text-xs px-4 py-1 animate-headline-slide">
            Enjoy Unmatched Betting Excitement and Access 500+ Casino and Online
            Games
          </p>
        </div>
      </div>
      <div className="absolute right-0 h-6 bg-primary-dark text-xss md:text-xs px-2 py-1 z-10">
        {currentTime}
      </div>
    </div>
  );
};

export default TopNotificationHeader;
