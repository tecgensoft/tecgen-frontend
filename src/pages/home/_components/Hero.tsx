
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

export default function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        
    };
    return (
        <section>
            <div className='container flex h-[440px] gap-4 py-5'>
                <aside className='w-[25%]'>
                    {/* category */}
                    <div className='w-full h-full bg-white-light shadow-sm rounded-lg'></div>
                </aside>
                <div className='w-[75%]'>
                    {/* Banner */}
                    {/* <div className='w-full h-full '> */}
                    <Slider {...settings}>
                        {Array.from({ length: 6 }, (_, index) => (
                            <div key={index} className="w-full h-[400px] animate-pulse bg-white-light rounded-lg" />
                        ))}
                    </Slider>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}
