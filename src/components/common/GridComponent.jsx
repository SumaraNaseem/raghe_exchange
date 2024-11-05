/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const GameGrid = ({ size = "md" }) => {
  const sizeClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const data = [
    "https://images.staticcontent.io/casino/without-login/ip/7-UP-and-Down.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Amar-Akbar-Anthony.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Auto-Roulette.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Bollywood-Casino.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Book-Cricket.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Casino-War.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Cricket-War.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Dragon-Tiger.webp",
    "https://images.staticcontent.io/casino/without-login/ip/High-Low.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Lottery.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Muflis-Teen-Patti.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Teen-Patti.webp",
    "https://images.staticcontent.io/casino/without-login/ip/Worli-Matka.webp",
  ];

  return (
    <div className="mx-auto px-1 w-full">
      <div className="flex mt-4 mb-2 flex-wrap">
        {data.map((img, index) => (
          <div
            key={index}
            className="w-1/2 px-1.5 mb-2 sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 livecasino-item slots__item cursor-pointer relative"
          >
            <img
              alt=""
              src={img}
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

export default GameGrid;
