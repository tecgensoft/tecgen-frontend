import Slider from 'react-slick';
import Image from '../../../components/shared/Image';
import img3 from "../.././../assets/hero_3.jpeg";
import img2 from "../.././../assets/hero_4.jpeg";
import img1 from "../.././../assets/hero_5.jpeg";
const heroData = [
    {
        id: 1,
        img: img1,        
    },
    {
        id: 2,
        img: img2,        
    },
    {
        id: 3,
        img: img3,        
    }
]

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        customPaging: () => (
            <div className="bg-gray-300 rounded-full cursor-pointer"></div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="flex justify-center space-x-2 shadow-sm">{dots}</ul>
            </div>
        ),
    };
  return (
    <div className="w-full hero">
            <Slider {...settings}>
                {heroData.map((item) => {
                    return <div key={item.id} className="relative rounded-md">
                    <Image src={item.img} alt="Watch 1"className="w-full h-[400px] object-cover  rounded-md" />
                </div>
                })}
                {/* Add more slides as needed */}
            </Slider>
        </div>
  )
}
