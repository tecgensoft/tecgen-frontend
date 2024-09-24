import ResponsiveMenu from "../../components/responsiveMenu";
import Campaign from "./_components/Campaign";
import FeaturedCategory from "./_components/FeaturedCategory";
import FeatureProducts from "./_components/FeatureProducts";
import Hero from "./_components/Hero";
import SpecialProducts from "./_components/SpecialProducts";
import TopSellingProducts from "./_components/TopSellingProducts";

export default function Home() {
  return (
    <section>
      {/* <Hero /> */}
      <ResponsiveMenu />

      <Campaign />
      <SpecialProducts />
      <FeaturedCategory />
      <TopSellingProducts />
      <FeatureProducts />
    </section>
  );
}
