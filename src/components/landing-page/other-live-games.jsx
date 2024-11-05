import "./style.css";

// eslint-disable-next-line react/prop-types
const OtherLiveGames = ({ games, racing }) => {
  return (
    <div className="flex bg-text text-text-dark font-bold flex-col">
      <div className="bg-primary-light px-2 py-1 border-t-[1px] border-solid border-[#dee2e6]">
        <h3 className="text-sm text-text">{racing}</h3>
      </div>
      <div className="flex gap-6 py-1 justify-start items-center no-scrollbar overflow-x-scroll">
        {/* eslint-disable-next-line react/prop-types */}
        {games.map((game, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex justify-center items-center">
              <img
                style={{
                  maxWidth: "60px",
                  minWidth: "40px",
                  height: "auto",
                }}
                src={game.icon}
                alt={game.name}
              />
            </div>
            <div className="flex relative flex-col justify-center hover:text-primary-light transition-all gap-1 cursor-pointer">
              <h1 data-text={game.location} className="text-nowrap  ">
                {game.location}
              </h1>
              <h1 data-text={game.dateTime} className="text-nowrap  ">
                {game.dateTime}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherLiveGames;
