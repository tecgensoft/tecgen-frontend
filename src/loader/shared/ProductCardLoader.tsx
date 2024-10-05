const ProductCardLoader = () => {
  return (
    <div className="relative rounded animate-pulse bg-skeleton-white">
      <div className="w-full h-[218px] relative bg-gray rounded-t" />
      <div className="p-4">
        <div className="h-[15px] bg-gray mb-[13px] px-6" />
        <div className="flex justify-between">
          <div className="flex gap-[17px]">
            <div className="h-[11px] w-[55px] bg-gray" />
            <div className="h-[11px] w-[31px] bg-gray " />
          </div>
          <div className="flex gap-[10px]">
            <div className="h-[10px] w-[21px] bg-gray" />
            <div className="h-[10px] w-[14px] bg-gray " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLoader;
