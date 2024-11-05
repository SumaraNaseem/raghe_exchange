// import HeaderMain from "./components/header-main";
// import Navbar from "./components/navbar";
// import TopNotificationHeader from "./components/top-notification-header";
// import Footer from "./components/common/footer";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./components/common/sidebar";
// import Modal from "./components/common/modal";
// import { useDispatch, useSelector } from "react-redux";
// import { handleModalVisibility } from "./redux-slice/modal-state-slice";
// import Login from "./components/public/login";
// import Signup from "./components/public/signup";
// import RightSidebar from "./components/right-sidebar";
// import NotificationHeaderSecondary from "./components/notification-header-secondary";
// import { items } from "./utils/constants";

// const MainApp = () => {
//   const { data: userData } = useSelector((store) => store.userStateSlice);
//   const { isLoggedIn } = userData || {};
//   const dispatch = useDispatch();
//   const { data } = useSelector((store) => store.modalStateSlice);
//   const { signupModal, loginModal, sidebar } = data || {};

//   const handleLoginModal = () =>
//     dispatch(handleModalVisibility({ key: "loginModal", value: !loginModal }));

//   const handleSignupnModal = () =>
//     dispatch(
//       handleModalVisibility({ key: "signupModal", value: !signupModal })
//     );

//   const handleSidebarVisibility = () =>
//     dispatch(handleModalVisibility({ key: "sidebar", value: !sidebar }));

//   return (
//     <>
//       <div className="text-text">
//         <div className="sticky w-full z-50 top-0">
//           {!isLoggedIn ? <TopNotificationHeader /> : ""}
//           <div className="relative z-0">
//             <HeaderMain
//               handleSidebarVisibility={handleSidebarVisibility}
//               openLoginModal={handleLoginModal}
//               openSignupModal={handleSignupnModal}
//             />
//             <Navbar />
//           </div>
//           {isLoggedIn ? <NotificationHeaderSecondary /> : ""}
//         </div>
//         <div className="flex justify-between">
//         {isLoggedIn ? (
//           <div
//             className={` ${
//               !sidebar && window.screen.width < 768
//                 ? "translate-x-[-320px]"
//                 : "transition-x-0 "
//             } transition-transform z-[999] bg-text h-screen sticky overflow-y-scroll  block`}
//           >
//             <Sidebar handleSidebarVisibility={handleSidebarVisibility}  items={items}/>
//           </div>
//         ) : (
//           <div
//             className={` ${
//               !sidebar ? "translate-x-[-320px]" : "transition-x-0 "
//             } transition-transform z-[999] bg-text h-screen sticky overflow-y-scroll  lg:hidden block`}
//           >
//             <Sidebar handleSidebarVisibility={handleSidebarVisibility} items={items} />
//           </div>
//         )}
//         <div id="page">{<Outlet />}</div>
//         </div>
//         <div className="sticky bottom-0 z-50">
//           <Footer />
//         </div>
//       </div>
//       <Modal isOpen={loginModal}>
//         <Login title="Login" onClose={handleLoginModal} />
//       </Modal>

//       <Modal isOpen={signupModal}>
//         <Signup onClose={handleSignupnModal} title={"Signup"} />
//       </Modal>

//       <RightSidebar />
//     </>
//   );
// };

// export default MainApp;
