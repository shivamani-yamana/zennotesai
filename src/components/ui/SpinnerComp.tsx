"use client";

import React from "react";
import { cn } from ".././../lib/utils";

function SpinnerComp({ twclasses = "w-full" }: { twclasses?: string }) {
  return (
    <span
      className={cn(
        "inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
        twclasses
      )}
      role="status"
    ></span>
  );
}

export default SpinnerComp;
