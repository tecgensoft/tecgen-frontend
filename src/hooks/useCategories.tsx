/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
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

    const categoryRender = (categories: any, parentRoute = "") => {
        const allCategories: JSX.Element[] = [];
        for (let index = 0; index < categories.length; index += 1) {
            const category = categories[index]
            const route = `${parentRoute}/${category.name}`;
            // const isCategory = !isCategories(category) && category?.sub_category !== 1
            // console.log()
            allCategories.push(
                <li key={index} className="capitalize">
                    <Link to={route} className="relative">
                        <span className="flex items-center gap-4 w-full">
                            {isCategories(category) && category?.sub_category !== 1 && <Image src={category?.logo} className="w-[20px] h-[20px]" />}
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
                                {categoryRender(category?.sub_category, route)}
                            </ul>
                        </div>
                    ) : null}
                    {isBrand(category) && category?.brand?.length > 0 ? (
                        <ul className="hover:text-yellow">{categoryRender(category?.brand, route)}</ul>
                    ) : null}
                </li>
            );
        }

        return allCategories;
    };
    const category = categoryRender(categories)
    return { category }
}