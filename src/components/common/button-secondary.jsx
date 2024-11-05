// eslint-disable-next-line react/prop-types
const ButtonSeconadry = ({ children, disabled = false, ...props }) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={`flex justify-center h-10 w-full
          border-[1px] border-solid border-text-dark
          ${"border-primary-medium"}
          relative text-text items-center
          bg-primary-gradient-secondary rounded-md sm:rounded-lg px-2 py-2 sm:px-4 sm:py-2.5 gap-1
        
        `}
    >
      {children}
    </button>
  );
};

export default ButtonSeconadry;
