import { ButtonProps } from "./types";
import classnames from "classnames";

const baseClass = "w-button";

const Button = ({
  url,
  classNames,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  const tailwindClasses =
    "inline-block px-7 py-2 bg-blue-600 text-white font-medium text-sm leading-tight rounded-full hover:shadow-md transition duration-300 ease-in-out";
  return (
    <a
      data-comp="C02"
      className={classnames(baseClass, tailwindClasses)}
      href={url}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
