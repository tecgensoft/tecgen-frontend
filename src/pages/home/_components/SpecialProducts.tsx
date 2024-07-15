import { useGetProductsQuery } from "../../../redux/feature/product/productSlice"

export default function SpecialProducts() {
    const {data} = useGetProductsQuery(undefined)
    // const {data: categoriesData} = useGetCategoriesQuery(undefined)
    console.log(data)
  return (
    <div >
        {/* <div className='container'>
            {data?.map((item:IProduct) => {
                return <ProductCard item={item} />
            })}
        </div> */}
    </div>
  )
}
