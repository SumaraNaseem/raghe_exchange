const DesktopFooter = () => {
  const icons = [
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/evolution.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/ezugi.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/pragmatic-live.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/betgames.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/ssg.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/betsoft.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/spribe.svg",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/Evoplay.png",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/logo-18plus.svg",
      type: "desktop",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/evolution.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/ezugi.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/pragmatic.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/betgames.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/superspade.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/betsoft.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/spribe.svg",
      type: "mobile",
    },
    {
      url: "https://images.staticcontent.io/casino/banner/loginimages/mobile/evoplay.svg",
      type: "mobile",
    },
  ];

  return (
    <div className="text-text">
      <div className=" py-2 justify-center md:flex hidden items-center gap-4 flex-wrap">
        {icons
          .filter((item) => item.type === "desktop")
          .map((icon, i) => (
            <div key={i} className={`flex items-center`}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.url}
                  alt={`Icon ${i}`}
                  className="py-1 max-w-[70px] max-h-[70px]"
                />
              </a>
            </div>
          ))}
      </div>
      <div className="flex py-2  md:hidden justify-center items-center gap-2 md:gap-8 flex-wrap">
        {icons
          .filter((item) => item.type === "mobile")
          .map((icon, i) => (
            <div key={i} className={`flex items-center`}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.url}
                  alt={`Icon ${i}`}
                  className="py-1 max-w-[60px] max-h-[60px]"
                />
              </a>
            </div>
          ))}
      </div>
      <div>
        <h3 className="text-xs md:text-text text-text-dark font-bold text-center">
          You must be over 18 years old, or the legal age at which gambling or
          gaming activities are allowed under the law or jurisdiction that
          applies to you. You must reside in a country in which access to online
          gambling to its residents.
        </h3>
      </div>
    </div>
  );
};

export default DesktopFooter;
