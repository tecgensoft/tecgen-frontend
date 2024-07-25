import Button from '../../../components/shared/Button'
import ProductCard from '../../../components/shared/ProductCard'

export default function FeatureProducts() {
    return (
        <div>
            <div className='container  pb-10'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className="text-2xl py-5 font-bold text-black-dim ">Feature Products</h1>
                        <Button className='underline font-bold text-secondary'>See more</Button>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
