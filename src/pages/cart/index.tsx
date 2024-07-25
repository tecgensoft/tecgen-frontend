import Image from "../../components/shared/Image"
import image from ".././../assets/image1.png"

export default function Cart() {
    return (
        <div>
            <div className="container  py-5">
                <div className="bg-white p-5">
                    <h1 className="text-xl font-bold">Cart</h1>
                    <div>
                        <div className="border border-skeleton w-12 h-12 p-1">
                            <Image src={image} alt="product" className="block mx-auto h-auto" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
