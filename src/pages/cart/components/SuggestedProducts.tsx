import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../../../components/shared/ProductCard";
import ProductCardLoader from "../../../loader/shared/ProductCardLoader";
import { useGetProductsQuery } from "../../../redux/feature/product/productSlice";

const SuggestedProducts = ({ width }: { width?: string }) => {
  const { data: topSeller, isLoading: topSellerLoading } = useGetProductsQuery({
    filter: "is_top_sale",
    page: 1,
    page_size: "20",
  });
  // const renderItem = ({ isLoading, item }: IRenderItem) => {
  //   return isLoading ? (
  //     <ProductCardLoader />
  //   ) : (
  //     <ProductCard product={item as IProduct} />
  //   );
  // };
  return (
    <div className={`pb-4 ${width}`}>
      <p className="pb-3 font-medium">Suggested Product</p>
      {/* <SwiperSlider
        loading={topSellerLoading}
        data={topSeller?.data}
        renderItem={renderItem}
      /> */}
    </div>
  );
};
SuggestedProducts.defaultProps = {
  width: "w-full",
};

export default SuggestedProducts;
