import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400", className)}
      {...props}
    />
  )
);
Input.displayName = "Input";
