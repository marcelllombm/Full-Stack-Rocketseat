import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-emibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },

  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: `${textVariants({ variant })} ${className ? className : ""}`,
      ...props,
    },
    children
  );
}
