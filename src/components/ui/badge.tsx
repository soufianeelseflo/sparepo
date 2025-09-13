import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700", className)} {...props} />;
}
