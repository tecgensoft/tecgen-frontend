import Categories from "./Categories";
import HeroSlider from "./HeroSlider";
import "./style.css";


export default function Hero() {

    return (
        <section>
            <div className='container flex gap-4 py-5'>
                <aside className='w-[240px] h-[350px] '>
                    {/* category */}
                    <div className='w-full h-full bg-white shadow-sm rounded-lg'>
                        <Categories />
                    </div>
                </aside>
                <div className='w-[78%] h-[350px] '>
                    <HeroSlider />
                </div>
            </div>
        </section>
    )
}
