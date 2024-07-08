import React, { RefObject } from "react";
import NotFoundImg from "../../assets/icon_of_logo.png";

interface IImageProps {
  src: string | undefined;
  className?: string;
  alt?: string;
  ref?: RefObject<HTMLImageElement>;
  onMouseOver?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const Image: React.FC<IImageProps> = (props) => {
  const { src } = props;
  // Image Error Handling Function
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    img.src = NotFoundImg;
  };
  return (
    <picture>
      <img
        {...props}
        src={!src ? NotFoundImg : src}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
        alt={props?.alt ? props?.alt : "tecgen"}
      />
    </picture>
  );
};

// Image Default Props
Image.defaultProps = {
  className: undefined,
  alt: undefined,
  ref: undefined,
  onMouseOver: undefined,
  onClick: undefined,
  onKeyDown: undefined,
};
export default Image;
