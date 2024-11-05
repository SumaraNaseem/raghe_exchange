import { useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { handleModalVisibility } from "../../redux-slice/modal-state-slice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const BannerImageModal = ({ src, isOpen }) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(handleModalVisibility({ key: "homepageModal", value: false }));
  }, []);

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center ">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="  rounded-lg relative   flex justify-center items-center shadow-lg  z-10">
        <button
          onClick={onClose}
          className="text-text top-2 right-6 absolute   hover:text-gray-700"
        >
          <IoCloseSharp className="text-text text-lg font-extrabold " />
        </button>
        <div className=" rounded-lg flex flex-col px-4 h-full w-full ">
          <img src={src} className="object-cover max-w-[80vw] max-h[90vh]" />
        </div>
      </div>
    </div>
  );
};

export default BannerImageModal;
