import Categories from "./Categories";
import HeroSlider from "./HeroSlider";
import "./style.css";

export default function Hero() {
  return (
    <section>
      <div className="container md:flex md:justify-between md:gap-4 py-5 overflow-hidden">
        <aside className="md:w-[240px] md:h-[350px] hidden md:block">
          {/* category */}
          <div className="w-full h-full bg-white shadow-sm rounded-lg ">
            <Categories />
          </div>
        </aside>
        <div className="md:w-[78%] md:h-[350px] mt-16 md:mt-0 overflow-hidden">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
