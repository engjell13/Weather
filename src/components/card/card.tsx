import { CardProps } from "./types";
import classnames from "classnames";
import Headline from "../headline/headline";
import Button from "../button/button";

const baseClass = "w-card";

const Card = ({
  title,
  image,
  headline,
  button,
  classNames,
  children,
  url,
  ...rest
}: CardProps): JSX.Element => {
  return (
    <div
      data-comp="C03"
      className={classnames(baseClass, classNames, "bg-white py-5 px-5")}
      {...rest}
    >
      <h1 className="text-xl mb-5 font-bold">{title}</h1>
      <a className="hover:text-blue-900" href={url}>
        {image && (
          <img
            src={image}
            alt="test"
            className="rounded-md object-cover mb-4"
          />
        )}
        {headline && <Headline classNames="mb-5" {...headline}></Headline>}
        {button && <Button url={"/"}>{children}</Button>}
      </a>
    </div>
  );
};

export default Card;
