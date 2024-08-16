import Image from '../../../components/shared/Image';
import img3 from "../.././../assets/hero_3.jpeg";
import img2 from "../.././../assets/hero_4.jpeg";
import img1 from "../.././../assets/hero_5.jpeg";

const heroData = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    }
]


export default function Campaign() {
    
    return (
        <div>
            <div className='container'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        heroData.map(item => <div key={item.id} className="relative rounded-md">
                            <Image src={item.img} alt="Watch 1" className="w-full h-[180px] object-cover  rounded-md" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
