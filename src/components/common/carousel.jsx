import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
const TopGamesCarousel = ({slides}) => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500, 
    slidesToShow: 9, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2500, 
    arrows: false,  // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {/* eslint-disable-next-line react/prop-types */}
        {slides.map((game, index) => (
          <div key={index} className="px-2">
            <img
              src={game.image}
              alt={game.title}
              className="rounded-lg w-full cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopGamesCarousel;
