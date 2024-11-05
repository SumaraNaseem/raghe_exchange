import { useCallback, useState } from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled = false, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleInActive = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div
      className={`${
        isActive ? " bg-text" : "outline-transparent"
      } px-0.5 py-0.5 rounded-md sm:rounded-lg `}
    >
      <button
        disabled={disabled}
        onMouseDown={handleActive}
        onMouseUp={handleInActive}
        onMouseLeave={handleInActive}
        {...props}
        className={`flex justify-center sm:h-10  h-6
          border-r-[1px] border-b-[1px] border-l-[1px] border-t-[1px] border-primary-medium
          ${isActive ? "border-black" : "border-primary-medium"}
          relative text-text items-center
          bg-primary-gradient-secondary rounded-md sm:rounded-lg px-2 py-2 sm:px-4 sm:py-2.5 gap-1
          ${isActive ? "outline outline-1 outline-black" : ""}
        `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
