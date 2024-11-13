import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-[1280px] mx-auto", className)}>{children}</div>
  );
};
