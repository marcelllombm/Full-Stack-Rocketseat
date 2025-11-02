import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return <div className={twMerge("bg-zic-50/10 animate-pulse", className)} {...props} />;
}
