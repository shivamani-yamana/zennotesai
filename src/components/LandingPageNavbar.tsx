"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Importing the Menu icon from Lucide React
import { NavItems } from "./NavItems";
import DarkThemeButton from "./ui/DarkThemeButton";
import { useUser } from "@clerk/nextjs";

function LandingPageNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu on mobile

  // Toggle function for the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const { isSignedIn } = useUser();
  console.log(isSignedIn);

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 text-xl max-w-screen-2xl bg-white dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 dark:bg-opacity-10 w-full">
      <Link href={"/"}>
        <h2 className="font-bold text-black dark:text-white font-tt-travels">
          ZenNotes AI
        </h2>
      </Link>
      {/* Show the nav items on larger screens */}
      <div className="hidden md:flex">
        <NavItems />
      </div>
      <div className="hidden md:flex gap-2">
        <DarkThemeButton />
        <Link href={"/dashboard"}>
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-black bg-white rounded-full cursor-pointer hover:bg-slate-100 backdrop-blur-3xl">
              {isSignedIn ? "Dashboard" : "Login"}
            </span>
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2">
          <Menu size={24} /> {/* Hamburger menu icon */}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-50 flex flex-col p-4 bg-white dark:bg-stone-950 shadow-lg md:hidden top-16 w-full">
          <NavItems mobile />
          <Link href={"/dashboard"}>
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] mt-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-black bg-white dark:bg-stone-950 rounded-full cursor-pointer hover:bg-stone-950 backdrop-blur-3xl">
                {isSignedIn ? "Dashboard" : "Login"}
              </span>
            </button>
          </Link>
        </div>
      )}
      {/* Mobile Menu - Display on mobile when `isMenuOpen` is true */}
    </div>
  );
}

export default LandingPageNavbar;
