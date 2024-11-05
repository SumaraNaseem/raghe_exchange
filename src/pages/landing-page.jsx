import TopGamesCarousel from "../components/common/carousel";
import { dogRacingsData, games, horseRacingsData } from "../utils/constants";
import MainBanner from "../components/landing-page/main-banner";
import SecondaryBanner from "../components/landing-page/secondary-banner-1";
import SecondaryBanner2 from "../components/landing-page/secondary-banner-2";
import LiveStat from "../components/landing-page/live-stat";
import OtherLiveGames from "../components/landing-page/other-live-games";
import DownloadAppBanner from "../assets/pg-banner.webp";
import DesktopFooter from "../components/common/desktop-footer";
import { apiRoutes } from "../utils/api-routes";
import { useSportsData } from "../hooks/useSportsData";

const LandingPage = () => {
  const { transformedData: cricketData, isLoading: isLoadingCricket } =
    useSportsData(`${apiRoutes.sports}/4`);
  const { transformedData: soccerData, isLoading: isLoadingSoccer } =
    useSportsData(`${apiRoutes.sports}/1`);
  const { transformedData: tennisData, isLoading: isLoadingTennis } =
    useSportsData(`${apiRoutes.sports}/2`);

  if (isLoadingCricket || isLoadingSoccer || isLoadingTennis) {
    return <h3 className="text-center">Loading...</h3>;
  }
  return (
    <div className="text-text ">
      <div className="flex relative xl:w-[100vw] flex-col gap-2">
        <MainBanner />
        <SecondaryBanner />
        <SecondaryBanner2 />
        <div className="px-1.5">
          <div className="flex items-center pb-1.5">
            <h3 className="text-text-dark font-bold">Top Games</h3>
          </div>
          <TopGamesCarousel slides={games} />
          <LiveStat liveStats={cricketData} id={4} resize={true} />
          <LiveStat liveStats={soccerData} id={1} resize={true} />
          <LiveStat liveStats={tennisData} id={2} resize={true} />
          <OtherLiveGames games={horseRacingsData} racing={"Horse Racing"} />
          <OtherLiveGames games={dogRacingsData} racing={"Dog Racing"} />

          <div>
            <img
              src={DownloadAppBanner}
              className="rounded-lg"
              alt="download-banner"
            />
          </div>
          <div className="bg-text md:bg-primary-dark py-2  mt-2">
            <DesktopFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
