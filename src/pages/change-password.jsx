import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangedPassword = () => {
  const [showOldPwd, setShowOldPwd] = useState(false);
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [confirmNewPwd, setConfirmNewPwd] = useState(false);


  const handleShowPassword = (updateHanlde) => {
    updateHanlde((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col text-text-dark  gap-2">
      <div className="bg-primary-light">
        <h3 className="px-3 py-1  text-text text-sm font-bold">Change Password</h3>
      </div>
      <div className="px-4 flex flex-col gap-4 w-[50%]">
        <div className="flex flex-col gap-2">
          <label className="">Old Password</label>
          <div className="relative">
            <input
              type={showOldPwd ? "text" : "password"}
              placeholder="password"
              className="py-1.5 px-2 w-full rounded-lg outline-none border-[1px] border-slate-700"
            />
            {showOldPwd ? (
              <FaEyeSlash
              onClick={() => handleShowPassword(setShowOldPwd)}
              className="absolute right-4 cursor-pointer top-3"
              />
            ) : (
              <FaEye
              onClick={() => handleShowPassword(setShowOldPwd)}
              className="absolute right-4 cursor-pointer top-3"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="">New Password</label>
          <div className="relative">
            <input
              type={showNewPwd ? "text" : "password"}
              placeholder="password"
              className="py-1.5 px-2 w-full rounded-lg outline-none border-[1px] border-slate-700"
            />
            {showNewPwd ? (
              <FaEyeSlash
                onClick={() => handleShowPassword(setShowNewPwd)}
                className="absolute right-4 cursor-pointer top-3"
              />
            ) : (
              <FaEye
              onClick={() => handleShowPassword(setShowNewPwd)}
              className="absolute right-4 cursor-pointer top-3"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Confirm Password</label>
          <div className="relative">
            <input
              type={confirmNewPwd ? "text" : "password"}
              placeholder="password"
              className="py-1.5 px-2 w-full rounded-lg outline-none border-[1px] border-slate-700"
            />
            {confirmNewPwd ? (
              <FaEyeSlash
                onClick={() => handleShowPassword(setConfirmNewPwd)}
                className="absolute right-4 cursor-pointer top-3"
              />
            ) : (
              <FaEye
              onClick={() => handleShowPassword(setConfirmNewPwd)}
              className="absolute right-4 cursor-pointer top-3"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangedPassword;
