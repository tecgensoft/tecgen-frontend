import { IProduct } from "../../types/Product";



export default function ProductCard(props:IProduct) {
  const { name, price } = props
  return (
    <div className="border p-4 text-left bg-white">
            {/* <img src={imgSrc} alt={title} className="mb-4" /> */}
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-xl text-gray-800">${price.toFixed(2)}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
  )
}
