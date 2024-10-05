import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";

const NoItems = ({
  img,
  title,
  spanText,
  button,
}: {
  img: string;
  title: string;
  spanText?: string;
  button?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div className="h-[573px] flex justify-center items-center w-full rounded mt-4">
      <div>
        <Image src={img} className="mx-auto" />
        <p className="mt-6 text-sm font-medium text-center text-[#363739]">
          {title}
        </p>
        <p className="text-spanish-gray text-sm font-medium mt-2 text-center">
          {spanText}
        </p>{" "}
        {button && (
          <Button
            className="flex items-center bg-primary mt-7 px-[70px] py-3 text-white text-xs rounded hover:bg-primary-dark duration-300 mx-auto font-semibold"
            onClick={() => navigate("/")}
          >
            Keep Shopping
          </Button>
        )}
      </div>
    </div>
  );
};
NoItems.defaultProps = {
  spanText: "",
  button: true,
};
export default NoItems;
