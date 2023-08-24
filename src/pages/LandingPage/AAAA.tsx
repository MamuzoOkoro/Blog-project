import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"  

const AAAAA = () => {
    const settings = {
        infinite: true,
        speed: 30000,
        autoplaySpeed: 1000,
        slidesToShow: 8,
        slidesToScroll: 6,
        autoplay: true,
        cssEase: "linear",
        responsive:[]
      };
  return (
    <div className="w-[95%]">
                    <Slider {...settings}>
         <span className="text-[15px] text-[#000000b2]">Featured</span>
         <span className="text-[15px] text-[#000000b2]">Culture</span>
         <span className="text-[15px] text-[#000000b2]">Politics</span>
         <span className="text-[15px] text-[#000000b2]">Technology</span>
         <span className="text-[15px] text-[#000000b2]">Business</span>
         <span className="text-[15px] text-[#000000b2]">Finance</span>
         <span className="text-[15px] text-[#000000b2]">Food & Drink</span>
         <span className="text-[15px] text-[#000000b2]">Podcast</span>
         <span className="text-[15px] text-[#000000b2]">sports</span>
         </Slider>
    </div>
  )
}

export default AAAAA