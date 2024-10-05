import ProductCardLoader from "../shared/ProductCardLoader";

const CategoryGroupLoader = () => {
  return (
    <div className="flex gap-4">
      <div className="bg-gray animate-pulse rounded-15px w-[245px]" />
      <div className="bg-gray animate-pulse rounded-15px w-[245px]" />
      <div className="grid grid-cols-1 xlg:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 w-[721px]">
        {Array.from({ length: 6 }, (_, index) => (
          <ProductCardLoader key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGroupLoader;
