"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
// import Breadcrumbs from "./Breadcrumbs";
import { Moon, Sun } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex w-full items-center justify-between p-2 md:p-2 md:px-10 border-b-[1px] border-purple-700">
      <h1 className="text-sm md:text-xl font-bold text-gray-800 dark:text-gray-100">
        <Link href="/">ZenNotes AI</Link>
      </h1>

      {/* BreadCrumbs */}
      <div className="flex-1 flex justify-center mx-4 md:mx-0">
        <Breadcrumbs />
      </div>
      {/* <Breadcrumbs /> */}

      <div className="flex gap-2 md:gap-4 items-center justify-center">
        {/* Dark Theme and Light Theme */}
        <div className="p-[1px] relative scale-75">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-2 py-2 bg-white dark:bg-black rounded-full relative group transition duration-200 text-gray-900 dark:text-white hover:text-white hover:bg-transparent w-full"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
        {/* User Profile Section */}
        <SignedIn>
          <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full flex items-center justify-center p-[2px] scale-110">
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="p-[1px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-white dark:bg-black rounded-[6px] relative group transition duration-200 text-gray-900 dark:text-white hover:text-white hover:bg-transparent w-full">
              <SignInButton />
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
