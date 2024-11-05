import "./common/style.css";
import SportsIcons from "../assets/sports-icons.png";
import { useState, useCallback } from "react";
import { navItems } from "../utils/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleUserMenu } from "../redux-slice/user-state-slice";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const toggleUserSidebarMenu = () => {
    dispatch(toggleUserMenu(false));
  };

  return (
    <div className="bg-primary-dark relative  font-roboto-condensed-bold gap-2   min-h-12 font-bold px-2 overflow-x-scroll flex justify-start items-center scrollbar-hidden ">
      {navItems.map((item, index) => (
        <div
          onClick={() => {
            handleNavigation(item.path);
            toggleUserSidebarMenu();
          }}
          key={index}
          className={`flex  ${
            pathname === `/${item.path}` || hoveredIndex === index
              ? "bg-primary-light"
              : ""
          } flex-col justify-center xl:h-12  ${
            index === 0 ? "hidden xl:flex " : "block"
          } h-auto items-center gap-2 relative   `}
        >
          {item?.liveScore ? (
            <div className="flex items-center absolute  top-0 left-14 xl:left-8 z-20   w-12">
              <div className="flex-grow-2 px-1 rounded-l-[0.13rem] h-full bg-text flex justify-center items-center py-0.5">
                <span className="text-[8px] flex justify-center items-center text-center h-2 animate-blinkLive animate-colorChangeLive py-1">
                  Live{" "}
                </span>
              </div>
              <div className="flex-grow-[0.5]  flex  justify-center items-center bg-accent rounded-r-[0.13rem]">
                <span className="text-white text-[8px]">{item.liveScore}</span>
              </div>
            </div>
          ) : null}
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`flex relative py-1 cursor-pointer px-2 flex-col gap-1 bg-transparent justify-between items-center ${
              pathname === `/${item.path}` || hoveredIndex === index
                ? "bg-primary-light"
                : ""
            }`}
          >
            {!item?.isHide ? (
              <div
                className="bg-cover xl:hidden  block bg-center h-[30px] w-[30px]"
                style={{
                  backgroundImage: `url(${
                    item.isLinkAvailable ? item.icon : SportsIcons
                  })`,
                  backgroundPosition: item.isLinkAvailable
                    ? "center center"
                    : item.backgroundPosition,
                  backgroundSize: item.isLinkAvailable ? "24px" : "30px",
                  backgroundRepeat: "no-repeat",
                  opacity: index === 0 ? 0 : 1,
                }}
              ></div>
            ) : null}
            <div
              className={`absolute xl:hidden block h-1.5 ${
                pathname === `/${item.path}` || hoveredIndex === index
                  ? "bg-primary-light"
                  : "bg-primary-dark"
              } w-4 top-[1.95rem]`}
            ></div>
            <span
              className={`${
                index === 2 ? "animate-blink animate-colorChange" : ""
              } text-[0.8rem] text-nowrap min-w-[70px] xl:min-w-[60px]  justify-center  ${
                index === 0 ? "xl:flex  hidden" : "flex"
              }`}
            >
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
