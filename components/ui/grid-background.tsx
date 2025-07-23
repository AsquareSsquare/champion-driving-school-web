import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-400 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
