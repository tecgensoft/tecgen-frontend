import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import icon6 from "../../../assets/icon6.png";
import icon7 from "../../../assets/icon7.png";
import icon8 from "../../../assets/icon8.png";
import Image from "../../../components/shared/Image";

export default function FeaturedCategory() {
    const data = [
        {
            name: "AC",
            icon: icon1,
        },
        {
            name: "Done",
            icon: icon2,
        },
        {
            name: "Gimble",
            icon: icon3,
        },
        {
            name: "Laptop",
            icon: icon4,
        },
        {
            name: "Laptop Accessories",
            icon: icon5,
        },
        {
            name: "TV",
            icon: icon6,
        },
        {
            name: "Mobile Phone",
            icon: icon7,
        },
        {
            name: "Smart Watch",
            icon: icon8,
        },
        {
            name: "AC",
            icon: icon1,
        },
        {
            name: "Done",
            icon: icon2,
        },
        {
            name: "Gimble",
            icon: icon3,
        },
        {
            name: "Laptop",
            icon: icon4,
        },
        {
            name: "Laptop Accessories",
            icon: icon5,
        },
        {
            name: "TV",
            icon: icon6,
        },
    ];
    return <div>
        <div className="container">
            <h1 className="text-2xl py-5 font-bold ">Featured Category</h1>
            <div className="grid grid-cols-7 gap-3">
                {data.map(item => <div key={item.name} className="bg-white shadow-sm hover:shadow-md duration-300 flex flex-col items-center justify-center w-full h-32 rounded-xl gap-3 group cursor-pointer">
                    <Image src={item.icon} alt="icon" />
                    <h3 className="group-hover:text-primary font-medium text-sm">{item.name}</h3>
                </div>)}
            </div>
        </div>
    </div>;
}
