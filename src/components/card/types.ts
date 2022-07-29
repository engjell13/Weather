import { PropsWithChildren } from "react";
import { ButtonProps } from "../button";
import { HeadlineProps } from "../headline";

export type CardProps = PropsWithChildren<{
  title?: string;
  image?: string;
  headline?: HeadlineProps;
  button?: ButtonProps[];
  classNames?: string;
  url: string;
}>;
