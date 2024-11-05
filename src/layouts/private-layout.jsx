import HeaderMain from "../components/header-main";
import Navbar from "../components/navbar";
import TopNotificationHeader from "../components/top-notification-header";
import Footer from "../components/common/footer";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar";
import Modal from "../components/common/modal";
import { useDispatch, useSelector } from "react-redux";
import { handleModalVisibility } from "../redux-slice/modal-state-slice";
import Login from "../components/public/login";
import Signup from "../components/public/signup";
import RightSidebar from "../components/right-sidebar";
import NotificationHeaderSecondary from "../components/notification-header-secondary";
import { items, userMenu } from "../utils/constants";

const PrivateLayout = () => {
  const userData = useSelector((store) => store.userStateSlice);
  const { isLoggedIn } = userData?.data || {};
  const {showUserMenu} = userData || {}
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.modalStateSlice);
  const { signupModal, loginModal, sidebar } = data || {};

  const handleLoginModal = () =>
    dispatch(handleModalVisibility({ key: "loginModal", value: !loginModal }));

  const handleSignupnModal = () =>
    dispatch(
      handleModalVisibility({ key: "signupModal", value: !signupModal })
    );

  const handleSidebarVisibility = () =>
    dispatch(handleModalVisibility({ key: "sidebar", value: !sidebar }));


  if (!isLoggedIn) return <Navigate to="/" />;

  return (
    <>
      <div className="text-text ">
        <div className="sticky w-full z-50 top-0">
          {!isLoggedIn ? <TopNotificationHeader /> : ""}
          <div className="relative z-0">
            <HeaderMain
              handleSidebarVisibility={handleSidebarVisibility}
              openLoginModal={handleLoginModal}
              openSignupModal={handleSignupnModal}
            />
            <Navbar />
          </div>
          <div className="md:hidden block">
            <NotificationHeaderSecondary />
          </div>
        </div>

        <div className="w-full flex  justify-between gap-0">
          <div className="w-[15%] hidden lg:block min-w-[200px]"></div>
          <div
            className={` ${
              window.screen.width > 1024
                ? "translate-x-0"
                : !sidebar
                ? "translate-x-[-400px]"
                : "translate-x-0"
            } transition-transform 
               bg-text  overflow-y-scroll h-screen top-41 w-[15%] min-w-[200px] fixed  
                z-[999] `}
          >
            <Sidebar
              handleSidebarVisibility={handleSidebarVisibility}
              items={showUserMenu ? userMenu : items}
            />
          </div>

          <div className=" w-[100%] lg:w-[85%]  ">{<Outlet />}</div>
        </div>
        <Footer />
        <div className="fixed md:block  z-[999] bottom-0 hidden ">
          <NotificationHeaderSecondary />
        </div>
        <div className="opacity-0 md:block hidden ">
          <NotificationHeaderSecondary />
        </div>
      </div>
      <Modal isOpen={loginModal}>
        <Login title="Login" onClose={handleLoginModal} />
      </Modal>

      <Modal isOpen={signupModal}>
        <Signup onClose={handleSignupnModal} title={"Signup"} />
      </Modal>

      <RightSidebar />
    </>
  );
};

export default PrivateLayout;
