import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, type, ...props }) => {
  return (    
    <button type={type} {...props}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  children: undefined,
  className: "",
  onClick: () => {},
  disabled: false,
  type: "button",
};
export default Button;
