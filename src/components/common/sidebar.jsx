/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SportsIcons from "../../assets/sports-icons.png";
import { useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import AccordionComponent from "./accordian";
import { useNavigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleSidebarVisibility, items }) => {
  const { data, showUserMenu } = useSelector((store) => store.userStateSlice);
  const { pathname } = useLocation();
  const { isLoggedIn } = data || {};
  const [toggleAccordianIndex, setTogglAccordianIndex] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    if (toggleAccordianIndex === index) {
      setTogglAccordianIndex(null);
    } else {
      setTogglAccordianIndex(index);
    }
  };

  return (
    <div
      className={`text-sm ${
        showUserMenu ? "h-[700px]" : "h-[1100px]"
      }  w-full   text-primary-dark font-semibold`}
    >
      <div
        className={`bg-primary-light ${
          showUserMenu ? "text-text" : "text-text"
        } flex justify-between items-center px-4 py-1`}
      >
        <h3 className="text-sm">{showUserMenu ? "Main Menu" : "Popular"}</h3>
        {!isLoggedIn ? (
          <IoCloseSharp
            className="cursor-pointer"
            onClick={handleSidebarVisibility}
          />
        ) : (
          ""
        )}

        {isLoggedIn && window.screen.width < 1024 ? (
          <IoCloseSharp
            className="cursor-pointer"
            onClick={handleSidebarVisibility}
          />
        ) : (
          ""
        )}
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-b-[1px] relative border-b-gray-300 cursor-pointer ${
            pathname === `/${item.path}`
              ? "bg-primary-light text-text"
              : "hover:bg-primary-light hover:text-text"
          }`}
          onClick={() => {
            handleItemClick(index);
            navigate(`/${item.path}`);
          }}
        >
          <div className="flex transition-transform px-3 py-2 items-center gap-2">
            {item.icon ? (
              typeof item.icon === "string" ? (
                <div
                  className={`bg-cover block bg-center ${
                    showUserMenu ? "h-[30px] w-[30px]" : "h-[30px] w-[30px]"
                  }`}
                  style={{
                    backgroundImage: `url(${item.icon})`,
                    backgroundSize: showUserMenu
                      ? "20px"
                      : item.name === "Evolution" ||
                        item.name === "Vivo" ||
                        item.name === "Betagames"
                      ? "24px"
                      : "30px",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              ) : (
                <item.icon className="text-lg" />
              )
            ) : (
              <div
                className="bg-cover  block bg-center h-[30px] w-[30px]"
                style={{
                  backgroundImage: `url(${SportsIcons})`,
                  backgroundPosition: `center ${item.position}`,
                  backgroundSize: "30px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            )}
            <div>
              <h3>{item.name} </h3>
              {[1, 2, 4].includes(item?.id) ? (
                <>
                  <IoMdArrowDropdown className="text-2xl absolute right-4 top-4" />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          {toggleAccordianIndex === index && [1, 2, 4].includes(item?.id) && (
            <div onClick={(e) => e.stopPropagation()} className="bg-[#E1E4EF]">
              <AccordionComponent data={item.id} id={item.id} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
