import { PropsWithChildren } from "react";

export type HeadlineProps = PropsWithChildren<{
  level: "h1" | "h2" | "h3" | "h4" | "h5";
  variant:
    | "headingOne"
    | "headingTwo"
    | "headingThree"
    | "headingFour"
    | "headingFive";
  classNames?: string;
}>;
