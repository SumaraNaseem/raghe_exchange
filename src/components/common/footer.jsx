import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModalVisibility } from "../../redux-slice/modal-state-slice";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { data } = useSelector((store) => store.modalStateSlice);
  const { rightSidebar, loginModal } = data || {};
  const dispatch = useDispatch();
  const { data: userData } = useSelector((store) => store.userStateSlice);
  const { isLoggedIn } = userData || {};

  const handleLoginModal = () =>
    dispatch(handleModalVisibility({ key: "loginModal", value: !loginModal }));

  const handleRightSidebarVisibility = () => {
    dispatch(
      handleModalVisibility({ key: "rightSidebar", value: !rightSidebar })
    );
  };

  const tabs = [
    { name: "Home", icon: "https://images.staticcontent.io/rde/uimg/home.svg" },
    {
      name: "Inplay",
      icon: "https://images.staticcontent.io/rde/uimg/inplay.svg",
    },
    {
      name: "MiniGame",
      icon: "https://images.staticcontent.io/rde/uimg/mini_games.gif",
    },
    { name: "Menu", icon: "https://images.staticcontent.io/rde/uimg/menu.svg" },
  ];

  return (
    <div className="bg-primary-dark md:hidden block rounded-t-lg py-3">
      <div className="flex justify-around items-center ">
        {tabs.map((tab, i) => (
          <div
            key={tab.name}
            onClick={() => {
              setActiveTab(tab.name.toLowerCase());
              if (i === 3) {
                if (isLoggedIn) {
                  handleRightSidebarVisibility();
                } else {
                  handleLoginModal();
                }
              }
            }}
            className={`flex justify-center items-center rounded-2xl px-4 py-1 gap-2 ${
              activeTab === tab.name.toLowerCase() ? "bg-primary-light" : ""
            }`}
          >
            <img src={tab.icon} alt={tab.name} className="max-w-4 max-h-4" />
            {activeTab === tab.name.toLowerCase() && (
              <h3 className="text-xs">{tab.name}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
