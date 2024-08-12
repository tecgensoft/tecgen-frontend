/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/lodingIcon.png";
import Image from "../components/shared/Image";
import { useAppSelector } from "../redux/hooks";
const isCategories = (category: any) => {
    return "sub_category" in category;
};
const isBrand = (category: any) => {
    return "brand" in category;
};
export const useCategories = () => {
    const { categories } = useAppSelector(state => state.category)

    const categoryRender = (categories: any, parentRoute = "", isParent = true) => {
        const allCategories: JSX.Element[] = [];
        for (let index = 0; index < categories.length; index += 1) {
            const category = categories[index]
            const route = `${parentRoute}/${category.name}`;
            allCategories.push(
                <li key={index} className="capitalize">
                    <Link to={route} className="relative">
                        <span className="flex items-center gap-4 w-full">
                        {isParent  && (
                            <div  className="w-[20px] h-[20px]">
                                <Image src={logo} className="" />
                            </div>
                        )}
                            <span className="w-full flex justify-between items-center ">
                                <p>{category?.name} </p>
                                {category?.sub_category && category.sub_category.length > 0 ? (
                                    <MdKeyboardArrowRight className="text-xl" />
                                ) : null}
                            </span>
                        </span>
                    </Link>

                    {isCategories(category) && category?.sub_category?.length > 0 ? (
                        <div>
                            <ul>
                                {categoryRender(category?.sub_category, route, false)}
                            </ul>
                        </div>
                    ) : null}
                    {isBrand(category) && category?.brand?.length > 0 ? (
                        <ul className="hover:text-yellow">{categoryRender(category?.brand, route, false)}</ul>
                    ) : null}
                </li>
            );
        }

        return allCategories;
    };
    const category = categoryRender(categories)
    return { category }
}