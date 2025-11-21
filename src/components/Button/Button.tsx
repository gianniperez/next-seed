import React, { ReactNode } from "react";
import { BEM } from "@/utils/component/BEM";
import { className } from "@/utils/component/className";
import "./Button.scss";

type ButtonProps = {
  children?: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  const ButtonClass = className(BEM("button"));

  return <div className={ButtonClass}>{children}</div>;
}
