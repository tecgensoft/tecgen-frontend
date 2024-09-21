/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCategories } from "../../../hooks/useCategories";

export default function Categories() {
  const { category } = useCategories();
  console.log("category", category);
  return (
    <div>
      <ul className="categories ">{category}</ul>
    </div>
  );
}
