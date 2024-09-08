import { useEffect } from "react";
import loader from "../../assets/lodingIcon.png";
import "../style.css";

const Loading = ({ styles }: { styles?: string }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "11px";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);
  return (
    <div className={`flex justify-center items-center ${styles} fixed w-full top-0 bg-black bg-opacity-50 left-0 z-[999]`}>
      <div className="relative h-40 w-40 rounded-full ">
        <div className="bg-white w-20 h-20 flex items-center justify-center p-3 rounded-full loader ">
        <img src={loader} alt="loader" className="w-auto h-full" />
        </div>
        {/* <div className="loader absolute top-7 left-7 " /> */}
      </div>
    </div>
  );
};

// Loading.defaultProps = {
//   styles: "h-screen",
// };

export default Loading;
