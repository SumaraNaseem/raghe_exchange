import { IoCloseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleModalVisibility } from "../redux-slice/modal-state-slice";
import {
  handleAuthState,
  toggleUserMenu,
} from "../redux-slice/user-state-slice";
import { useNavigate, useLocation } from "react-router-dom";

import { userMenu } from "../utils/constants";

const RightSidebar = () => {
  const { data } = useSelector((store) => store.modalStateSlice);
  const { rightSidebar } = data || {};
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { pathname } = useLocation();

  const handleRightSidebarVisibility = () => {
    dispatch(
      handleModalVisibility({ key: "rightSidebar", value: !rightSidebar })
    );
  };

  const logoutUser = () => {
    dispatch(handleAuthState({ isLoggedIn: false }));
    if (rightSidebar) {
      handleRightSidebarVisibility();
    }
  };

  const toggleUserSidebarMenu = () => {
    dispatch(toggleUserMenu(true));
  };

  return (
    <div
      className={`fixed top-0 right-0 z-[999] w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[25vw] h-screen bg-primary-dark px-4 py-4 text-text transition-transform duration-300 ease-in-out ${
        rightSidebar ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="flex justify-end">
        <IoCloseSharp
          onClick={handleRightSidebarVisibility}
          className="text-text text-3xl cursor-pointer"
        />
      </div>
      <div
        className="flex items-center pt-3 gap-3"
        onClick={toggleUserSidebarMenu}
      >
        <FaUser className="text-secondary-yellow" />
        <span>Vicky-(001)</span>
      </div>
      <div className="flex items-center pt-4 gap-4">
        <div
          className="bg-text flex-grow px-0.5 rounded-lg py-0.5 "
          onClick={toggleUserSidebarMenu}
        >
          <div className="bg-primary-light rounded-lg px-4 flex flex-col gap-2">
            <span className="text-bold text-lg">Exposure</span>
            <span className="text-text-dark">0.00</span>
          </div>
        </div>
        <div
          className="bg-text  px-0.5 flex-grow rounded-lg py-0.5 "
          onClick={toggleUserSidebarMenu}
        >
          <div className="bg-primary-light rounded-lg px-4 flex flex-col gap-2">
            <span className="text-bold text-lg">P&L</span>
            <span className="text-text-dark">0.00</span>
          </div>
        </div>
      </div>

      {userMenu?.map((menu, index) => {
        console.log(menu.path, pathname);
        return (
          <div
            key={index}
            onClick={() => {
              if (menu.name === "Logout") {
                logoutUser();
              } else {
                naviagte(`/${menu.path}`);
              }
              toggleUserSidebarMenu();
            }}
            className={`flex justify-start ${
              pathname === `/${menu.path}` ? "bg-primary-light" : "bg-none"
            } my-4 items-center gap-3 hover:bg-primary-light active:bg-primary-light
        cursor-pointer py-1.5 px-2 rounded-md transition-all`}
          >
            <img src={menu.icon} className="max-h-5 max-w-5 cursor-pointer" />
            <span className="cursor-pointer text-sm">{menu.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RightSidebar;
