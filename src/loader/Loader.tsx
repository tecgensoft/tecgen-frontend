import { useEffect } from "react";
import loader from "../assets/loader.png";
import "../styles/style.css";

const Loader = ({ styles }: { styles?: string }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className={`flex justify-center items-center ${styles} fixed w-full top-0 bg-black bg-opacity-50 left-0 z-[999]`}
    >
      <div className="relative h-40 w-40  rounded-full ">
        <img src={loader} alt="loader" className="h-[150px] w-[150px]" />
        <div className="loader absolute top-7 left-7 " />
      </div>
    </div>
  );
};

Loader.defaultProps = {
  styles: "h-screen",
};

export default Loader;
