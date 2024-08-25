import icon from "../../../assets/fireIcon.png";
import Button from "../../../components/shared/Button";
import Image from "../../../components/shared/Image";
import ProductCard from "../../../components/shared/ProductCard";
import { IProduct } from "../../../interface/Product";
import { useFeaturesProductsQuery } from "../../../redux/feature/product/productSlice";
import { skeletonArray } from "../../../utility/SkeletonArray";
export default function TopSellingProducts() {
  const { data, isLoading } = useFeaturesProductsQuery(undefined)
  const featuresProducts = data?.results
  return (
    <div>
      <div className='container my-10 py-4 px-5 bg-white drop-shadow-md rounded-md'>
        <div>
          <div className='flex justify-between items-center mb-3 h-10'>
            <h1 className="text-xl py-5 font-medium text-black-dim flex items-center gap-3"><Image src={icon} alt="fc" className="w-6" /> Top Selling Products</h1>
            <Button className='underline font-bold text-secondary'>See more</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {isLoading && skeletonArray(5).map((_, index) => <div key={index} className="w-[228px] h-[300px] bg-skeleton"></div>)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuresProducts && featuresProducts.slice(0, 4).map((product: IProduct) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
