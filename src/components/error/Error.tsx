import { useErrorBoundary } from "react-error-boundary";
import { MdKeyboardArrowLeft } from "react-icons/md";
import danger from "../../assets/danger.png";
import Button from "../shared/Button";
import Image from "../shared/Image";

const ErrorReturn = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className=" bg-[#E6E9EB] py-4 h-screen flex justify-center items-center">
      {/* <div className="container bg-whit rounded pt-[150px] pb-[120px] items-center"> */}
      <div className="container bg-white rounded py-[250px] items-center">
        <div className="flex gap-[80px] justify-center text-center">
          <div className="flex flex-col justify-between h-full">
            <Image src={danger} className="mx-auto" />
            <p className="text-[#2B2B2B] font-light text-xs leading-6">
              <span className="font-semibold text-[19.2px] pb-3 inline-block pt-[20px] mt-1">Something Went Wrong</span> <br /> The page
              you&apos;re looking for may have been moved or doesn&apos;t exist. <br /> Please check the URL or navigate back to the
              homepage.
            </p>
            <div className="mt-[40px] text-primary flex items-center justify-center">
              <MdKeyboardArrowLeft className="mr-1 text-xl mt-1px" />
              <Button className="font-bold" onClick={resetBoundary}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorReturn;
