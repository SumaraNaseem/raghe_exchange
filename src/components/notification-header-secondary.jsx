import { LiaBullhornSolid } from "react-icons/lia";

const NotificationHeaderSecondary = () => {
  return (
    <div className="relative z-[999] w-screen md:bottom-0 text-text overflow-hidden py-1 bg-primary-gradient-secondary flex justify-center items-center">
      <div className="">
        <div className="flex w-full  whitespace-nowrap ">
          <p className=" text-sm  px-4 flex gap-2 items-center py-1 animate-headline-slide">
            <LiaBullhornSolid className="text-text text-2xl" /> Welcome To Our
            Exchange......
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationHeaderSecondary;
