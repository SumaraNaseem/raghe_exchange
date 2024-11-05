/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CasinoCard = ({ size = "md", data }) => {
  const sizeClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div className="mx-auto w-full">
      <div className="flex  flex-wrap">
        {data.map((casino, index) => (
          <div
            key={index}
            className="w-1/2 px-1.5 mb-2 sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 livecasino-item slots__item cursor-pointer relative"
          >
            <img
              alt=""
              src={casino.image}
              className={`border-solid border-3 border-primary-dark ${sizeClass[size]} h-auto max-100 max-w-full`}
            />
            <div className="absolute inset-0 flex items-center justify-center group">
              <div className="flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-0 ease-in bg-black bg-opacity-60 rounded-md h-full w-11/12">
                <a
                  href="test.com"
                  className="bg-primary-light rounded-full text-text inline-block font-bold px-4 py-1.5 uppercase transition-colors duration-0 ease-in hover:bg-primary-dark"
                >
                  Play
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoCard;
