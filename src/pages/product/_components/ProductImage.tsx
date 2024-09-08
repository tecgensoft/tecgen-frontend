import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "../../../components/shared/Image";



const ProductImages = ({ productImages }: { productImages: string[]}) => {
  // const [image, setImage] = useState<string | undefined>("");
  // const [imgIndex, setImgIndex] = useState<number>(0);

  // const handleImageMouseOver = (img: string, i: number) => {
  //   setImage(img);
  //   setImgIndex(i);
  // };

  // useEffect(() => {
  //   if (productImages && productImages.length > 0) {
  //     setImage(productImages[0]);
  //   }
  // }, [productImages]);

  // if (!productImages) {
  //   return null;
  // }


 
  return (
    <div className="">
      <div className=" w-full h-[320px]">
        <Image src={productImages[0] || ""} className="w-auto h-full mx-auto" />
      </div>
      <div className="w-full mt-6">
      {/* <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop
        >
          {productImages?.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                key={img}
                src={img || ""}
                alt=""
                className=" w-full h-[260px] object-contain"
                onClick={() => handleImageMouseOver(img, i)}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      
    </div>
  );
};

export default ProductImages;
