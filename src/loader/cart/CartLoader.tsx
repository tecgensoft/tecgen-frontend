const CartLoader = () => {
  return (
    <tbody>
      <tr>
        <td colSpan={7}>
          <div className="animate-pulse bg-white rounded">
            {/* <div className="bg-skeleton flex justify-center items-center rounded h-[46px] w-full mb-2" /> */}
            {/* {Array.from({ length: 2 }, (_, index) => ( */}
            <div className="bg-skeleton flex justify-between items-center rounded h-[80px] w-full mb-2 pl-[57px] mr-[230px]">
              <div className="w-1/4 flex items-center gap-[19px]">
                <div className="bg-skeleton-white h-[50px] w-[60px]" />
                <div className="flex flex-col gap-[10px]">
                  <div className="bg-skeleton-white h-[11px] w-[96px]" />
                  <div className="bg-skeleton-white h-[7px] w-[69px]" />
                </div>
              </div>
              <div className="w-1/4 ml-4">
                <div className="w-[78px] h-[31px] bg-skeleton-white" />
              </div>
              <div className="w-1/4 ">
                <div className="w-[46px] h-[10px] bg-skeleton-white" />
              </div>
              <div className="w-1/4 ">
                <div className="w-[46px] h-[10px] bg-skeleton-white" />
              </div>
            </div>
            {/* ))} */}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CartLoader;
