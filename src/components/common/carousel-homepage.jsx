import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselHomepage() {
  // Array of image objects with desktop and mobile URLs
  const images = [
    {
      desktop: "https://images.staticcontent.io/banners/desktop_banner_1.jpg",
      mobile: "https://images.staticcontent.io/banners/mobile_banner_1.jpg",
      alt: "Banner 1",
    },
    {
      desktop: "https://images.staticcontent.io/banners/desktop_banner_3.png",
      mobile: "https://images.staticcontent.io/banners/mobile_banner_3.png",
      alt: "Banner 3",
    },
    {
      desktop: "https://images.staticcontent.io/banners/desktop_banner_11.jpg",
      mobile: "https://images.staticcontent.io/banners/mobile_banner_11.jpg",
      alt: "Banner 11",
    },
    {
      desktop: "https://images.staticcontent.io/banners/desktop_banner_13.jpg",
      mobile: "https://images.staticcontent.io/banners/mobile_banner_13.jpg",
      alt: "Banner 13",
    },
    {
      desktop: "https://images.staticcontent.io/banners/desktop_banner_16.jpg",
      mobile: "https://images.staticcontent.io/banners/mobile_banner_16.jpg",
      alt: "Banner 16",
    },
  ];

  const getImageUrl = (desktop, mobile) => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? mobile : desktop;
    }
    return desktop;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          margin: "0 5px",
        }}
      ></div>
    ),
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="w-full" key={index}>
            <img
              src={getImageUrl(image.desktop, image.mobile)}
              className="w-full"
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
