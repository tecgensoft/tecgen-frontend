/* eslint-disable @typescript-eslint/no-explicit-any */
import { RiArrowRightSLine, RiComputerFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";


export const useCategories = () => {
    const  {categories} = useAppSelector(state => state.category)
    // console.log(categories)
    const isSubCategories = (category: any) => {
        const isSubCategory = 'sub_category' in category
        return isSubCategory
    };
    const categoryRender = (categories: string | any[]) => {
        const allCategories: JSX.Element[] = [];
        for (let index = 0; index < categories.length; index += 1) {
            const category = categories[index]
            const isSubCategory = isSubCategories(category);
            allCategories.push(
                <li key={category.id}>
                    <Link to={'#'}>
                        {isSubCategory &&  <RiComputerFill className='text-2xl' />}
                        <span className='flex w-full items-center justify-between'>
                            <p>{category?.name}</p>
                            {isSubCategory && category?.sub_category?.length > 0 &&  <RiArrowRightSLine className='text-xl' />}
                        </span>
                    </Link>
                    {categoryRender(category) && category?.sub_category?.length > 0 ? (
                        <ul className='py-3'>{categoryRender(category?.sub_category)}</ul>
                    ) : null}
                </li>
            )
        }
        return allCategories
    }
    const category = categoryRender(categories)
    return { category }
}