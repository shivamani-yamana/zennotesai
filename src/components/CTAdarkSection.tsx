"use client";
import Link from "next/link";
import React from "react";

function CTAdarkSection() {
  return (
    <div className="w-full mx-2 my-20 md:mx-10 rounded-xl max-w-7xl bg-slate-950">
      {/* Number Section */}
      <div className="flex items-center justify-between px-8 py-6">
        <h4 className="max-w-5xl text-2xl font-normal tracking-wide text-center text-white lg:text-5xl lg:leading-tight">
          Give it a try, You&apos;ll love it
        </h4>
        <Link href={"/dashboard"}>
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] cursor-pointer">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-black bg-white rounded-full hover:bg-slate-100 backdrop-blur-3xl">
              Sign up
            </span>
          </button>
        </Link>
      </div>
      {/* CTA Section */}
    </div>
  );
}

export default CTAdarkSection;
