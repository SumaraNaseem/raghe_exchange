// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center ">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-primary-light  px-1.5 rounded-lg py-1.5   flex justify-center items-center shadow-lg  p-6 z-10">
        <div className="bg-text rounded-lg flex flex-col px-4 h-full w-full ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
