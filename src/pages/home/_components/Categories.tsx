/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCategories } from '../../../hooks/useCategories';

export default function Categories() {
    const {category} = useCategories()
    // const { data: { results = [] } = {} } = useGetCategoriesQuery(undefined)
    // <----------Recursion function for productCategory---------->
    //   const categoryRender = (categories: (ICategoryGroupType | ICategoriesType | ISubCategoriesType)[], parentRoute = "") => {
    //     const allCategories: JSX.Element[] = [];
    //     for (let index = 0; index < categories.length; index += 1) {
    //       const category = categories[index] as ICategoryGroupType | ICategoriesType | ISubCategoriesType;
    //       const route = `${parentRoute}/${category.slug}`;
    //       const isCategory = !isCategories(category);
    //       allCategories.push(
    //         <li key={index} className="capitalize">
    //           <Link to={isCategory ? route : "#"} className="relative">
    //             <span className="flex items-center gap-4 w-full">
    //               {isCategories(category) && category?.categories && <Image src={category?.logo} className="w-[20px] h-[20px]" />}
    //               <span className="w-full flex justify-between items-center ">
    //                 <p>{category?.name} </p>
    //                 {isCategories(category) && category?.categories && category.categories.length > 0 ? (
    //                   <MdKeyboardArrowRight className="text-xl" />
    //                 ) : null}
    //               </span>
    //             </span>
    //           </Link>

    //           {isCategories(category) && category?.categories?.length > 0 ? (
    //             <ul>
    //               <div className="scrollbar">{categoryRender(category?.categories, route)}</div>
    //             </ul>
    //           ) : null}
    //           {isSubCategories(category) && category?.subcategories?.length > 0 ? (
    //             <ul className="hover:text-yellow">{categoryRender(category?.subcategories, route)}</ul>
    //           ) : null}
    //         </li>
    //       );
    //     }

    //     return allCategories;
    //   };
    // const isSubCategories = (category: any) => {
    //     const isSubCategory = 'sub_category' in category
    //     return isSubCategory
    // };
    // const categoryRender = (categories: string | any[]) => {
    //     const allCategories: JSX.Element[] = [];
    //     for (let index = 0; index < categories.length; index += 1) {
    //         const category = categories[index]
    //         const isSubCategory = isSubCategories(category);
    //         allCategories.push(
    //             <li key={category.id}>
    //                 <Link to={'#'}>
    //                     {isSubCategory &&  <RiComputerFill className='text-2xl' />}
    //                     <span className='flex w-full items-center justify-between'>
    //                         <p>{category?.name}</p>
    //                         {isSubCategory && category?.sub_category?.length > 0 &&  <RiArrowRightSLine className='text-xl' />}
    //                     </span>
    //                 </Link>
    //                 {categoryRender(category) && category?.sub_category?.length > 0 ? (
    //                     <ul className='py-3'>{categoryRender(category?.sub_category)}</ul>
    //                 ) : null}
    //             </li>
    //         )
    //     }
    //     return allCategories
    // }
    return (
        <div>
            <ul className='categories'>
                {/* {categoryRender(results)} */}
                {category}
            </ul>
        </div>
    )
}
