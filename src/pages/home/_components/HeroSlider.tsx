import { Key } from 'react';
import Slider from 'react-slick';
import Image from '../../../components/shared/Image';
import { useGetBannersQuery } from '../../../redux/feature/home/homeSlice';

export default function HeroSlider() {
    const { data, isLoading } = useGetBannersQuery(undefined)
    
    const settings = {
        dots: true,
        infinite: false,
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
        <div className="w-full h-full hero">
            {isLoading ? <p>Loading....</p> : <Slider
            className='h-full' {...settings}>
                {data?.results.map((item: { id: Key | null | undefined; image: string | undefined; }, index: number) => {
                    return <Image key={index} src={item?.image} alt="Watch 1" className="object-fit rounded-md w-full  h-[350px] " />
                })}
            </Slider>}
        </div>
    )
}
