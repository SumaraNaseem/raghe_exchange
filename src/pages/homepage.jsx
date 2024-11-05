import { dogRacingsData, horseRacingsData } from "../utils/constants";
import OtherLiveGames from "../components/landing-page/other-live-games";
import { useSportsData } from "../hooks/useSportsData";
import { apiRoutes } from "../utils/api-routes";
import LiveSports from "../components/common/live-sports";
import CarouselHomepage from "../components/common/carousel-homepage";
import BannerImageModal from "../components/common/banner-image-modal";
import { useSelector } from "react-redux";


const Homepage = () => {
  const data = useSelector((store) => store.modalStateSlice);
  const {homepageModal} = data.data || {}
  const { transformedData: cricketData, isLoading: isLoadingCricket } =
    useSportsData(`${apiRoutes.sports}/4`);
  const { transformedData: soccerData, isLoading: isLoadingSoccer } =
    useSportsData(`${apiRoutes.sports}/1`);
  const { transformedData: tennisData, isLoading: isLoadingTennis } =
    useSportsData(`${apiRoutes.sports}/2`);

  if (
    isLoadingCricket ||
    isLoadingSoccer ||
    isLoadingTennis 
  ) {
    return <h3 className="text-center">Loading...</h3>;
  }
  return (
    <div className="text-text ">
      <CarouselHomepage />
      <div className="flex relative  flex-col gap-2">
        <div className="px-1.5">
          <div className="flex items-center pb-1.5">
            <h3 className="text-text-dark font-bold">Top Games</h3>
          </div>
          <LiveSports liveStats={cricketData} id={4} resize={true} />
          <LiveSports liveStats={soccerData} id={1} resize={true} />
          <LiveSports liveStats={tennisData} id={2} resize={true} />
          <OtherLiveGames games={horseRacingsData} racing={"Horse Racing"} />
          <OtherLiveGames games={dogRacingsData} racing={"Dog Racing"} />
        </div>
      </div>

      <BannerImageModal
        src={
          "https://images.staticcontent.io/splashpopup/CLIENTDESKTOP_splashpopup.jpg"
        }
        isOpen={homepageModal}
      />
    </div>
  );
};

export default Homepage;
