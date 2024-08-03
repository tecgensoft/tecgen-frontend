import Categories from "./Categories";
import HeroSlider from "./HeroSlider";
import "./style.css";


export default function Hero() {

    return (
        <section>
            <div className='container flex h-[440px] gap-4 py-5'>
                <aside className='w-[22%]'>
                    {/* category */}
                    <div className='w-full h-full bg-white shadow-sm rounded-lg'>
                        <Categories />
                    </div>
                </aside>
                <div className='w-[78%]'>
                    <HeroSlider />
                </div>
            </div>
        </section>
    )
}
