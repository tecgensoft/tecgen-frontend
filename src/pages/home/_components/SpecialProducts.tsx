import ProductCard from "../../../components/shared/ProductCard";
import {
  useFeaturesProductsQuery,
  useGetProductsQuery,
} from "../../../redux/feature/product/productSlice";
import SpecialOfferProduct from "./SpecialOfferProduct";

export default function SpecialProducts() {
  const { data } = useFeaturesProductsQuery(undefined);
  // const {data: categoriesData} = useGetCategoriesQuery(undefined)
  // console.log(data)
  const featuresProducts = data?.results || [];
  console.log(featuresProducts);

  return (
    <div className="py-10">
      <div className="container">
        <div className="md:flex gap-3">
          <div className="md:w-[30%]  sm:-w[50%]">
            <SpecialOfferProduct />
          </div>
          <div className="w-[70%] flex flex-wrap gap-3  ">
            {/* {featuresProducts &&
              featuresProducts.slice(0, 4).map((product: IProduct) => {
                console.log("first", product);
                return <ProductCard key={product.id} product={product} />;
              })} */}
            {/* <ProductCard
              key={featuresProducts[0].id}
              product={featuresProducts[0]}
            />
            <ProductCard
              key={featuresProducts[0].id}
              product={featuresProducts[0]}
            />
            <ProductCard
              key={featuresProducts[0].id}
              product={featuresProducts[0]}
            />
            <ProductCard
              key={featuresProducts[0].id}
              product={featuresProducts[0]}
            />
            <ProductCard
              key={featuresProducts[0].id}
              product={featuresProducts[0]}
            />
            <ProductCard
              key={featuresProducts[0].id}
              product={featuresProducts[0]}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
