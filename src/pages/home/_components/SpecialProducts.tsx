import SpecialOfferProduct from "./SpecialOfferProduct";

export default function SpecialProducts() {
    // const {data} = useGetProductsQuery(undefined)
    // const {data: categoriesData} = useGetCategoriesQuery(undefined)
    // console.log(data)
  return (
    <div className="py-10" >
        <div className="container">
          <div className="flex gap-3">
            <div className="w-[30%]">
              <SpecialOfferProduct />
            </div>
            <div className="w-[70%] grid grid-cols-4 gap-3">
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        </div>
    </div>
  )
}
