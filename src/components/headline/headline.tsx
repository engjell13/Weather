import { HeadlineProps } from "./types";
import classnames from "classnames";
import { baseClass, variants } from "./const";

const Headline = ({
  level,
  variant,
  classNames,
  children,
  ...rest
}: HeadlineProps): JSX.Element => {
  const HeadingLevel = level;
  const variantClassNames = variants[variant];
  return (
    <HeadingLevel
      data-comp="C01"
      className={classnames(baseClass, variantClassNames, classNames)}
      {...rest}
    >
      {children}
    </HeadingLevel>
  );
};

export default Headline;
