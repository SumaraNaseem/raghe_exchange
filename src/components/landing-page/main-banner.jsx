import MainBannerWeb from "../../assets/main-banner.webp";
import MainBannerMobile from "../..//assets/main-banner-mobile.webp";

const MainBanner = () => {
    return    <div className="">
    <img src={MainBannerWeb} className="hidden sm:inline" alt="banner" />
    <img
      src={MainBannerMobile}
      className="inline sm:hidden"
      alt="banner"
    />
  </div>
}

export default MainBanner