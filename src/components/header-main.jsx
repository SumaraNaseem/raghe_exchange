/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import Button from "./common/button";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleModalVisibility } from "../redux-slice/modal-state-slice";

// eslint-disable-next-line no-unused-vars, react/prop-types
const HeaderMain = ({
  handleSidebarVisibility,
  openLoginModal,
  openSignupModal,
}) => {
  const { data: userData } = useSelector((store) => store.userStateSlice);
  const { isLoggedIn } = userData || {};
  const dispatch = useDispatch();

  const handleRightSidebarVisibility = (val) => {
    dispatch(handleModalVisibility({ key: "rightSidebar", value: val }));
  };
  return (
    <div className="bg-primary-gradient  w-full z-0  text-text flex justify-between gap-4 sm:gap-8 px-1 md:px-6  py-2 items-center  text-red-200  ">
      <div className="flex justify-start items-center gap-4">
        <div
          onClick={handleSidebarVisibility}
          className="block lg:hidden cursor-pointer"
        >
          <FaBars className=" text-lg sm:text-2xl" />
        </div>
        <div className=" w-[100px] sm:w-[200px]">
          <img
            src={"https://images.staticcontent.io/rde/uimg/brand_logo.svg"}
            width={195}
            height={60}
          />
        </div>
      </div>
      {!isLoggedIn ? (
        <div className="flex gap-4 justify-center items-center">
          <div>
            <Button onClick={openLoginModal}>
              <div>
                <FaUser className="text-xss sm:text-lg" />
              </div>
              <div className="font-extrabold text-nowrap text-xss sm:text-xs">
                LOG IN
              </div>
            </Button>
          </div>
          <div>
            <Button onClick={openSignupModal}>
              <div>
                <FaUser className="text-xss sm:text-lg" />
              </div>
              <div className="font-extrabold text-nowrap text-xss sm:text-xs">
                SIGN UP
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="bg-text flex-grow  px-0.5 rounded-md py-0.5 ">
            <div
              onClick={() => {
                handleRightSidebarVisibility(true);
              }}
              className="bg-primary-light cursor-pointer rounded-md px-4 flex justify-center items-center gap-2"
            >
              <img
                src={"https://images.staticcontent.io/rde/uimg/coin.svg"}
                alt="coin"
                className="h-3 w-3"
              />
              <span className="text-sm lg:text-lg">2000.00</span>
            </div>
          </div>
          <div
            onClick={() => {
              handleRightSidebarVisibility(true);
            }}
            className="bg-text cursor-pointer  px-0.5 flex-grow rounded-md py-0.5 "
          >
            <div className="bg-primary-light rounded-md px-4 flex justify-center items-center gap-2">
              <span className="text-bold text-sm lg:text-lg ">Exp.</span>
              <span className="text-sm lg:text-lg">0.00</span>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMain;
