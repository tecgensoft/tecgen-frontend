import Image from "../../../components/shared/Image";
import { useAppSelector } from "../../../redux/hooks";
interface ICategory {
  created_at: string;
  created_by: number;
  icon: string | null;
  id: number;
  is_active: boolean;
  logo: string | null;
  name: string;
  ordering: number;
  show_in_ecommerce: boolean;
  updated_at: string;
  updated_by: number | null;
}
export default function FeaturedCategory() {
  const { categories } = useAppSelector((state) => state.category);

  return (
    <div>
      <div className="container ">
        <h1 className="text-2xl py-5 font-bold "> Featured Categories</h1>
        <div className="md:grid md:grid-cols-7 gap-3  ">
          {categories &&
            categories.map((category: ICategory) => (
              <div
                key={category.id}
                className="bg-white max-w-40 shadow-sm hover:shadow-md duration-300 flex flex-col items-center justify-center w-full h-32 rounded-xl gap-3 group cursor-pointer"
              >
                {category.icon && (
                  <Image className="max-w-16 " src={category.icon} alt="icon" />
                )}
                <h3 className="group-hover:text-primary font-medium text-sm capitalize">
                  {category.name}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
