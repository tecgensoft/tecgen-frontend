import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/not_found.png";
import Header from "../../components/header/Header";
import Button from "../../components/shared/Button";
import Image from "../../components/shared/Image";



const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className=" bg-[#E6E9EB] pt-6 pb-6">
        <div className="container bg-white rounded  py-32 flex justify-center items-center">
          <div className="flex items-center flex-col md:flex-row gap-[80px]">
            <Image src={notFound} className="h-[320px]" />
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold text-[96px] leading-none text-primary">404</p>
              <p className="text-[#2B2B2B] font-light text-xs leading-5">
                <span className="font-semibold text-[19.2px] pb-4 inline-block pt-[10px]">Page not Found</span> <br /> The page you&apos;re
                looking for may have been moved or doesn&apos;t exist. <br /> Please check the URL or navigate back to the homepage.
              </p>
              <div className="mt-[25px] text-primary flex items-center">
                <MdKeyboardArrowLeft className="mr-1 text-xl mt-1px" />
                <Button className="font-bold" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default NotFound;
