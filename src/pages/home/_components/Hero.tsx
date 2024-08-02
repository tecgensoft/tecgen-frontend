import Categories from "./Categories";
import HeroSlider from "./HeroSlider";
import "./style.css";


export default function Hero() {

    return (
        <section>
            <div className='container flex h-[440px] gap-4 py-5'>
                <aside className='w-[25%]'>
                    {/* category */}
                    <div className='w-full h-full bg-white-light shadow-sm rounded-lg'>
                        <Categories />
                    </div>
                </aside>
                <div className='w-[75%]'>
                    <HeroSlider />
                </div>
            </div>
        </section>
    )
}
